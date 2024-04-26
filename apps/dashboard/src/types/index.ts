import { ReactNode, FunctionComponent } from 'react'
export type { Styles, Background, TextStyle, indicatorStyle } from './theme-config'
export { ThemeType, PaletteType } from './theme-config'
import { WidgetStyle } from './theme-config'
// 物料组件类型
export enum DashComponentType {
  COLUMN_CHART = 'columnChart',
  PIE_CHART = 'pieChart',
  RADAR_CHART = 'radarChart',
  BAR_CHART = 'barChart',
  // 富文本
  RICH_TEXT = 'richText',
  // 图片
  IMAGE = 'image',
  LINE_CHART = 'lineChart',
  AREA_CHART = 'areaChart',
  // 进度条
  PROGRESS_CHART = 'progressChart',
  // 仪表盘
  DASH_BOARD_CHART = 'dashBoardChart',
  // 气泡图
  BUBBLE_CHART = 'bubbleChart',
  // 散点图
  SCATTER_PLOT = 'scatterPlot',
  // 双轴图
  BIAXIAL_CHART = 'biaxialChart',
  // 漏斗图
  FUNNEL_PLOT = 'funnelPlot',
  // 日历
  CALENDAR = 'calendar',
  // 嵌入页面
  IFRAME = 'iframe',
  // 实时时间
  REAL_TIME = 'realTime',
  TAB = 'tab',
  INDICATOR_CARD = 'indicatorCard',
  DATA_TABLE = 'dataTable',
  CROSS_TABLE = 'crossTable',
  GANTT_CHART = 'ganttChart'
}
export enum DataType {
  NUMBER = 'number',
  DATETIME = 'datetime',
  TEXT = 'text'
}
export enum SortContainerId {
  xFields = 'xFields',
  metrics = 'metrics'
}

// 字段
export interface Field {
  fieldName: string
  fieldLabel: string
  // widgetId?: string
  // TODO combo number
  fieldType: string
  id: string
  // TODO avg sum
  op?: string
  form?: string
}
interface YAxis {
  title?: string
  min?: number
  max?: number
}
interface XAxis {
  labelTransform?: number
}
interface Legend {
  hide?: boolean
}
export interface Widget {
  posX: number
  posY: number
  width: number
  height: number
  type: DashComponentType
  title: string
  // 是否显示标题
  hideTitle?: boolean
  parent?: string
  [SortContainerId.xFields]?: Field[]
  // yFields?: Field[]
  [SortContainerId.metrics]?: Field[]
  form?: string
  content?: string // 富文本
  data?: unknown
  styles?: WidgetStyle
  dataSourceType?: DataSource
  xAxis?: XAxis
  yAxis?: YAxis
  legend?: Legend
}

export enum DashMode {
  RENDER = 'render',
  EDIT = 'edit'
}

export type ChartMenuItem = { name: string; icon: string; type: DashComponentType }
export type ChartMenu = {
  title: string
  children: ChartMenuItem[]
}
export type MenuDataItem = Record<string, DashComponentType[]>
export interface ComponentTreeItem extends Widget {
  children: ComponentTreeItem[]
  id: string
}
//  数据来源  实体、逻辑流 静态数据
export enum DataSource {
  实体 = '0',
  逻辑流 = '1',
  静态数据 = '2'
}
// 组件配置
export interface WidgetConfig {
  name: string // 组件名称
  type: DashComponentType
  icon: string // 组件图标
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: FunctionComponent<any>
  // 是否是图表组件
  isChart: boolean
  // 设置器tab配置
  setterPanelTab: {
    stylePanel?: ReactNode
    configPanel?: ReactNode
    fieldPanel?: ReactNode
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // 默认值
  defaultData?: Partial<Widget>
}
export type WidgetsConfig = { [key: string]: WidgetConfig }
