// dsl 统计图表
export interface Chart {
  // 图表类型
  type: string //
  // 图表名称
  title: string
  // 数据（Data)指定需要可视化的数据
  data: { [key: string]: any }
  // 视觉元素属性和数据之间的关系
  encode: {
    // x 位置
    x: string
    // y 位置
    y: string
    // 颜色，填充色或者边框色，由形状决定
    color: string
    // 系列，用于分成系列
    series: string
  }
}
//
const test = {
  type: 'area',
  title: '测试柱图图',
  data: [
    {
      fruit: '哈密瓜',
      value: 10
    },
    {
      fruit: '橘子',
      value: 20
    },
    {
      fruit: '西瓜',
      value: 23
    }
  ],
  encode: {
    x: 'fruit',
    y: 'value'
  }
}
// 条形图

// 柱形图
export interface ColumnChart extends Chart {
  columnType: 'column' | 'stack' | 'stack_percent' // 普通柱状图 ｜ 堆积柱状图 | 百分比柱状图
}

const columnData1 = [
  {
    fruit: '哈密瓜',
    value: 10
  },
  {
    fruit: '橘子',
    value: 20
  },
  {
    fruit: '西瓜',
    value: 23
  }
]

const columnData2 = [
  {
    fruit: '哈密瓜',
    value: 10,
    type: 'weight'
  },
  {
    fruit: '橘子',
    value: 20,
    type: 'weight'
  },
  {
    fruit: '西瓜',
    value: 23,
    type: 'weight'
  },
  {
    fruit: '哈密瓜',
    value: 12,
    type: 'price'
  },
  {
    fruit: '橘子',
    value: 24,
    type: 'price'
  },
  {
    fruit: '西瓜',
    value: 124,
    type: 'price'
  }
]
// dimensions: ['product', '2015', '2016', '2017'],
// source: [
//   { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
//   { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
//   { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
//   { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
// ]

const data3 = [
  {
    product: 'Matcha Latte',
    time: '2015',
    value: '43.3'
  },
  {
    product: 'Matcha Latte',
    time: '2016',
    value: '85.8'
  },
  {
    product: 'Matcha Latte',
    time: '2017',
    value: '93.7'
  }
]
// 折线图

// 饼图

// 漏斗图

// 散点图

// 气泡
//
