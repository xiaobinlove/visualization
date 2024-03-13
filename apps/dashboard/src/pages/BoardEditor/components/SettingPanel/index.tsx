import { FC, useState } from 'react'
import { Tabs, TabsProps } from 'antd'
import SettingPannelDndContext from '../SettingPannelDndContext'
import SettingPanelContainner from '../SettingPanelContainner'
import GlobalSettingPanel from '../GlobalSettingPanel'
import SettingField from '../SettingField'
import SettingDataPanel from '../SettingDataPanel'
import ConfigFunc from '../ConfigFunc'
import { useStore, useSelector, curWidgetSelector } from '@/store'
const prefix = 'db-setting-panel'

import './index.less'
const SettingPanel: FC = () => {
  const { curWidgetId, updateCurWidget } = useStore(useSelector(['curWidgetId', 'updateCurWidget']))
  const curWidget = useStore(curWidgetSelector)
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '字段',
      children: <SettingField />
    },
    {
      key: '2',
      label: '功能',
      children: <ConfigFunc />
    },
    {
      key: '3',
      label: '样式',
      children: 'Content of Tab Pane 3'
    }
  ]
  const onTabChange = () => {
    console.log('onTabChange')
  }
  const closedTabClick = (key: string) => {
    console.log(key)
  }
  console.log('curWidgetId1', curWidgetId)
  const onTitleChange = (val: string) => {
    updateCurWidget({ title: val })
  }
  return (
    <SettingPannelDndContext>
      <div className={prefix}>
        {curWidgetId ? (
          <>
            <div className={`${prefix}__wrapper`}>
              <SettingPanelContainner
                titleEditable
                title={curWidget.title}
                width="240px"
                onTitleChange={onTitleChange}
                closedTabClick={closedTabClick}
                configList={items.map(({ key, label }) => ({ key, label }))}
              >
                {/* <div className={`${prefix}__switch-chart`}>切换图表</div> */}
                <Tabs centered className={`${prefix}__tabs`} defaultActiveKey="1" items={items} onChange={onTabChange} />
              </SettingPanelContainner>
            </div>
            <div className={`${prefix}__cube-wrapper`}>
              <SettingPanelContainner title="数据源" width="148px" closedTabClick={closedTabClick} configList={[{ key: 'data', label: '数据' }]}>
                <SettingDataPanel />
              </SettingPanelContainner>
            </div>
          </>
        ) : (
          // 全局设置
          <GlobalSettingPanel />
        )}
      </div>
    </SettingPannelDndContext>
  )
}
export default SettingPanel
