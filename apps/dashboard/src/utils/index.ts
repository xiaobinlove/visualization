// 手动触发onresize事件
import { ChartConfig } from '@/types'
export function doResize() {
  setTimeout(function () {
    //手动触发窗口resize事件
    if (document.createEvent) {
      const event = document.createEvent('HTMLEvents')
      event.initEvent('resize', true, true)
      window.dispatchEvent(event)
    } else if (document.createEventObject) {
      window.fireEvent('onresize')
    }
  })
}
export const codeStrToChartConfig = (str?: string): ChartConfig => {
  if (!str) {
    return {}
  }
  let dsl = {}
  try {
    dsl = new Function('return ' + str)()
  } catch (err) {
    console.log(err)
  }
  return dsl
}
export const getQueryParam = (name: string) => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(name)
}
