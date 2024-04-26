export type Background = {
  type: 'color' | 'image'
  color?: string
  image?: string
}
type TableStyle = {
  // 主题色
  themeColor: string
  // 表头
  head: {
    // 表头文字颜色
    color: string
  }
  // 文字内容
  body: {
    color: string
  }
  // 对齐方式
  textAlign: 'left' | 'center' | ''
}
export type TextStyle = {
  textAlign?: 'left' | 'center'
  bold?: boolean
  fontSize?: string
  color: string
}
export type indicatorStyle = {
  color: string
}
export enum ThemeType {
  CUSTOM_LIGHT = 'classic',
  TECHNOLOGY = 'classicDark'
}
// 全局主题样式配置
export interface Styles {
  theme: {
    type: ThemeType
    // 色板
    palette: PaletteType
    // 是否是暗黑系主题
    dark: boolean
    // 渐变色
    gradation?: string
  }
  background: Background
  // 全局卡片样式配置
  card: {
    title: TextStyle
    background: Background
  }
  // 全局表格类图表配置
  table: TableStyle
  // 全局指标
}
export enum PaletteType {
  CLASSIC = 'classic',
  GOBI = 'gobi',
  GRACE = 'grace',
  JUNGLE = 'jungle',
  BLUES = 'blues',
  PARTY = 'party',
  TECHNOLOGY = 'technology',
  RETAIL = 'retail',
  BLUESKY = 'bluesky'
}
export type WidgetStyle = {
  background: Background
  title: TextStyle
}
