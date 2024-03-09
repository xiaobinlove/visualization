import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import type { State } from './initialState'
import { initialState } from './initialState'
import { Widget } from '@/types'
import { Layout } from 'react-grid-layout'
export type Action = {
  // 更新grid布局
  updateGrid: (layout: Layout[]) => void
  // 更新单个widget
  updateWidget: (widgetId: string, val: Partial<Widget>) => void
  // 增加widget
  addWidget: (widget: Widget) => void
  // 删除widget
  deleteWidget: (widgetId: string) => void
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
    updateWidget(widgetId, val) {},
    addWidget(widget) {},
    deleteWidget(widgetId) {}
  }))
)
