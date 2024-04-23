import { DashComponentType, WidgetConfig } from '@/types'
import ConfigPanel from './ConfigPanel'
import StylePanel from './StylePanel'
import SettingField from '@/framework/SettingPanel/SettingField'
import { PieChart } from '@dash/widgets'
const options: WidgetConfig = {
  name: '折线图',
  type: DashComponentType.PIE_CHART,
  icon: 'component-type-pie',
  component: PieChart,
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
