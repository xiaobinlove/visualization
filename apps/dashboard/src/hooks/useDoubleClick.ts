import { MutableRefObject, useEffect, useRef, MouseEvent as RMouseEvent } from 'react'

export interface UseDBClickOptions<T extends HTMLElement> {
  ref: MutableRefObject<T | undefined | null> | T
  onClick?: (e: RMouseEvent<T>) => void
  onDBClick?: (e: RMouseEvent<T>) => void

  /**
   * 单位 ms
   */
  interval?: number
}

/**
 *
 * eg:
 * useDBClick({
 *   ref,
 *   onClick: () => {},
 *   onDBClick: () => {},
 *   interval: 200
 * });
 *
 */
const useDoubleClick = <T extends HTMLElement = HTMLElement>(options: UseDBClickOptions<T>) => {
  const { ref, onClick, onDBClick, interval = 200 } = options

  if (typeof interval !== 'number' || isNaN(interval)) {
    throw new Error('Invalid interval type')
  }

  const intervalRef = useRef<number | null>()
  const timerRef = useRef<number | null>()

  const isDom = (node: unknown): node is HTMLElement | SVGElement => node instanceof HTMLElement || node instanceof SVGElement

  const isRefObject = (obj: object): obj is MutableRefObject<T> => 'current' in obj

  const generateElement = (ref: UseDBClickOptions<T>['ref']) => {
    if (isRefObject(ref)) {
      if (isDom(ref.current)) {
        return ref.current
      }
    }
    if (isDom(ref)) {
      return ref
    }
    return
  }

  /**
   * 根据两次点击的间隔是否小于 interval 来判断触发单击双击事件
   */
  const innerClick = (e: MouseEvent) => {
    const time = Date.now()
    if (typeof intervalRef.current === 'number' && time - intervalRef.current < interval) {
      // dbclick
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
      timerRef.current = null
      intervalRef.current = null
      onDBClick?.(e as unknown as RMouseEvent<T>)
      return
    }

    // click
    intervalRef.current = time
    timerRef.current = setTimeout(() => {
      onClick?.(e as unknown as RMouseEvent<T>)
    }, interval)
    return
  }

  const listenClick = () => {
    const element = generateElement(ref)
    if (!element) {
      return
    }

    element.addEventListener('click', innerClick)
  }

  const unlistenClick = () => {
    const element = generateElement(ref)
    if (!element) {
      return
    }

    element.removeEventListener('click', innerClick)
  }

  useEffect(() => {
    listenClick()
    return () => {
      unlistenClick()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useDoubleClick
