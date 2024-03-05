import { FC, useState } from 'react'
import { Tabs, TabsProps } from 'antd'
import SettingPannelDndContext from '../SettingPannelDndContext'
import SettingPanelContainner from '../SettingPanelContainner'
import SettingField from '../SettingField'
import SettingDataPanel from '../SettingDataPanel'
const prefix = 'db-setting-panel'

import './index.less'
const SettingPanel: FC = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '字段',
      children: <SettingField />
    },
    {
      key: '2',
      label: '功能',
      children: 'Content of Tab Pane 2'
    },
    {
      key: '3',
      label: '图表',
      children: 'Content of Tab Pane 3'
    }
  ]
  const onTabChange = () => {
    console.log('onTabChange')
  }
  const closedTabClick = (key: string) => {
    console.log(key)
  }
  return (
    <SettingPannelDndContext>
      <div className={prefix}>
        <div className={`${prefix}__wrapper`}>
          <SettingPanelContainner
            titleEditable
            title="柱状图"
            width="240px"
            closedTabClick={closedTabClick}
            configList={items.map(({ key, label }) => ({ key, label }))}
          >
            {/* <div className={`${prefix}__switch-chart`}>切换图表</div> */}
            <Tabs centered className={`${prefix}__tabs`} defaultActiveKey="1" items={items} onChange={onTabChange} />
          </SettingPanelContainner>
        </div>
        <div className={`${prefix}__cube-wrapper`}>
          <SettingPanelContainner title="数据源" width="180px" closedTabClick={closedTabClick} configList={[{ key: 'data', label: '数据' }]}>
            <SettingDataPanel />
          </SettingPanelContainner>
        </div>
      </div>
    </SettingPannelDndContext>
  )
}
export default SettingPanel
