import { ReactNode, forwardRef, CSSProperties, MouseEventHandler, TouchEventHandler } from 'react'
import HeaderOperateContainer from './HeaderOperateContainer'
import classnames from 'classnames'
import { useStore, useSelector } from '@/store'
import { widgetsConfigMap } from '@/framework/base'
import { DashComponentType, Widget } from '@/types'
import { useBackgroundStyle } from '@/framework/hooks'
import './index.less'
const prefix = 'hd-grid-item-container'
interface Props extends Partial<Widget> {
  isEdit?: boolean
  title?: string
  widgetId: string
  data?: unknown
  dark: boolean
  type: DashComponentType
  titleStyle: CSSProperties
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
      titleStyle,
      isEdit = true,
      widgetId,
      data,
      dark,
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
    const background = useBackgroundStyle('styles.card.background', widgetId)
    const { isChart } = widgetsConfigMap[type]
    return (
      <div
        ref={ref}
        onClick={onClick}
        className={classnames(className, 'hd-grid-item-container', {
          'hd-grid-item-container--selected': isSelected,
          [`${prefix}--inner`]: !dark && Boolean(parent)
        })}
        style={{ ...style, ...background }}
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
        {showTitle && (
          <div className={`${prefix}__header`} style={titleStyle}>
            {title}
          </div>
        )}
        {!data && isChart && (
          <div className={`${prefix}__loader-error`}>
            <div className={`${prefix}__error-descript`}>当前图表暂无数据</div>
          </div>
        )}
        <div className={`${prefix}__content`}>{contentRender}</div>
      </div>
    )
  }
)
export default GridItemContainer
