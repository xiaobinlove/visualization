import { DashComponentType, WidgetConfig } from '@/types'
import ConfigPanel from './ConfigPanel'
import StylePanel from './StylePanel'
import SettingField from '@/framework/SettingPanel/SettingField'
import { ColumnChart } from '@dash/widgets'
const options: WidgetConfig = {
  name: '仪表盘',
  type: DashComponentType.DASH_BOARD_CHART,
  icon: 'component-type-gauge-new',
  component: ColumnChart,
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