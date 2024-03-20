import { ReactNode, forwardRef, CSSProperties, MouseEventHandler, TouchEventHandler } from 'react'
import HeaderOperateContainer from './HeaderOperateContainer'
import classnames from 'classnames'
import { useStore, useSelector } from '@/store'
import { widgetMap } from '@/pages/BoardEditor/widgetMap'
import { DashComponentType, Widget } from '@/types'
import './index.less'
const prefix = 'hd-grid-item-container'
interface Props extends Partial<Widget> {
  isEdit?: boolean
  title?: string
  widgetId: string
  data?: unknown
  type: DashComponentType
  showTitle?: boolean
  contentRender: ReactNode
  children?: ReactNode
  isSelected: boolean
  onClick?: MouseEventHandler
  className?: string
  style?: CSSProperties
  onMouseDown?: MouseEventHandler<HTMLDivElement>
  onMouseUp?: MouseEventHandler<HTMLDivElement>
  onTouchEnd?: TouchEventHandler<HTMLDivElement>
}
const GridItemContainer = forwardRef<HTMLDivElement, Props>(
  (
    {
      title,
      children,
      isEdit = true,
      widgetId,
      data,
      type,
      showTitle = true,
      parent,
      contentRender,
      isSelected,
      onClick,
      className,
      style,
      onMouseDown,
      onMouseUp,
      onTouchEnd
    },
    ref
  ) => {
    const { isDraggableInEdit } = useStore(useSelector(['isDraggableInEdit']))
    const { isChart } = widgetMap[type]
    console.log(parent, 'parent')
    return (
      <div
        ref={ref}
        onClick={onClick}
        className={classnames(className, 'hd-grid-item-container', { 'hd-grid-item-container--selected': isSelected, [`${prefix}--inner`]: Boolean(parent) })}
        style={style}
        onMouseDown={(e) => {
          // 防止
          e.stopPropagation()
          onMouseDown?.(e)
        }}
        onMouseUp={(e) => {
          e.stopPropagation()
          onMouseUp?.(e)
        }}
        onTouchEnd={onTouchEnd}
      >
        {isEdit && isDraggableInEdit && <HeaderOperateContainer widgetId={widgetId} />}
        {showTitle && <div className={`${prefix}__header`}>{title}</div>}
        {!data && isChart && (
          <div className={`${prefix}__loader-error`}>
            <div className={`${prefix}__error-descript`}>当前图表暂无数据</div>
          </div>
        )}

        <div className={`${prefix}__content`}>{contentRender}</div>
        {children}
      </div>
    )
  }
)
export default GridItemContainer
