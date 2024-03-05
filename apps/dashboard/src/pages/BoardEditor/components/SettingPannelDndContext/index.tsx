import { FC, ReactNode } from 'react'
import { DndContext, KeyboardSensor, MouseSensor, useSensor, useSensors } from '@dnd-kit/core'
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable'
type Props = {
  children: ReactNode
}
const SettingPannelDndContext: FC<Props> = ({ children }) => {
  const sensors = useSensors(
    useSensor(MouseSensor, {
      // Require the mouse to move by 10 pixels before activating
      activationConstraint: {
        distance: 5
      }
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )
  return <DndContext sensors={sensors}>{children}</DndContext>
}
export default SettingPannelDndContext
