import { DashComponentType, WidgetConfig } from '@/types'
import ConfigPanel from './ConfigPanel'
import StylePanel from './StylePanel'
import SettingField from '@/framework/SettingPanel/SettingField'
import { AreaChart } from '@dash/widgets'
const options: WidgetConfig = {
  name: '面积图',
  widgetType: DashComponentType.AREA_CHART,
  icon: 'component-type-polyline',
  component: AreaChart,
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
