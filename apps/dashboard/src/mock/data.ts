import { DashComponentType } from '@/types'
import { Field } from '@/types'
export const dataMap = {
  [DashComponentType.AREA_CHART]: [
    { year: '1991', value: 15468 },
    { year: '1992', value: 16100 },
    { year: '1993', value: 15900 },
    { year: '1994', value: 17409 },
    { year: '1995', value: 17000 },
    { year: '1996', value: 31056 },
    { year: '1997', value: 31982 },
    { year: '1998', value: 32040 },
    { year: '1999', value: 33233 }
  ],
  [DashComponentType.BAR_CHART]: [
    { year: '1951 年', value: 38 },
    { year: '1952 年', value: 52 },
    { year: '1956 年', value: 61 },
    { year: '1957 年', value: 145 },
    { year: '1958 年', value: 48 }
  ],
  [DashComponentType.COLUMN_CHART]: [
    { type: '次要', value: 890, status: '恢复待确认' },
    { type: '一般', value: 721, status: '恢复待确认' },
    { type: '故障', value: 129, status: '恢复待确认' },
    { type: '次要', value: 300, status: '处理中' },
    { type: '一般', value: 233, status: '处理中' },
    { type: '故障', value: 82, status: '处理中' },
    { type: '次要', value: 602, status: '待处理' },
    { type: '一般', value: 300, status: '待处理' },
    { type: '故障', value: 79, status: '待处理' }
  ],
  [DashComponentType.LINE_CHART]: [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 }
  ],
  [DashComponentType.PIE_CHART]: [
    { type: '已逾期', value: 4, percent: 0.03 },
    { type: '待处理', value: 88, percent: 0.48 },
    { type: '已处理', value: 67, percent: 0.36 }
  ],
  [DashComponentType.RADAR_CHART]: [
    { name: 'G2', star: 10371 },
    { name: 'G6', star: 7380 },
    { name: 'F2', star: 7414 },
    { name: 'L7', star: 2140 },
    { name: 'X6', star: 660 },
    { name: 'AVA', star: 885 },
    { name: 'G2Plot', star: 1626 }
  ],
  [DashComponentType.INDICATOR_CARD]: {
    name: '留存率',
    value: '12523'
  },
  [DashComponentType.GANTT_CHART]: {
    data: [
      { id: 1, text: 'Project #1', start_date: null, duration: null, parent: 0, progress: 0, open: true },
      { id: 2, text: 'Task #1', start_date: '2019-08-01 00:00', duration: 5, parent: 1, progress: 1 },
      { id: 3, text: 'Task #2', start_date: '2019-08-06 00:00', duration: 2, parent: 1, progress: 0.5 },
      { id: 4, text: 'Task #3', start_date: null, duration: null, parent: 1, progress: 0.8, open: true },
      { id: 5, text: 'Task #3.1', start_date: '2019-08-09 00:00', duration: 2, parent: 4, progress: 0.2 },
      { id: 6, text: 'Task #3.2', start_date: '2019-08-11 00:00', duration: 1, parent: 4, progress: 0 }
    ],
    links: [
      { id: 1, source: 2, target: 3, type: '0' },
      { id: 2, source: 3, target: 4, type: '0' },
      { id: 3, source: 5, target: 6, type: '0' }
    ]
  },
  [DashComponentType.DATA_TABLE]: {
    fields: {
      rows: ['province', 'city'],
      // rows: ['province', 'city', 'price']
      values: ['price'],
      // columns: ['price']
      valueInCols: true
    },
    meta: [
      {
        field: 'province',
        name: '类别'
      },
      {
        field: 'city',
        name: '子类'
      },
      {
        field: 'price',
        name: '数量'
      }
    ],
    data: [
      { province: '工单情况', city: '已逾期', type: '笔', price: 100 },
      { province: '工单情况', city: '待处理', type: '纸张', price: 2 },
      { province: '工单情况', city: '已处理', type: '纸张', price: 2 },
      { province: '告警情况', city: '待处理', type: '笔', price: 17 },
      { province: '告警情况', city: '处理中', type: '笔', price: 17 },
      { province: '告警情况', city: '恢复待确认', type: '笔', price: 17 },
      { province: '告警情况', city: '处理完成', type: '笔', price: 17 },
      { province: '分类统计', city: '资产总数', type: '笔', price: 17 },
      { province: '分类统计', city: '资源数', type: '笔', price: 17 },
      { province: '分类统计', city: '文档数', type: '笔', price: 17 },
      { province: '分类统计', city: '备件备品', type: '笔', price: 17 }
    ]
  },
  [DashComponentType.CROSS_TABLE]: {
    describe: '标准交叉表数据。',
    fields: {
      rows: ['province', 'city'],
      // columns: ['sub_type'],
      values: ['number'],
      valueInCols: true
    },
    meta: [
      {
        field: 'number',
        name: '数量'
      },
      {
        field: 'province',
        name: '-'
      },
      {
        field: 'city',
        name: '处理状态'
      }
      // {
      //   field: 'type',
      //   name: '类别'
      // },
      // {
      //   field: 'sub_type',
      //   name: '子类别'
      // }
    ],
    data: [
      {
        number: 7789,
        province: '工单情况',
        city: '已逾期',
        // type: '家具',
        sub_type: '桌子'
      },
      {
        number: 2367,
        province: '工单情况',
        city: '待处理',
        // type: '家具',
        sub_type: '桌子'
      },
      {
        number: 3877,
        province: '工单情况',
        city: '已处理',
        // type: '家具',
        sub_type: '桌子'
      },
      {
        number: 4342,
        province: '警告情况',
        city: '待处理',
        // type: '家具',
        sub_type: '桌子'
      },
      {
        number: 5343,
        province: '警告情况',
        city: '处理中',
        // type: '家具',
        sub_type: '沙发'
      },
      {
        number: 632,
        province: '警告情况',
        city: '恢复待确认',
        type: '家具',
        sub_type: '沙发'
      },
      {
        number: 7234,
        province: '警告情况',
        city: '处理完成',
        // type: '家具',
        sub_type: '沙发'
      },
      {
        number: 4342,
        province: '分类统计',
        city: '资产数',
        // type: '家具',
        sub_type: '桌子'
      },
      {
        number: 5343,
        province: '分类统计',
        city: '资源数',
        // type: '家具',
        sub_type: '沙发'
      },
      {
        number: 632,
        province: '分类统计',
        city: '文档数量',
        type: '家具',
        sub_type: '沙发'
      },
      {
        number: 7234,
        province: '分类统计',
        city: '备品备件',
        // type: '家具',
        sub_type: '沙发'
      },
      {
        number: 78868
      }
    ]
  }
}
export const dataSourceMap: Record<string, Field[]> = {
  '1': [
    { fieldName: '4', fieldLabel: '工单编号', fieldType: 'number', id: 'f_32132131231231225gads132f' },
    { fieldName: '1', fieldLabel: '处理状态', fieldType: 'number', id: 'f_321321312123213324da' }
  ],
  '6': [
    { fieldName: '1', fieldLabel: '告警编号', fieldType: 'number', id: 'f_321321312312321e23f326daf' },
    { fieldName: '2', fieldLabel: '告警状态', fieldType: 'number', id: 'f_3213213123123sfsdf21326daf' },
    { fieldName: '3', fieldLabel: '告警等级', fieldType: 'number', id: 'f_3213213123sdfsdfsd1321326da24324f' }
  ],
  '2': [
    { fieldName: 'height', fieldLabel: '资产编号', fieldType: 'number', id: 'f_3213212443312321' },
    { fieldName: 'weight', fieldLabel: '资产名称', fieldType: 'number', id: 'f_3242113213212322' }
  ],
  '3': [
    { fieldName: '1', fieldLabel: '文档编号', fieldType: 'number', id: 'f_321321312242324' },
    { fieldName: '2', fieldLabel: '文档名称', fieldType: 'number', id: 'f_3213213421412325' },
    { fieldName: '3', fieldLabel: '文档类型', fieldType: 'number', id: 'f_321321311232142326' },
    { fieldName: '4', fieldLabel: '更新时间', fieldType: 'number', id: 'f_321321311322132328' }
  ],
  '4': [
    { fieldName: 'he23ight12', fieldLabel: '资源编号', fieldType: 'number', id: 'f_32132413123132121' },
    { fieldName: 'weight123', fieldLabel: '资源名称', fieldType: 'number', id: 'f_3213214311231232322' }
  ],
  '5': [
    { fieldName: 'heig412421ht', fieldLabel: '备品编号', fieldType: 'number', id: 'f_3213211243213312321' },
    { fieldName: 'weigh421t', fieldLabel: '备品名称', fieldType: 'number', id: 'f_3213213123512312322' }
  ]
}
