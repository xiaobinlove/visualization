import { FC } from 'react'
import type { CollapseProps } from 'antd'
import { Collapse } from 'antd'
import './index.less'
interface Props extends CollapseProps {
  items: CollapseProps['items']
}
export const SetterCollapse: FC<Props> = ({ items, ...res }) => {
  return <Collapse items={items} className="db-setter-collapse" bordered={false} {...res} />
}
