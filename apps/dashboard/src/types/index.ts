// 物料组件类型
export enum DashComponentType {
  COLUMN_CHART = 'columnChart',
  PIE_CHART = 'pieChart',
  RADAR_CHART = 'radarChart',
  BAR_CHART = 'barChart',
  LINE_CHART = 'lineChart',
  AREA_CHART = 'areaChart',
  RICH_TEXT = 'richText',
  IMAGE = 'image',
  TAB = 'tab',
  INDICATOR_CARD = 'indicatorCard'
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
export interface Widget {
  posX: number
  posY: number
  width: number
  height: number
  type: DashComponentType
  title: string
  parent?: string
  [SortContainerId.xFields]?: Field[]
  // yFields?: Field[]
  [SortContainerId.metrics]?: Field[]
  form?: string
  content?: string // 富文本
  data?: unknown
}

export enum DashMode {
  RENDER = 'render',
  EDIT = 'edit'
}

export type ChartMenuItem = { name: string; icon: string; type: DashComponentType }
export type ChartMenu = {
  title: string
  chilren: ChartMenuItem[]
}
