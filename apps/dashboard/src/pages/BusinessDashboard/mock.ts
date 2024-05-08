// 净利率
export const mock1 = {
  data: [
    {
      月份: '2023/12',
      净利率: 46232111
    },
    {
      月份: '2023/12',
      净利率: 40232111
    },
    {
      月份: '2024/01',
      净利率: 50232111
    },
    {
      月份: '2024/02',
      净利率: 30232111
    },
    {
      月份: '2024/03',
      净利率: 45232111
    },
    {
      月份: '2024/04',
      净利率: 60232111
    }
  ],
  xField: '月份',
  yField: '净利率',
  axis: {
    y: {
      labelFormatter: (val: number) => {
        const label = val / 10000 + '万'
        return label
      }
    }
  },
  style: {
    maxWidth: 30
  }
}
// 资产负债
export const mock8 = {
  data: [
    {
      月份: '2023/11',
      资产负债: 12232111
    },
    {
      月份: '2023/12',
      资产负债: 20232111
    },
    {
      月份: '2024/01',
      资产负债: 10232111
    },
    {
      月份: '2024/02',
      资产负债: 50232111
    },
    {
      月份: '2024/03',
      资产负债: 35232111
    },
    {
      月份: '2024/04',
      资产负债: 36232111
    }
  ],
  xField: '月份',
  yField: '资产负债',
  point: {
    shapeField: 'square',
    sizeField: 4
  },
  axis: {
    y: {
      labelFormatter: (val: number) => {
        const label = val / 10000 + '万'
        return label
      }
    }
  }
}
// 现金流量
export const mock9 = {
  data: [
    {
      月份: '2023/11',
      现金流: 7923211
    },
    {
      月份: '2023/12',
      现金流: 30023211
    },
    {
      月份: '2024/01',
      现金流: 25023211
    },
    {
      月份: '2024/02',
      现金流: 50023211
    },
    {
      月份: '2024/03',
      现金流: 72523211
    },
    {
      月份: '2024/04',
      现金流: 3223211
    }
  ],
  xField: '月份',
  yField: '现金流',
  axis: {
    y: {
      labelFormatter: (val: number) => {
        const label = val / 10000 + '万'
        return label
      }
    }
  },
  style: {
    opacity: 0.4
  },
  line: {}
}
// export const mock2 = {
//   data: [
//     { name: '第一名', 销售额: 6058000000 },
//     { name: '第二名', 销售额: 4488000000 },
//     { name: '第三名', 销售额: 2040000000 },
//     { name: '第四名', 销售额: 2532000000 },
//     { name: '第五名', 销售额: 1022000000 }
//   ],
//   angleField: 'name',
//   colorField: 'name',
//   axis: {
//     y: {
//       labelFormatter: (val: number) => {
//         const label = val / 100000000 + '亿'
//         return label
//       }
//     }
//   },
//   style: {
//     maxWidth: 30
//   }
// }
// 前五大客户
export const mock2 = {
  data: [
    { name: '第一名', 销售额: 6058000000 },
    { name: '第二名', 销售额: 4488000000 },
    { name: '第三名', 销售额: 2040000000 },
    { name: '第四名', 销售额: 2532000000 },
    { name: '第五名', 销售额: 180000000 }
  ],
  angleField: '销售额',
  colorField: 'name',
  radius: 0.8,
  label: {
    text: (d: { 销售额: number }) => `${d.销售额 / 100000000}亿`,
    position: 'spider'
  }
  //   legend: {
  //     color: {
  //       title: false,
  //       position: 'right',
  //       rowPadding: 5
  //     }
  //   }
}
// 客户管理
// export const mock3 = {
//   data: [
//     { name: '第一名', 销售额: 7058000000 },
//     { name: '第二名', 销售额: 3488000000 },
//     { name: '第三名', 销售额: 3040000000 },
//     { name: '第四名', 销售额: 2532000000 },
//     { name: '第五名', 销售额: 1022000000 }
//   ],
//   paddingRight: 80,
//   innerRadius: 0.6,
//   label: {
//     text: (d) => `${d.销售额 / 100000000}亿`,
//     position: 'spider'
//   },
//   xField: 'name',
//   angleField: '销售额'
//   // colorField: 'name',
// }
// 客户管理
export const mock3 = {
  data: [
    {
      name: '新签客户',
      月份: '2023/11',
      客户数: 15
    },
    {
      name: '新签客户',
      月份: '2023/12',
      客户数: 18
    },
    {
      name: '新签客户',
      月份: '2024/01',
      客户数: 28
    },
    {
      name: '新签客户',
      月份: '2024/02',
      客户数: 39
    },
    {
      name: '新签客户',
      月份: '2024/03',
      客户数: 81
    },
    {
      name: '新签客户',
      月份: '2024/04',
      客户数: 47
    },
    {
      name: '新增客户',
      月份: '2023/11',
      客户数: 15
    },
    {
      name: '新增客户',
      月份: '2023/12',
      客户数: 20
    },
    {
      name: '新增客户',
      月份: '2024/01',
      客户数: 25
    },
    {
      name: '新增客户',
      月份: '2024/02',
      客户数: 30
    },
    {
      name: '新增客户',
      月份: '2024/03',
      客户数: 70
    },
    {
      name: '新增客户',
      月份: '2024/04',
      客户数: 20
    }
  ],
  xField: '月份',
  yField: '客户数',
  colorField: 'name',
  group: true,
  style: {
    // 矩形四个方向的内边距
    // inset: 5
    // 矩形单个方向的内边距
    // insetLeft:5,
    // insetRight:20,
    // insetBottom:10
    // insetTop:10
  }
}
// 前五大供应商
export const mock4 = {
  data: [
    { name: '第一名', 销售额: 7058000000 },
    { name: '第二名', 销售额: 3488000000 },
    { name: '第三名', 销售额: 3040000000 },
    { name: '第四名', 销售额: 2532000000 },
    { name: '第五名', 销售额: 1022000000 }
  ],
  angleField: '销售额',
  colorField: 'name',
  //   paddingRight: 80,
  innerRadius: 0.6,
  label: {
    text: (d: { 销售额: number }) => `${d.销售额 / 100000000}亿`,
    position: 'spider'
  }
  //   legend: {
  //     color: {
  //       title: false,
  //       position: 'right',
  //       rowPadding: 5
  //     }
  //   }
  //   annotations: [
  //     {
  //       type: 'text',
  //       style: {
  //         text: 'AntV\nCharts',
  //         x: '50%',
  //         y: '50%',
  //         textAlign: 'center',
  //         fontSize: 40,
  //         fontStyle: 'bold'
  //       }
  //     }
  //   ]
}
// 产品采购订单金额
export const mock5 = {
  data: [
    { type: '动力电池', value: 27 },
    { type: '储能电池', value: 25 },
    { type: '材料及回收', value: 18 },
    { type: '矿产资源', value: 15 },
    { type: '其他', value: 10 }
  ],
  angleField: 'value',
  colorField: 'type',
  startAngle: Math.PI,
  endAngle: Math.PI * 2,
  //   label: {
  //     text: 'type',
  //     style: {
  //       fontSize: 14,
  //       fontWeight: 'bold',
  //       transform: 'rotate(40)'
  //     },
  //     transform: [
  //       {
  //         type: 'overlapHide'
  //       }
  //     ]
  //   },
  label: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    text: (d: any) => {
      return d.value
    },
    position: 'spider'
  },
  innerRadius: 0.6
  //   legend: {
  //     color: {
  //       title: false,
  //       //   position: 'right',
  //       rowPadding: 5
  //     }
  //   }
}
// 销售合同
export const mock6 = {
  data: [
    { year: '2023/11', 销售合同额: 82040200, 销售合同数: 14 },
    { year: '2023/12', 销售合同额: 62040200, 销售合同数: 10 },
    { year: '2024/01', 销售合同额: 72040200, 销售合同数: 7 },
    { year: '2024/02', 销售合同额: 32040200, 销售合同数: 6 },
    { year: '2024/03', 销售合同额: 52040200, 销售合同数: 9 },
    { year: '2024/04', 销售合同额: 62040200, 销售合同数: 5 }
  ],
  //   data: [
  //     { year: '2023/11', 销售合同额: 1421, 销售合同数: 14 },
  //     { year: '2023/12', 销售合同额: 1231, 销售合同数: 10 },
  //     { year: '2024/01', 销售合同额: 1242, 销售合同数: 7 },
  //     { year: '2024/02', 销售合同额: 1234, 销售合同数: 6 },
  //     { year: '2024/03', 销售合同额: 1412, 销售合同数: 9 },
  //     { year: '2024/04', 销售合同额: 1322, 销售合同数: 5 }
  //   ],
  xField: 'year',
  legend: true,
  children: [
    {
      type: 'line',
      //   shapeField: 'smooth',
      yField: '销售合同额',
      style: {
        stroke: '#5B8FF9',
        lineWidth: 2
      },
      axis: {
        y: {
          title: '金额（万）',
          style: { titleFill: '#5B8FF9' },
          labelFormatter: (val: number) => {
            const label = val / 10000
            return label
          }
        }
      }
    },
    {
      type: 'line',
      yField: '销售合同数',
      style: {
        stroke: '#5AD8A6',
        lineWidth: 2
      },
      axis: {
        y: {
          position: 'right',
          title: '数量',
          style: { titleFill: '#5AD8A6' }
        }
      }
    }
  ]
}
const data = [
  { time: '2019-03', value: 350, count: 800 },
  { time: '2019-04', value: 900, count: 600 },
  { time: '2019-05', value: 300, count: 400 },
  { time: '2019-06', value: 450, count: 380 },
  { time: '2019-07', value: 470, count: 220 }
]

