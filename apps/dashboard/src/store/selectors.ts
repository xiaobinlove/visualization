import type { Widget } from '@/types'
import { DashMode } from '@/types'
import type { Store } from './createStore'
import { Layout } from 'react-grid-layout'
export const gridLayoutSelector = (store: Store): Layout[] => {
  return Object.keys(store.widgets).reduce((list: Layout[], widgetId) => {
    const { posX, posY, width, height } = store.widgets[widgetId]
    list.push({ i: widgetId, w: width, h: height, x: posX, y: posY })
    return list
  }, [])
}

export const isEditModeSelector = (store: Store): boolean => store.mode === DashMode.EDIT
export const curWidgetSelector = (store: Store): Widget => store.widgets[store.curWidgetId]
