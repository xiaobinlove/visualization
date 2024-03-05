import { FC, ReactNode } from 'react'
import { useSortable, UseSortableArguments } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
interface Props extends UseSortableArguments {
  children: ReactNode
  className?: string
}
const SortableItem: FC<Props> = ({ children, className, ...res }) => {
  const { attributes, listeners, isSorting, setNodeRef, transition, transform } = useSortable({
    ...res
  })
  return (
    <>
      <div
        className={className}
        style={{
          transition,
          transform: isSorting ? undefined : CSS.Translate.toString(transform)
        }}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
      >
        {children}
      </div>
    </>
  )
}
export default SortableItem
