import { ThemeType } from '@dash/board'
export const getChartsTheme = (themeType?: ThemeType = ThemeType.CUSTOM_LIGHT, colors?: string[], dark?: boolean = false): any => {
  const view = { viewFill: 'transparent', plotFill: 'transparent', mainFill: 'transparent', contentFill: 'transparent' }
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
