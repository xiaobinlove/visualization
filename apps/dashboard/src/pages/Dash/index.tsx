import { FC } from 'react'
import GridLayouts from '@/components/GridLayouts'
import './index.less'
const Dash: FC = () => {
  return (
    <div className="db-dash">
      <GridLayouts isEdit={false} isDroppable={false} isDraggable={false} isResizable={false} />
    </div>
  )
}
export default Dash
