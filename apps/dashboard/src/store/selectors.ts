import type { Widget } from '@/types'
import { DashMode, ComponentTreeItem, DashComponentType } from '@/types'
import type { MenuProps } from 'antd'
import type { Store } from './createStore'
export const gridLayoutSelector = (store: Store): ComponentTreeItem[] => {
  const result: ComponentTreeItem[] = []
  const item: Record<string, ComponentTreeItem> = {}
  // 加上children和id属性
  for (const key in store.widgets) {
    item[key] = { ...store.widgets[key], id: key, children: [] }
  }
  for (const key in item) {
    const cur = item[key]
    const parentId = cur.parent
    if (parentId) {
      item[parentId].children?.push(cur)
    } else {
      result.push(cur)
    }
  }
  return result
  // return Object.keys(store.widgets).reduce((list: Layout[], widgetId) => {
  //   const { posX, posY, width, height } = store.widgets[widgetId]
  //   list.push({ i: widgetId, w: width, h: height, x: posX, y: posY })
  //   return list
  // }, [])
}

export const isEditModeSelector = (store: Store): boolean => store.mode === DashMode.EDIT
export const curWidgetSelector = (store: Store): Widget => store.widgets[store.curWidgetId]
export const containerSelector = (store: Store): MenuProps['items'] => {
  return Object.keys(store.widgets).reduce((list, key) => {
    const { type, title } = store.widgets[key]
    if (type === DashComponentType.TAB) {
      list.push({
        label: title,
        key
      })
    }
    return list
  }, [])
}
