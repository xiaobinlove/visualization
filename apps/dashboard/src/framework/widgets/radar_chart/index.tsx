import { DashComponentType, WidgetConfig } from '@/types'
import ConfigPanel from './ConfigPanel'
import StylePanel from './StylePanel'
import SettingField from '@/framework/SettingPanel/SettingField'
import { RadarChart } from '@dash/widgets'
const options: WidgetConfig = {
  name: '雷达图',
  widgetType: DashComponentType.RADAR_CHART,
  icon: 'component-type-bar',
  component: RadarChart,
  isChart: true,
  // 配置面板
  setterPanelTab: {
    // 样式面板
    stylePanel: <StylePanel />,
    configPanel: <ConfigPanel />,
    fieldPanel: <SettingField />
  },
  defaultData: { xFields: [], metrics: [] }
}
export default options
