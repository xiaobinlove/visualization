import { DashComponentType, Widget } from '@/types'
import { ColumnChart, BarChart, PieChart, RadarChart, LineChart, AreaChart, Tab, Image } from '@dash/widgets'
import { RichText } from './components/RichText'
import { FC } from 'react'
type Config = {
  component: FC
  initData: Partial<Widget>
}
export const widgetMap: Record<DashComponentType, Config> = {
  [DashComponentType.COLUMN_CHART]: { component: ColumnChart, initData: {} },
  [DashComponentType.BAR_CHART]: { component: BarChart, initData: {} },
  [DashComponentType.RADAR_CHART]: { component: RadarChart, initData: {} },
  [DashComponentType.PIE_CHART]: { component: PieChart, initData: {} },
  [DashComponentType.LINE_CHART]: { component: LineChart, initData: {} },
  [DashComponentType.AREA_CHART]: { component: AreaChart, initData: {} },
  // 富文本
  [DashComponentType.RICH_TEXT]: { component: RichText, initData: { content: '' } },
  [DashComponentType.TAB]: { component: Tab, initData: {} },
  [DashComponentType.IMAGE]: { component: Image, initData: {} }
}
