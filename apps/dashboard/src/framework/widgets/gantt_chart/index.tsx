import { DashComponentType, WidgetConfig } from '@/types'
import ConfigPanel from './ConfigPanel'
import StylePanel from './StylePanel'
import SettingField from '@/framework/SettingPanel/SettingField'
import { GanttChart } from '@dash/widgets'
const options: WidgetConfig = {
  name: '柱状图',
  widgetType: DashComponentType.GANTT_CHART,
  icon: 'component-type-line',
  component: GanttChart,
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
