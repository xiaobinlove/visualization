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
  TAB = 'tab'
}
export enum DataType {
  NUMBER = 'number',
  DATETIME = 'datetime',
  TEXT = 'text'
}
// 字段
export interface Field {
  fieldName: string
  fieldLabel: string
  widgetId: string
  // TODO combo number
  type: string
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
  xFields?: Field[]
  metrics?: Field[]
  form?: string
  content?: string // 富文本
}

export enum DashMode {
  RENDER = 'render',
  EDIT = 'edit'
}
