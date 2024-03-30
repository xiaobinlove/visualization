import { FC, ReactNode } from 'react'
import './index.less'
import { useBackgroundStyle } from '../../hooks'
const prefix = 'db-canvas-container'
type Props = {
  children: ReactNode
}
export const CanvasContainer: FC<Props> = ({ children }) => {
  const style = useBackgroundStyle('styles.background')
  return (
    <div className={prefix} style={style}>
      {children}
    </div>
  )
}
