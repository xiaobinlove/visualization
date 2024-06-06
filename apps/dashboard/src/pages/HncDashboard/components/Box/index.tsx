import { FC, ReactNode, useState } from 'react'
import classnames from 'classnames'
import './index.less'
const prefix = 'db-hnc-box'
type Item = { label: string; children: ReactNode; key: string }
type Props = {
  items?: Item[]
  children?: ReactNode
  headerRight?: ReactNode
  noBorder?: boolean
}
const Box: FC<Props> = ({ items, headerRight, children, noBorder = false }) => {
  const [curTab, setCurTab] = useState(items?.[0].key)
  const handleTabClick = (key: string) => {
    setCurTab(key)
  }
  return (
    <div className={prefix}>
      <div className={`${prefix}__header`}>
        <div className={`${prefix}__tabs`}>
          {items?.map((item: Item) => {
            return (
              <div
                key={item.key}
                onClick={() => {
                  handleTabClick(item.key)
                }}
                className={classnames(`${prefix}__tab`, { [`${prefix}__tab--active`]: curTab === item.key })}
              >
                {item.label}
              </div>
            )
          })}
        </div>
        <div className={`${prefix}__header-right`}>{headerRight}</div>
      </div>

      <div className={classnames(`${prefix}__content`, { [`${prefix}__noboard`]: noBorder })}>
        {items ? items.find((item: Item) => item.key === curTab)?.children : children}
      </div>
    </div>
  )
}
export default Box
