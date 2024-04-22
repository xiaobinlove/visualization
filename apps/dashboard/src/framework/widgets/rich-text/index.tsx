import { DashComponentType, WidgetConfig } from '@/types'
import StylePanel from './StylePanel'
import { RichText } from '@/framework/components/RichText'
const options: WidgetConfig = {
  name: '富文本',
  widgetType: DashComponentType.RICH_TEXT,
  icon: 'component-type-line',
  component: RichText,
  isChart: false,
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
