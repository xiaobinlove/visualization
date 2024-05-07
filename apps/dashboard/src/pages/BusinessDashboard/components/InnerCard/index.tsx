import { FC, ReactNode } from 'react'
import './index.less'
import classnames from 'classnames'
interface Props {
  children: ReactNode
  title?: string
  className?: string
}
const prefix = 'db-dashboard-inner-card'
const InnerCard: FC<Props> = ({ children, title, className }) => {
  return (
    <div className={classnames([prefix, className])}>
      <div className={`${prefix}__title`}>{title}</div>
      {children}
    </div>
  )
}
export default InnerCard
