import { DashComponentType } from '@/types'
import { ColumnChart, BarChart, PieChart, RadarChart, LineChart } from '@dash/widgets'
export const widgetMap = {
  [DashComponentType.COLUMN_CHART]: ColumnChart,
  [DashComponentType.BAR_CHART]: BarChart,
  [DashComponentType.RADAR_CHART]: RadarChart,
  [DashComponentType.PIE_CHART]: PieChart,
  [DashComponentType.LINE_CHART]: LineChart
}
