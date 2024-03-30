import { ThemeType } from '@dash/board'
export type BaseWidget = {
  data: any
  colors: string[]
  themeType: ThemeType
  dark: boolean
}
