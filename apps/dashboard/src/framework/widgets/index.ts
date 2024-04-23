import { registWidget } from '@/framework/base'
import columnChart from './column-chart'
import areaChart from './area-chart'
import dataTable from './data-table'
import ganttChart from './gantt-chart'
import image from './image'
import indicatorCard from './indicator-card'
import lineChart from './line-chart'
import pieChart from './pie-chart'
import radarChart from './radar-chart'
import richText from './rich-text'
import tab from './tab'
import crossTable from './cross-table'
import biaxialChart from './biaxial-chart'
import bubbleChart from './bubble-chart'
import calendar from './calendar'
import dashBoard from './dash-board'
import funnelPlot from './funnel-plot'
import iframe from './iframe'
import progress from './progress'
import realTime from './real-time'
import scatterPlot from './scatter-plot'
import barChartt from './bar-chart'
export const registWidgets = () => {
  registWidget([
    columnChart,
    areaChart,
    dataTable,
    ganttChart,
    image,
    indicatorCard,
    lineChart,
    pieChart,
    radarChart,
    richText,
    tab,
    crossTable,
    biaxialChart,
    bubbleChart,
    calendar,
    dashBoard,
    funnelPlot,
    iframe,
    progress,
    realTime,
    scatterPlot,
    barChartt
  ])
}
