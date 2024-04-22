import { DashComponentType, WidgetConfig } from '@/types'
import StylePanel from './StylePanel'
import { Image } from '@dash/widgets'
const options: WidgetConfig = {
  name: '图片',
  widgetType: DashComponentType.IMAGE,
  icon: 'component-type-pie',
  component: Image,
  isChart: true,
  // 配置面板
  setterPanelTab: {
    // 样式面板
    stylePanel: <StylePanel />
  },
  defaultData: {
    hideTitle: true
  }
}
export default options
