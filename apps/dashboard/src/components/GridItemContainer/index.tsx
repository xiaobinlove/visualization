import { FC, ReactNode } from 'react'
import HeaderOperateContainer from './HeaderOperateContainer'
import { useStore, useSelector } from '@/store'
import { widgetMap } from '@/pages/BoardEditor/widgetMap'
import { DashComponentType } from '@/types'
import './index.less'
const prefix = 'hd-grid-item-container'
type Props = {
  isEdit?: boolean
  title?: string
  children: ReactNode
  widgetId: string
  data?: unknown
  type: DashComponentType
  showTitle?: boolean
}
const GridItemContainer: FC<Props> = ({ title, children, isEdit = true, widgetId, data, type, showTitle = true }) => {
  const { isDraggableInEdit } = useStore(useSelector(['isDraggableInEdit']))
  const { isChart } = widgetMap[type]
  return (
    <>
      {isEdit && isDraggableInEdit && <HeaderOperateContainer widgetId={widgetId} />}
      {showTitle && <div className={`${prefix}__header`}>{title}</div>}
      {!data && isChart && (
        <div className={`${prefix}__loader-error`}>
          <div className={`${prefix}__error-descript`}>当前图表暂无数据</div>
        </div>
      )}

      <div className={`${prefix}__content`}>{children}</div>
    </>
  )
}
export default GridItemContainer
