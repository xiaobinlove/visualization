import { ReactNode, FunctionComponent, CSSProperties } from 'react'
export type { Styles, Background, TextStyle, indicatorStyle } from './theme-config'
export { ThemeType, PaletteType } from './theme-config'
import { WidgetStyle } from './theme-config'
// 仪表盘组件类型
export enum DashComponentType {
  // 柱状图
  COLUMN_CHART = 'COLUMN_CHART',
  // 饼图
  PIE_CHART = 'PIE_CHART',
  // 雷达图
  RADAR_CHART = 'RADAR_CHART',
  // 条形图
  BAR_CHART = 'BAR_CHART',
  // 折线图
  LINE_CHART = 'LINE_CHART',
  // 面积图
  AREA_CHART = 'AREA_CHART',
  // 进度条
  DASH_BOARD_CHART = 'DASH_BOARD_CHART',
  // 气泡图
  BUBBLE_CHART = 'BUBBLE_CHART',
  // 水波图
  LIQUID_CHAR = 'LIQUID_CHART',
  // 散点图
  SCATTER_PLOT = 'SCATTER_PLOT',
  // 双轴图
  BIAXIAL_CHART = 'BIAXIAL_CHART',
  // 漏斗图
  FUNNEL_PLOT = 'FUNNEL_PLOT',
  // 甘特图
  GANTT_CHART = 'GANTT_CHART',
  // 指标图
  INDICATOR_CARD = 'INDICATOR_CARD',
  // 仪表盘
  PROGRESS_CHART = 'PROGRESS_CHART',
  // 明细表
  DATA_TABLE = 'DATA_TABLE',
  // 透视表
  CROSS_TABLE = 'CROSS_TABLE',
  // 日历
  CALENDAR = 'CALENDAR',
  // 嵌入页面
  IFRAME = 'IFRAME',
  // 实时时间
  REAL_TIME = 'REAL_TIME',
  // 富文本
  RICH_TEXT = 'RICH_TEXT',

  // 图片
  IMAGE = 'IMAGE',
  // tab容器
  TAB = 'TAB'
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
  // 图表类型
  type: DashComponentType
  // 图表名称
  title: string
  // 是否显示标题
  hideTitle?: boolean
  parent?: string
  [SortContainerId.xFields]?: Field[]
  // yFields?: Field[]
  [SortContainerId.metrics]?: Field[]
  form?: string //
  content?: string // 富文本
  data?: unknown // 图表数据
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
export interface AiChat {
  type?: string
  role: 'ai' | 'user'
  config?: any
  descript?: string
  input?: string
  collected?: boolean
  id?: string
  style?: CSSProperties
  title?: string
  guessList?: string[]
}
