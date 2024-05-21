import { DashComponentType, WidgetConfig } from '@/types'
import ConfigPanel from './ConfigPanel'
import StylePanel from './StylePanel'
import SettingField from '@/framework/SettingPanel/SettingField'
import { ColumnChart } from '@dash/widgets'
const options: WidgetConfig = {
  name: '柱状图',
  type: DashComponentType.COLUMN_CHART,
  icon: '柱状图1',
  component: ColumnChart,
  isChart: true,
  // 配置面板
  setterPanelTab: {
    // 样式面板
    stylePanel: <StylePanel />,
    configPanel: <ConfigPanel />,
    fieldPanel: <SettingField />
  },
  defaultData: { xFields: [], metrics: [] },
  defaultStaticConfig: `{
    data: [
      { type: '1-3秒', value: 0.16 },
      { type: '4-10秒', value: 0.125 },
      { type: '11-30秒', value: 0.24 },
      { type: '31-60秒', value: 0.19 },
      { type: '1-3分', value: 0.22 },
      { type: '3-10分', value: 0.05 },
      { type: '10-30分', value: 0.01 },
      { type: '30+分', value: 0.015 }
    ],
    xField: 'type',
    yField: 'value',
    legend: false
  }`
}
export default options
