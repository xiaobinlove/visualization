const config1 = {
  data: [
    { type: 'a业务', value: 5000000 },
    { type: 'b业务', value: 3000000 },
    { type: 'c业务', value: 7000000 },
    { type: 'd业务', value: 5000000 },
    { type: 'e业务', value: 8000000 },
    { type: 'f业务', value: 9000000 }
  ],
  style: {
    maxWidth: 40
  },
  legend: false
}

const data2 = [
  {
    time: '2024/01',
    库存量: 290000,
    周转率: 86,
    当月营业收入: 22055,
    当月主营业务收入: 12055,
    当月产量: 4212,
    逾期应收款: 1321
  },
  {
    time: '2024/02',
    库存量: 150000,
    周转率: 20,
    当月营业收入: 42055,
    当月主营业务收入: 32055,
    当月产量: 3124,
    逾期应收款: 5321
  },
  {
    time: '2024/03',
    库存量: 460000,
    周转率: 100,
    当月营业收入: 12055,
    当月主营业务收入: 11055,
    当月产量: 1234,
    逾期应收款: 4321
  },
  {
    time: '2024/04',
    库存量: 670000,
    周转率: 44,
    当月营业收入: 72055,
    当月主营业务收入: 62055,
    当月产量: 6312,
    逾期应收款: 2321
  },
  {
    time: '2024/05',
    库存量: 180000,
    周转率: 50,
    当月营业收入: 22055,
    当月主营业务收入: 12055,
    当月产量: 3421,
    逾期应收款: 6321
  },
  {
    time: '2024/06',
    库存量: 590000,
    周转率: 36,
    当月营业收入: 62055,
    当月主营业务收入: 62055,
    逾期应收款: 3321
  }
]
const config2 = {
  xField: 'time',
  data: data2,
  legend: {
    color: {
      itemMarker: (v) => {
        if (v === '库存量') return 'rect'
        return 'smooth'
      }
    }
  },
  children: [
    {
      type: 'interval',
      yField: '库存量',
      style: {
        maxWidth: 40
      }
    },
    {
      type: 'line',
      yField: '周转率',
      shapeField: 'smooth',
      scale: { color: { relations: [['people', '#fdae6b']] } },
      axis: { y: { position: 'right' } },
      style: { lineWidth: 2 }
    }
  ]
}
export enum MockType {
  yszkzzl = 'yszkzzl',
  fxjsr = 'fxjsr',
  yqysk = 'yqysk',
  dyyysr = 'dyyysr',
  dyzyywsr = 'dyzyywsr',
  dycl = 'dycl'
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MockData = { type: MockType; title: string; config: any; value: number; x?: string[]; y?: string[] }
export const mockMap: Record<MockType, MockData> = {
  [MockType.yszkzzl]: {
    type: MockType.yszkzzl,
    title: '集团：应收账款周转率',
    config: config2,
    value: 1.6
  },
  [MockType.fxjsr]: {
    type: MockType.fxjsr,
    title: '集团：当月非息净收入',
    config: { ...config1, xField: 'type', yField: 'value' },
    value: 7973832.7,
    x: ['机构为度'],
    y: ['营业收入（求和）']
  },
  // 营业收入 指标点击进入
  [MockType.dyyysr]: {
    type: MockType.dyyysr,
    title: '集团：当月营业收入',
    value: 6973832.7,
    config: { ...config1, data: data2, xField: 'time', yField: '当月营业收入' },
    x: ['机构纬度'],
    y: ['营业收入（求和）']
  },
  // 当月主营业务收入
  [MockType.dyzyywsr]: {
    type: MockType.dyzyywsr,
    title: '集团：当月主营业务收入',
    value: 5873832.7,
    config: { ...config1, data: data2, xField: 'time', yField: '当月主营业务收入' },
    x: ['机构纬度'],
    y: ['营业收入（求和）']
  },
  // 逾期应收款 指标点击进入
  [MockType.yqysk]: {
    type: MockType.yqysk,
    title: '集团：逾期应收款',
    value: 973832.7,
    config: { ...config1, data: data2, xField: 'time', yField: '逾期应收款' }
  },
  // 当月产量
  [MockType.dycl]: {
    type: MockType.dycl,
    title: '产线1：当月产量',
    value: 63526,
    config: { ...config1, data: data2, xField: 'time', yField: '当月产量' },
    x: ['产线纬度', '产品为度'],
    y: ['产能（月）']
  }
}
