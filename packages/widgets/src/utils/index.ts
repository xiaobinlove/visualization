import { ThemeType } from '@dash/board'
export const getChartsTheme = (themeType: ThemeType, colors: string[], dark: boolean): any => {
  const view = { viewFill: 'transparent', plotFill: 'transparent', mainFill: 'transparent', contentFill: 'transparent' }
  const theme: any = {
    type: themeType,
    color: colors[0],
    category10: colors
  }
  if (dark) {
    theme.view = view
  }
  return theme
}
