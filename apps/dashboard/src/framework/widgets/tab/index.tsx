import { DashComponentType, WidgetConfig } from '@/types'
import StylePanel from './StylePanel'
import { Tab } from '@dash/widgets'
const options: WidgetConfig = {
  name: 'tab容器',
  widgetType: DashComponentType.TAB,
  icon: 'component-type-polyline',
  component: Tab,
  isChart: false,
  // 配置面板
  setterPanelTab: {
    // 样式面板
    stylePanel: <StylePanel />
  }
}
export default options
