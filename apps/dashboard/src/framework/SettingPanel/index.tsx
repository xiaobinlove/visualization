import { FC, useState } from 'react'
import { Tabs, TabsProps, Select } from 'antd'
import SettingPannelDndContext from '../components/SettingPannelDndContext'
import SettingPanelContainner from './SettingPanelContainner'
import SwitchChartMenu from './SwitchChartMenu'
import GlobalSettingPanel from './GlobalSettingPanel'
import SettingField from './SettingField'
import ConfigStyle from '../components/ConfigStyle'
import SettingDataPanel from './SettingDataPanel'
import ConfigFunc from '../components/ConfigFunc'
import { widgetMap } from '../widgetMap'
import { useStore, useSelector, curWidgetSelector } from '@/store'
const prefix = 'db-setting-panel'

import './index.less'
import { SvgIcon } from '@dash/icons'
const SettingPanel: FC = () => {
  const { curWidgetId, updateCurWidget } = useStore(useSelector(['curWidgetId', 'updateCurWidget']))
  const curWidget = useStore(curWidgetSelector)
  const StylePanel = curWidgetId && widgetMap[curWidget.type].stylePanel ? widgetMap[curWidget.type].stylePanel : ConfigStyle
  const items: TabsProps['items'] = [
    // {
    //   key: '0',
    //   label: '数据',
    //   children: <SettingField />
    // },
    {
      key: '1',
      label: '字段',
      children: <SettingField />
    },
    {
      key: '2',
      label: '配置',
      children: <ConfigFunc />
    },
    {
      key: '3',
      label: '样式',
      children: <StylePanel />
    }
  ]
  const onTitleChange = (val: string) => {
    updateCurWidget({ title: val })
  }
  return (
    <SettingPannelDndContext>
      <div className={prefix}>
        {curWidgetId ? (
          <>
            {/* 数据源 */}
            <div className={`${prefix}__cube-wrapper`}>
              <SettingPanelContainner title="数据" width="177px" configList={[{ key: 'data', label: '数据' }]}>
                <SettingDataPanel />
              </SettingPanelContainner>
            </div>
            <div className={`${prefix}__wrapper`}>
              <SettingPanelContainner
                className={`${prefix}__field`}
                titleEditable
                title={curWidget.title}
                width="270px"
                onTitleChange={onTitleChange}
                configList={items.map(({ key, label }) => ({ key, label }))}
              >
                {/* 切换图表 */}
                <SwitchChartMenu />
                <Tabs centered className={`${prefix}__tabs`} defaultActiveKey="1" items={items} />
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
