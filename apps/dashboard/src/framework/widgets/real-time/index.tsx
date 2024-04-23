import { DashComponentType, WidgetConfig } from '@/types'
import StylePanel from './StylePanel'
import { DataTable } from '@dash/widgets'
const options: WidgetConfig = {
  name: '实时时间',
  type: DashComponentType.REAL_TIME,
  icon: 'component-type-line',
  component: DataTable,
  isChart: true,
  // 配置面板
  setterPanelTab: {
    // 样式面板
    stylePanel: <StylePanel />
  },
  defaultData: { xFields: [], metrics: [] }
}
export default options
