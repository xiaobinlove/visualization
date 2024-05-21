import { FC, useMemo, useCallback } from 'react'
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

  const { type, dataSourceType = DataSource.实体, title, staticConfigStr } = useStore(curWidgetSelector)
  const { setterPanelTab, defaultStaticConfig } = widgetsConfigMap[type]
  const { stylePanel, configPanel, fieldPanel } = setterPanelTab
  const handleCodeChange = useCallback(
    (val: string) => {
      updateCurWidget({ staticConfigStr: val })
    },
    [updateCurWidget]
  )
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
          children: <SettingStaticData value={staticConfigStr} onChange={handleCodeChange} />
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
  }, [configPanel, dataSourceType, fieldPanel, handleCodeChange, staticConfigStr, stylePanel])
  const onTitleChange = (val: string) => {
    updateCurWidget({ title: val })
  }
  const onDataSourceTypeChange = (val: DataSource) => {
    if (val === DataSource.静态数据) {
      // TODO 清空数据配置 DefaultData
      updateCurWidget({
        metrics: [],
        xFields: []
      })
      if (!staticConfigStr) {
        updateCurWidget({
          staticConfigStr: defaultStaticConfig
        })
      }
      // 获取默认静态数据
    } else {
      // 清空数据
      updateCurWidget({
        staticConfigStr: undefined
      })
    }
    // TODO: 清空数据配置 DefaultData
  }
  return (
    <div className={prefix}>
      <SettingPannelDndContext>
        <div className={`${prefix}__wrapper`}>
          {/* 数据源 */}
          <div className={`${prefix}__data-panel`}>
            <SettingPanelContainner title="数据" width="177px" configList={[{ key: 'data', label: '数据' }]}>
              <SettingDataPanel onDataSourceTypeChange={onDataSourceTypeChange} />
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
