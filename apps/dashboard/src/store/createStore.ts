import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import type { State } from './initialState'
import { initialState } from './initialState'
import { Widget, DashMode, DashComponentType, Styles } from '@/types'
import { Layout } from 'react-grid-layout'
import { COLS } from '@/components/GridLayouts'
export type Action = {
  // 更新grid布局
  updateGrid: (layout: Layout[]) => void
  // 更新单个widget
  updateWidget: (widgetId: string, val: Partial<Widget>) => void
  updateCurWidget: (val: Partial<Widget>) => void
  // 增加widget
  addWidget: (widget: Widget) => string
  // 删除widget
  deleteWidget: (widgetId: string) => void
  // 复制widget
  copyWidget: (widgetId: string) => void
  moveWidgetToTab: (from: string, to: string) => void
  setCurWidetId: (widgetId: string) => void
  setMode: (mode: DashMode) => void
  setDraggableInEdit: (val: boolean) => void
  setWidgets: (val: Record<string, Widget>) => void
  updateStyles: (val: Styles) => void
  resetWidgetStyles: () => void
}
export type Store = State & Action
export const useStore = create<Store>()(
  immer((set, get) => ({
    ...initialState,
    setWidgets(widgets) {
      set({
        widgets
      })
    },
    updateGrid(layout) {
      set((state) => {
        layout.forEach(({ i, w, h, x, y }) => {
          state.widgets[i] = { ...state.widgets[i], posX: x, posY: y, width: w, height: h }
        })
      })
    },
    updateWidget(widgetId, val) {
      set((state) => {
        state.widgets[widgetId] = {
          ...state.widgets[widgetId],
          ...val
        }
      })
    },
    updateCurWidget(val) {
      set((state) => {
        state.widgets[state.curWidgetId] = {
          ...state.widgets[state.curWidgetId],
          ...val
        }
      })
    },
    addWidget(widget) {
      const widgetId = `widget_${new Date().getTime()}`
      set((state) => {
        state.widgets[widgetId] = widget
      })
      return widgetId
    },
    deleteWidget(widgetId) {
      set((state) => {
        delete state.widgets[widgetId]
      })
    },
    copyWidget(widgetId) {
      const { addWidget, widgets } = get()
      const { width, height, type, styles, title } = widgets[widgetId]
      addWidget({
        posX:
          Object.values(widgets).reduce((pre, cur) => {
            return (pre += cur.posX)
          }, 0) % COLS,
        posY: Infinity,
        width,
        height,
        type,
        title,
        styles
      })
    },
    moveWidgetToTab(from, to) {
      const { widgets } = get()
      const fromWidget = widgets[from]
      const toWidget = widgets[to]
      // 如果移动的是容器元素，不与移动
      if (fromWidget.type === DashComponentType.TAB) {
        return
      }
      // 如果form和to是同级，则无需移动
      if (to !== 'page' && toWidget.parent && toWidget.parent === fromWidget.parent) {
        return
      }
      // 移动到画布顶层
      if (to === 'page') {
        // dd
        set((state) => {
          delete state.widgets[from].parent
        })
      } else {
        // 移动到tab容器
        set((state) => {
          state.widgets[from].parent = to
        })
      }
    },
    setCurWidetId(widgetId) {
      set({
        curWidgetId: widgetId
      })
    },
    setMode(mode) {
      set({
        mode
      })
    },
    setDraggableInEdit(val) {
      set({
        isDraggableInEdit: val
      })
    },
    updateStyles(styles) {
      set({
        styles
      })
    },
    resetWidgetStyles() {
      set((state) => {
        const { widgets } = state
        for (const id in widgets) {
          delete widgets[id].styles
        }
      })
    }
  }))
)
