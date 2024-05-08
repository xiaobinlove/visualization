import { ThemeType } from '@dash/board'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getChartsTheme = (themeType: ThemeType = ThemeType.CUSTOM_LIGHT, colors?: string[], dark: boolean = false): any => {
  const view = { viewFill: 'transparent', plotFill: 'transparent', mainFill: 'transparent', contentFill: 'transparent' }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme: any = {
    type: themeType
  }
  if (dark) {
    theme.view = view
  }
  if (colors) {
    theme.color = colors[0]
    theme.category10 = colors
  }
  return theme
}
