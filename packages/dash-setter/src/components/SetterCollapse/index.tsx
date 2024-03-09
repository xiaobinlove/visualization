import { FC } from 'react'
import type { CollapseProps } from 'antd'
import { Collapse } from 'antd'
import './index.less'
interface Props {
  items: CollapseProps['items']
}
export const SetterCollapse: FC<Props> = ({ items }) => {
  return <Collapse items={items} bordered={false} size="small" />
}
