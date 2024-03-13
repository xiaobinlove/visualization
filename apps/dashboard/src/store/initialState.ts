import { Widget, DashComponentType, DashMode } from '@/types'
export type State = {
  widgets: Record<string, Widget>
  // 当前选择的widgetId
  curWidgetId: string
  mode: DashMode
  // 编辑状态下 画布是否可拖拽
  isDraggableInEdit: boolean
}
export const initialState: State = {
  mode: DashMode.EDIT,
  curWidgetId: '',
  isDraggableInEdit: true,
  widgets: {
    _widget_1709368827519: {
      title: '身高体重统计',
      type: DashComponentType.COLUMN_CHART,
      posX: 1,
      posY: 0,
      width: 23,
      height: 10,
      form: '65e2e4d298ef1382262fdd06',
      xFields: [{ widgetId: '_widget_1709368532403', form: '65e2e4d298ef1382262fdd06', type: 'text', fieldLabel: '姓名', fieldName: 'f_1709368842553' }],
      metrics: [
        { fieldName: 'f_1709368846231', widgetId: '_widget_1709368532404', form: '65e2e4d298ef1382262fdd06', type: 'number', fieldLabel: '身高', op: 'sum' },
        { fieldName: 'f_1709368851296', widgetId: '_widget_1709368532405', form: '65e2e4d298ef1382262fdd06', type: 'number', fieldLabel: '体重', op: 'sum' }
      ]
    }
  }
}
