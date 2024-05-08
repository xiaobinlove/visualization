import { DashComponentType } from '@/types'
import { Column, Bar } from '@ant-design/plots'
import { DataTable, LineChart } from '@dash/widgets'
import Text from './components/Text'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const componentMap: Record<string, any> = {
  text: Text,
  [DashComponentType.COLUMN_CHART]: Column,
  [DashComponentType.DATA_TABLE]: DataTable,
  [DashComponentType.BAR_CHART]: Bar,
  [DashComponentType.LINE_CHART]: LineChart
}
