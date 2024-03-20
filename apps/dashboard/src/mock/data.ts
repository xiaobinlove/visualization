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
    { letter: 'A', frequency: 0.08167 },
    { letter: 'B', frequency: 0.01492 },
    { letter: 'C', frequency: 0.02782 },
    { letter: 'D', frequency: 0.04253 },
    { letter: 'E', frequency: 0.12702 },
    { letter: 'F', frequency: 0.02288 },
    { letter: 'G', frequency: 0.02015 },
    { letter: 'H', frequency: 0.06094 },
    { letter: 'I', frequency: 0.06966 },
    { letter: 'J', frequency: 0.00153 },
    { letter: 'K', frequency: 0.00772 },
    { letter: 'L', frequency: 0.04025 },
    { letter: 'M', frequency: 0.02406 },
    { letter: 'N', frequency: 0.06749 },
    { letter: 'O', frequency: 0.07507 },
    { letter: 'P', frequency: 0.01929 },
    { letter: 'Q', frequency: 0.00095 },
    { letter: 'R', frequency: 0.05987 },
    { letter: 'S', frequency: 0.06327 },
    { letter: 'T', frequency: 0.09056 },
    { letter: 'U', frequency: 0.02758 },
    { letter: 'V', frequency: 0.00978 },
    { letter: 'W', frequency: 0.0236 },
    { letter: 'X', frequency: 0.0015 },
    { letter: 'Y', frequency: 0.01974 },
    { letter: 'Z', frequency: 0.00074 }
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
    { type: '分类一', value: 27 },
    { type: '分类二', value: 25 },
    { type: '分类三', value: 18 },
    { type: '分类四', value: 15 },
    { type: '分类五', value: 10 },
    { type: '其他', value: 5 }
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
    value: '26,930.34%'
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
      columns: ['type'],
      values: ['price']
    },
    data: [
      {
        province: '浙江',
        city: '杭州',
        type: '笔',
        price: '1'
      },
      {
        province: '浙江',
        city: '杭州',
        type: '纸张',
        price: '2'
      },
      {
        province: '浙江',
        city: '舟山',
        type: '笔',
        price: '17'
      },
      {
        province: '浙江',
        city: '舟山',
        type: '纸张',
        price: '6'
      },
      {
        province: '吉林',
        city: '长春',
        type: '笔',
        price: '8'
      },
      {
        province: '吉林',
        city: '白山',
        type: '笔',
        price: '12'
      },
      {
        province: '吉林',
        city: '长春',
        type: '纸张',
        price: '3'
      },
      {
        province: '吉林',
        city: '白山',
        type: '纸张',
        price: '25'
      },
      {
        province: '浙江',
        city: '杭州',
        type: '笔',
        cost: '0.5'
      },
      {
        province: '浙江',
        city: '杭州',
        type: '纸张',
        cost: '20'
      },
      {
        province: '浙江',
        city: '舟山',
        type: '笔',
        cost: '1.7'
      },
      {
        province: '浙江',
        city: '舟山',
        type: '纸张',
        cost: '0.12'
      },
      {
        province: '吉林',
        city: '长春',
        type: '笔',
        cost: '10'
      },
      {
        province: '吉林',
        city: '白山',
        type: '笔',
        cost: '9'
      },
      {
        province: '吉林',
        city: '长春',
        type: '纸张',
        cost: '3'
      },
      {
        province: '吉林',
        city: '白山',
        type: '纸张',
        cost: '1'
      }
    ]
  }
}
export const dataSourceMap: Record<string, Field[]> = {
  '1': [
    { fieldName: 'height', fieldLabel: '身高', fieldType: 'number', id: 'f_321321312321' },
    { fieldName: 'weight', fieldLabel: '体重', fieldType: 'number', id: 'f_321321312322' },
    { fieldName: 'gender', fieldLabel: '性别', fieldType: 'text', id: 'f_321321312323' }
  ],
  '2': [
    { fieldName: '1', fieldLabel: '3日留存率', fieldType: 'number', id: 'f_321321312324' },
    { fieldName: '2', fieldLabel: '次日留存率', fieldType: 'number', id: 'f_321321312325' },
    { fieldName: '3', fieldLabel: '30日留存率', fieldType: 'number', id: 'f_321321312326' },
    { fieldName: '4', fieldLabel: '7日留存率', fieldType: 'number', id: 'f_321321312328' }
  ]
}
