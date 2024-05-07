import { FC, ReactNode } from 'react'
import classnames from 'classnames'
import './index.less'
interface Props {
  children: ReactNode
  title?: string
  className?: string
}
const prefix = 'db-dashboard-card'
const Card: FC<Props> = ({ children, title, className }) => {
  return (
    <div className={classnames(prefix, className)}>
      {title && (
        <div className={`${prefix}__header`}>
          <div className={`${prefix}__title`}>{title}</div>
        </div>
      )}
      {title ? <div className={`${prefix}__content`}>{children}</div> : children}
    </div>
  )
}
export default Card
