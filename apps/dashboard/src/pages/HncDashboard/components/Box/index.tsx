import { FC, ReactNode, useState } from 'react'
import classnames from 'classnames'
import './index.less'
const prefix = 'db-hnc-box'
type Props = {
  items: { label: string; children: ReactNode; key: string }[]
  headerRight?: ReactNode
}
const Box: FC<Props> = ({ items, headerRight }) => {
  const [curTab, setCurTab] = useState(items[0].key)
  const handleTabClick = (key: string) => {
    setCurTab(key)
  }
  return (
    <div className={prefix}>
      <div className={`${prefix}__header`}>
        <div className={`${prefix}__tabs`}>
          {items.map((item) => {
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
      <div className={`${prefix}__content`}>{items.find((item) => item.key === curTab)?.children}</div>
    </div>
  )
}
export default Box
