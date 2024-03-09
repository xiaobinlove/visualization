// 手动触发onresize事件
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
