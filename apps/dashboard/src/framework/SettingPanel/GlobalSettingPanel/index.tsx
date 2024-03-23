import { FC } from 'react'
import { Tabs } from 'antd'
import type { CollapseProps } from 'antd'
import { SetterCollapse } from '../../../../../../packages/dash-setter/src'
import './index.less'
const prefix = 'global-setting-panel'
const GlobalSettingPanel: FC = () => {
  const items: CollapseProps['items'] = [
    {
      label: '仪表盘整体',
      children: <div>222333</div>
    },
    {
      label: '图表整体',
      children: <div>222333</div>
    }
  ]
  const children = (
    <div>
      <SetterCollapse items={items} />
    </div>
  )
  return (
    <div className={prefix}>
      <Tabs items={[{ key: '1', label: '仪表盘样式', children }]} centered />
    </div>
  )
}
export default GlobalSettingPanel
