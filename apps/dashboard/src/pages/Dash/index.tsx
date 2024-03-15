import { FC } from 'react'
import { useMount } from 'ahooks'
import GridLayouts from '@/components/GridLayouts'
import { useStore, useSelector } from '@/store'
import './index.less'
const Dash: FC = () => {
  const { setWidgets } = useStore(useSelector(['setWidgets']))
  useMount(() => {
    setWidgets(JSON.parse(localStorage.getItem('dash-data')!))
  })
  return (
    <div className="db-dash">
      <GridLayouts isEdit={false} isDroppable={false} isDraggable={false} isResizable={false} />
    </div>
  )
}
export default Dash
