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
      xFields: [],
      metrics: [
        // {
        //   fieldName: 'f_1709368846231',
        //   form: '65e2e4d298ef1382262fdd06',
        //   fieldType: 'number',
        //   id: 'f_1709368846231',
        //   fieldLabel: '身高',
        //   op: 'sum'
        // },
        // {
        //   fieldName: 'f_1709368851296',
        //   form: '65e2e4d298ef1382262fdd06',
        //   fieldType: 'number',
        //   id: 'f_1709368851296',
        //   fieldLabel: '体重',
        //   op: 'sum'
        // }
      ]
    }
  }
}
