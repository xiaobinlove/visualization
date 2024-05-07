import { ReactNode, FC } from 'react'
import './index.less'
const prefix = 'hd-grid-item-container'
interface Props {
  title?: string
  contentRender: ReactNode
}
const CollectItemContainer: FC<Props> = ({ title, contentRender }) => {
  return (
    <div className={prefix}>
      <div className={`${prefix}__header`}>{title}</div>
      <div className={`${prefix}__content`}>{contentRender}</div>
    </div>
  )
}

export default CollectItemContainer
