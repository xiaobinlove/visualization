import { DashComponentType, Widget } from '@/types'
import { ColumnChart, BarChart, PieChart, RadarChart, LineChart, AreaChart, Tab, Image, IndicatorCard, GanttChart, DataTable } from '@dash/widgets'
import { RichText } from './components/RichText'
import { FC } from 'react'
type Config = {
  component: FC
  initData: Partial<Widget>
  icon?: string // 图标
  name: string
  isChart?: boolean // 是否是图表控件
  showTitle?: boolean // 图表是否显示标题 默认显示
}
export const widgetMap: Record<DashComponentType, Config> = {
  [DashComponentType.COLUMN_CHART]: {
    component: ColumnChart,
    isChart: true,
    name: '柱状图',
    icon: 'component-type-line',
    initData: { xFields: [], metrics: [] }
  },
  [DashComponentType.BAR_CHART]: { component: BarChart, isChart: true, name: '条形图', icon: 'component-type-bar', initData: { xFields: [], metrics: [] } },
  [DashComponentType.RADAR_CHART]: { component: RadarChart, isChart: true, name: '雷达图', icon: '', initData: { xFields: [], metrics: [] } },
  [DashComponentType.PIE_CHART]: { component: PieChart, isChart: true, name: '饼图', icon: 'component-type-pie', initData: { xFields: [], metrics: [] } },
  [DashComponentType.LINE_CHART]: { component: LineChart, isChart: true, name: '折线图', icon: '', initData: { xFields: [], metrics: [] } },
  [DashComponentType.AREA_CHART]: {
    component: AreaChart,
    isChart: true,
    name: '面积图',
    icon: 'component-type-polyline',
    initData: { xFields: [], metrics: [] }
  },
  [DashComponentType.DATA_TABLE]: {
    component: DataTable,
    isChart: true,
    name: '明细表',
    icon: 'component-type-line',
    initData: { xFields: [], metrics: [] }
  },
  [DashComponentType.GANTT_CHART]: { component: GanttChart, isChart: true, name: '甘特图', icon: '', initData: { xFields: [], metrics: [] } },
  // 富文本
  [DashComponentType.RICH_TEXT]: { component: RichText, showTitle: false, name: '富文本', icon: '', initData: { content: '', xFields: [], metrics: [] } },
  [DashComponentType.TAB]: { component: Tab, name: 'tab', initData: { xFields: [], metrics: [] } },
  [DashComponentType.IMAGE]: { component: Image, showTitle: false, name: '图片', initData: { xFields: [], metrics: [] } },
  [DashComponentType.INDICATOR_CARD]: { component: IndicatorCard, showTitle: false, isChart: true, name: '指标看板', initData: { xFields: [], metrics: [] } }
}
