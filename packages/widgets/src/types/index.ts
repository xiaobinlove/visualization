import { ThemeType } from '@dash/board'
export type BaseWidget = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  colors?: string[]
  themeType?: ThemeType
  dark?: boolean
  xField?: string
  yField?: string
}
