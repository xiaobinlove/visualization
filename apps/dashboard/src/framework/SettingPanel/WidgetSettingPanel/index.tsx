import { FC, useMemo } from 'react'
import { Tabs, TabsProps } from 'antd'
import SettingPannelDndContext from '../../components/SettingPannelDndContext'
import SettingPanelContainner from '../SettingPanelContainner'
import SwitchChartMenu from '../SwitchChartMenu'
import SettingDataPanel from '../SettingDataPanel'
import SettingLogicFlow from '../SettingLogicFlow'
import SettingStaticData from '../SettingStaticData'
import { widgetsConfigMap } from '../../base'
import { DataSource } from '@/types'
import { useStore, useSelector, curWidgetSelector } from '@/store'
const prefix = 'db-widget-setting-panel'
import './index.less'
const WidgetSettingPanel: FC = () => {
  const { updateCurWidget } = useStore(useSelector(['curWidgetId', 'updateCurWidget']))
  const { type, dataSourceType = DataSource.实体, title } = useStore(curWidgetSelector)
  const { stylePanel, configPanel, fieldPanel } = widgetsConfigMap[type].setterPanelTab
  const items: TabsProps['items'] = useMemo(() => {
    const list: TabsProps['items'] = []
    if (fieldPanel) {
      const itemMap = {
        [DataSource.实体]: {
          label: '字段',
          children: fieldPanel
        },
        [DataSource.逻辑流]: {
          label: '数据内容',
          children: <SettingLogicFlow />
        },
        [DataSource.静态数据]: {
          label: '数据内容',
          children: <SettingStaticData />
        }
      }
      const { label, children } = itemMap[dataSourceType]
      list.push({
        key: '1',
        label,
        children
      })
    }
    if (configPanel) {
      list.push({
        key: '2',
        label: '配置',
        children: configPanel
      })
    }
    if (fieldPanel) {
      list.push({
        key: '3',
        label: '样式',
        children: stylePanel
      })
    }
    return list
  }, [configPanel, dataSourceType, fieldPanel, stylePanel])

  const onTitleChange = (val: string) => {
    updateCurWidget({ title: val })
  }
  return (
    <div className={prefix}>
      <SettingPannelDndContext>
        <div className={`${prefix}__wrapper`}>
          {/* 数据源 */}
          <div className={`${prefix}__data-panel`}>
            <SettingPanelContainner title="数据" width="177px" configList={[{ key: 'data', label: '数据' }]}>
              <SettingDataPanel />
            </SettingPanelContainner>
          </div>
          <div className={`${prefix}__content`}>
            <SettingPanelContainner
              className={`${prefix}__field`}
              titleEditable
              title={title}
              width="270px"
              onTitleChange={onTitleChange}
              configList={items.map(({ key, label }) => ({ key, label }))}
            >
              {/* 切换图表 */}
              <SwitchChartMenu />
              <Tabs centered className={`${prefix}__tabs`} defaultActiveKey="1" items={items} />
            </SettingPanelContainner>
          </div>
        </div>
      </SettingPannelDndContext>
    </div>
  )
}
export default WidgetSettingPanel