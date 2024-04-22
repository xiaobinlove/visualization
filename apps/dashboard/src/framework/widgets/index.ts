import { registerWidget } from '@/framework/base'
import columnChart from './column-chart'
import areaChart from './area-chart'
import dataTable from './data-table'
import ganttChart from './gantt_chart'
import image from './image'
import indicatorCard from './indicator-card'
import lineChart from './line-chart'
import pieChart from './pie-chart'
import radarChart from './radar_chart'
import richText from './rich-text'
import tab from './tab'
export const registerWidgets = () => {
  registerWidget([columnChart, areaChart, dataTable, ganttChart, image, indicatorCard, lineChart, pieChart, radarChart, richText, tab])
}
