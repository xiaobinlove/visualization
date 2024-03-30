import { useStore, useSelector } from '@/store'
import type { Background } from '@/types'
import { get } from 'lodash-es'
import { CSSProperties } from 'react'
export const useBackgroundStyle = (backgroundPath: string, widgetId?: string): CSSProperties | undefined => {
  let background: Background = useStore((state) => get(state, backgroundPath))
  const { widgets } = useStore(useSelector(['widgets']))
  if (backgroundPath === 'styles.card.background') {
    const curWidget = widgets[widgetId!]
    background = curWidget?.styles?.background || background
  }
  const { type, color, image } = background
  if ((type === 'color' && color) || (!image && color)) {
    return {
      backgroundColor: color
    }
  }
  if (type === 'image' && image) {
    return {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }
  }
}
