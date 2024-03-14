import { FC, ReactNode } from 'react'
import { DndContext, KeyboardSensor, MouseSensor, useSensor, useSensors, DndContextProps } from '@dnd-kit/core'
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable'
interface Props extends DndContextProps {
  children: ReactNode
}
const SettingPannelDndContext: FC<Props> = ({ children, ...res }) => {
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
  return (
    <DndContext sensors={sensors} {...res}>
      {children}
    </DndContext>
  )
}
export default SettingPannelDndContext
