import { FC, ReactNode } from 'react'
import { useDraggable, UseDraggableArguments } from '@dnd-kit/core'
import classNames from 'classnames'
interface Props extends UseDraggableArguments {
  children: ReactNode
  className?: string
  id: string
}
const Draggable: FC<Props> = ({ children, className, id, ...res }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id,
    ...res
  })
  return (
    <div ref={setNodeRef} {...attributes} {...listeners} className={classNames(className, isDragging && 'lc-sortable-item--active')}>
      {children}
    </div>
  )
}
export default Draggable
