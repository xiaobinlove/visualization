import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import HeaderOperateContainer from './HeaderOperateContainer'
import './index.less'
const prefix = 'hd-grid-item-container'
type Props = {
  isEdit?: boolean
  title?: string
  children: ReactNode
}
const GridItemContainer: FC<Props> = ({ title, children, isEdit = true }) => {
  return (
    <div className={classNames(prefix, { [`${prefix}--selected`]: false })}>
      {isEdit && <HeaderOperateContainer />}
      {title && <div className={`${prefix}__header`}>{title}</div>}
      <div className={`${prefix}__content`}>{children}</div>
    </div>
  )
}
export default GridItemContainer
