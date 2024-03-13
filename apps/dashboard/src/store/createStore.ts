import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import type { State } from './initialState'
import { initialState } from './initialState'
import { Widget, DashMode } from '@/types'
import { Layout } from 'react-grid-layout'
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
  setCurWidetId: (widgetId: string) => void
  setMode: (mode: DashMode) => void
  setDraggableInEdit: (val: boolean) => void
}
export type Store = State & Action
export const useStore = create<Store>()(
  immer((set) => ({
    ...initialState,
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
