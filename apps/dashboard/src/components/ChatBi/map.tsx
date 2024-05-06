import { DashComponentType } from '@/types'
import { Column, Bar } from '@ant-design/plots'
import { DataTable, LineChart } from '@dash/widgets'
import Text from './components/Text'
export const componentMap = {
  text: Text,
  [DashComponentType.COLUMN_CHART]: Column,
  [DashComponentType.DATA_TABLE]: DataTable,
  [DashComponentType.BAR_CHART]: Bar,
  [DashComponentType.LINE_CHART]: LineChart
}
