import { FC, ReactNode } from 'react'
import './index.less'
type Props = {
  children: ReactNode
}
export const Tab: FC<Props> = ({ children }) => {
  return <div>{children}</div>
}
