import { DashComponentType, WidgetConfig } from '@/types'
import ConfigPanel from './ConfigPanel'
import StylePanel from './StylePanel'
import SettingField from '@/framework/SettingPanel/SettingField'
import { DataTable } from '@dash/widgets'
const options: WidgetConfig = {
  name: '明细表',
  type: DashComponentType.DATA_TABLE,
  icon: '明细表',
  component: DataTable,
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