export const config = {
  data,
  xField: 'time',
  legend: true,
  children: [
    {
      type: 'line',
      yField: 'value',
      style: { lineWidth: 2 }
    },
    {
      type: 'line',
      yField: 'count',
      style: { lineWidth: 2 },
      axis: { y: { position: 'right' } }
    }
  ]
}
// 产需率
export const mock7 = {
  percent: 0.8,
  style: {
    outlineBorder: 4,
    outlineDistance: 8,
    waveLength: 128,
    textFill: '#fff'
  }
}
// 生产主题
export const mock10 = {
  data: [
    { year: '2023/11', value: 142, type: '库存量' },
    { year: '2023/12', value: 300, type: '库存量' },
    { year: '2024/01', value: 400, type: '库存量' },
    { year: '2024/02', value: 354, type: '库存量' },
    { year: '2024/03', value: 230, type: '库存量' },
    { year: '2024/04', value: 134, type: '库存量' },

    { year: '2023/11', value: 8, type: '产能利用率' },
    { year: '2023/12', value: 10, type: '产能利用率' },
    { year: '2024/01', value: 7, type: '产能利用率' },
    { year: '2024/02', value: 5, type: '产能利用率' },
    { year: '2024/03', value: 3, type: '产能利用率' },
    { year: '2024/04', value: 5, type: '产能利用率' },

    { year: '2023/11', value: 52, type: '产能' },
    { year: '2023/12', value: 23, type: '产能' },
    { year: '2024/01', value: 42, type: '产能' },
    { year: '2024/02', value: 52, type: '产能' },
    { year: '2024/03', value: 32, type: '产能' },
    { year: '2024/04', value: 22, type: '产能' },

    { year: '2023/11', value: 152, type: '在建产能' },
    { year: '2023/12', value: 123, type: '在建产能' },
    { year: '2024/01', value: 144, type: '在建产能' },
    { year: '2024/02', value: 164, type: '在建产能' },
    { year: '2024/03', value: 135, type: '在建产能' },
    { year: '2024/04', value: 123, type: '在建产能' }
  ],
  xField: 'year',
  yField: 'value',
  colorField: 'type'
}
