import { FC, ReactNode } from 'react'
import HeaderOperateContainer from './HeaderOperateContainer'
import { useStore, useSelector } from '@/store'
import './index.less'
const prefix = 'hd-grid-item-container'
type Props = {
  isEdit?: boolean
  title?: string
  children: ReactNode
  widgetId: string
}
const GridItemContainer: FC<Props> = ({ title, children, isEdit = true, widgetId }) => {
  const { isDraggableInEdit } = useStore(useSelector(['isDraggableInEdit']))
  return (
    <>
      {isEdit && isDraggableInEdit && <HeaderOperateContainer widgetId={widgetId} />}
      {title && <div className={`${prefix}__header`}>{title}</div>}
      <div className={`${prefix}__content`}>{children}</div>
    </>
  )
}
export default GridItemContainer
