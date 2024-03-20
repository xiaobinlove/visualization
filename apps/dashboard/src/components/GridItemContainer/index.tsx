import { ReactNode, forwardRef, CSSProperties, MouseEventHandler, TouchEventHandler } from 'react'
import HeaderOperateContainer from './HeaderOperateContainer'
import classnames from 'classnames'
import { useStore, useSelector } from '@/store'
import { widgetMap } from '@/pages/BoardEditor/widgetMap'
import { DashComponentType } from '@/types'
import './index.less'
const prefix = 'hd-grid-item-container'
type Props = {
  isEdit?: boolean
  title?: string
  widgetId: string
  data?: unknown
  type: DashComponentType
  showTitle?: boolean
  contentRender: ReactNode
  children?: ReactNode
  isSelected?: boolean
  onClick?: MouseEventHandler
  className?: string
  style?: CSSProperties
  onMouseDown?: MouseEventHandler
  onMouseUp?: MouseEventHandler
  onTouchEnd?: TouchEventHandler
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
      contentRender,
      onClick,
      isSelected,
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

    return (
      <div
        ref={ref}
        onClick={onClick}
        className={classnames(className, 'hd-grid-item-container', { 'hd-grid-item-container--selected': isSelected })}
        style={style}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
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
