import { DashComponentType, Widget } from '@/types'
import { ColumnChart, BarChart, PieChart, RadarChart, LineChart, AreaChart, Tab, Image } from '@dash/widgets'
import { RichText } from './components/RichText'
import { FC } from 'react'
type Config = {
  component: FC
  initData: Partial<Widget>
  icon?: string
  name: string
}
export const widgetMap: Record<DashComponentType, Config> = {
  [DashComponentType.COLUMN_CHART]: { component: ColumnChart, name: '柱状图', icon: 'component-type-line', initData: { xFields: [], metrics: [] } },
  [DashComponentType.BAR_CHART]: { component: BarChart, name: '条形图', icon: 'component-type-bar', initData: { xFields: [], metrics: [] } },
  [DashComponentType.RADAR_CHART]: { component: RadarChart, name: '雷达图', icon: '', initData: { xFields: [], metrics: [] } },
  [DashComponentType.PIE_CHART]: { component: PieChart, name: '饼图', icon: 'component-type-pie', initData: { xFields: [], metrics: [] } },
  [DashComponentType.LINE_CHART]: { component: LineChart, name: '折线图', icon: '', initData: { xFields: [], metrics: [] } },
  [DashComponentType.AREA_CHART]: { component: AreaChart, name: '面积图', icon: 'component-type-polyline', initData: { xFields: [], metrics: [] } },
  // 富文本
  [DashComponentType.RICH_TEXT]: { component: RichText, name: '富文本', icon: '', initData: { content: '', xFields: [], metrics: [] } },
  [DashComponentType.TAB]: { component: Tab, name: 'tab', initData: { xFields: [], metrics: [] } },
  [DashComponentType.IMAGE]: { component: Image, name: '图片', initData: { xFields: [], metrics: [] } }
}
