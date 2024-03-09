import type { Store } from './createStore'
import { Layout } from 'react-grid-layout'
export const gridLayoutSelector = (store: Store): Layout[] => {
  console.log(store, 'store')

  return Object.keys(store.widgets).reduce((list: Layout[], widgetId) => {
    const { posX, posY, width, height } = store.widgets[widgetId]
    list.push({ i: widgetId, w: width, h: height, x: posX, y: posY })
    return list
  }, [])
}
