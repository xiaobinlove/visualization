import { DashComponentType, WidgetConfig } from '@/types'
import StylePanel from './StylePanel'
import SettingField from '@/framework/SettingPanel/SettingField'
import { IndicatorCard } from '@dash/widgets'
const options: WidgetConfig = {
  name: '指标看板',
  type: DashComponentType.INDICATOR_CARD,
  icon: 'component-type-pie',
  component: IndicatorCard,
  isChart: true,
  // 配置面板
  setterPanelTab: {
    // 样式面板
    stylePanel: <StylePanel />,
    fieldPanel: <SettingField />
  },
  defaultData: { metrics: [], hideTitle: true }
}
export default options
