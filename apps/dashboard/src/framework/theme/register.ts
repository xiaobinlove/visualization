import { G2 } from '@ant-design/charts'
export function customLightTheme() {
  const light = G2.Classic()
  return { ...light }
}
export function technologyTheme() {
  const dark = G2.ClassicDark()
  return { ...dark, view: { viewFill: 'transparent', plotFill: 'transparent', mainFill: 'transparent', contentFill: 'transparent' } }
}
console.log(technologyTheme(), 'technologyTheme')
export const registerChartsTheme = () => {
  G2.register('theme.customLight', customLightTheme)
  G2.register('theme.technology', technologyTheme)
}
