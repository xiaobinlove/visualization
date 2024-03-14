import { FC, CSSProperties, ReactNode } from 'react'
import { useDroppable, UseDroppableArguments } from '@dnd-kit/core'
interface Props extends UseDroppableArguments {
  id: string
  children: ReactNode
}

const Droppable: FC<Props> = ({ id, children, ...res }) => {
  const { isOver, setNodeRef } = useDroppable({ id, ...res })
  const style: CSSProperties = {
    color: isOver ? 'green' : undefined
  }
  return (
    <div style={style} ref={setNodeRef}>
      {children}
    </div>
  )
}
export default Droppable
