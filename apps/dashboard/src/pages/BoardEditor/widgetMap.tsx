import { DashComponentType, Widget } from '@/types'
import { ColumnChart, BarChart, PieChart, RadarChart, LineChart, AreaChart, Tab, Image } from '@dash/widgets'
import { RichText } from './components/RichText'
import { FC } from 'react'
type Config = {
  component: FC
  initData: Partial<Widget>
}
export const widgetMap: Record<DashComponentType, Config> = {
  [DashComponentType.COLUMN_CHART]: { component: ColumnChart, initData: { xFields: [], metrics: [] } },
  [DashComponentType.BAR_CHART]: { component: BarChart, initData: { xFields: [], metrics: [] } },
  [DashComponentType.RADAR_CHART]: { component: RadarChart, initData: { xFields: [], metrics: [] } },
  [DashComponentType.PIE_CHART]: { component: PieChart, initData: { xFields: [], metrics: [] } },
  [DashComponentType.LINE_CHART]: { component: LineChart, initData: { xFields: [], metrics: [] } },
  [DashComponentType.AREA_CHART]: { component: AreaChart, initData: { xFields: [], metrics: [] } },
  // 富文本
  [DashComponentType.RICH_TEXT]: { component: RichText, initData: { content: '', xFields: [], metrics: [] } },
  [DashComponentType.TAB]: { component: Tab, initData: { xFields: [], metrics: [] } },
  [DashComponentType.IMAGE]: { component: Image, initData: { xFields: [], metrics: [] } }
}
