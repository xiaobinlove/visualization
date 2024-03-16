import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import type { State } from './initialState'
import { initialState } from './initialState'
import { Widget, DashMode } from '@/types'
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
  setCurWidetId: (widgetId: string) => void
  setMode: (mode: DashMode) => void
  setDraggableInEdit: (val: boolean) => void
  setWidgets: (val: Record<string, Widget>) => void
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
      const { width, height, type } = widgets[widgetId]
      addWidget({
        posX:
          Object.values(widgets).reduce((pre, cur) => {
            return (pre += cur.posX)
          }, 0) % COLS,
        posY: Infinity,
        width,
        height,
        type,
        title: ''
      })
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
    }
  }))
)
