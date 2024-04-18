import { DashComponentType } from '@/types'
export const options = {
  name: '柱状图',
  type: DashComponentType.COLUMN_CHART,
  // category: '', // 普通组件，
  icon: 'component-type-line',
  // isChart: true, //
  // 配置面板
  panel: {
    // 样式面板
    stylePanel: '',
    configPanel: '',
    fieldPanel: ''
  },
  related: {
    settingRender: '',
    icon: ''
  },
  defaultData: {}
}
