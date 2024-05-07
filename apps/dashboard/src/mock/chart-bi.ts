import { DashComponentType } from '@/types'
const data5 = [
  {
    name: '蔚来汽车',
    应收款: 720000000,
    contactPerson: '周星星',
    contactNumber: '153****7518'
  },
  {
    name: '宇通客车',
    应收款: 350000000,
    contactPerson: '戴冠华',
    contactNumber: '134****2123'
  },
  {
    name: '小鹏汽车',
    应收款: 190000000,
    contactPerson: '张小华',
    contactNumber: '158****8750'
  },
  {
    name: '特斯拉',
    应收款: 140000000,
    contactPerson: 'allon',
    contactNumber: '138****3343'
  },
  {
    name: '吉利汽车',
    应收款: 130000000,
    contactPerson: '李喜乐',
    contactNumber: '134****3893'
  },
  {
    name: '长城汽车',
    应收款: 98000000,
    contactPerson: '周伊',
    contactNumber: '134****3048'
  },
  {
    name: '广汽乘用车',
    应收款: 87000000,
    contactPerson: 'json',
    contactNumber: '158****6687'
  },
  {
    name: '理想汽车',
    应收款: 85000000,
    contactPerson: '张名',
    contactNumber: '153****3475'
  },
  {
    name: '东风汽车',
    应收款: 83000000,
    contactPerson: '王帝',
    contactNumber: '139****3576'
  },
  {
    name: '北京汽车',
    应收款: 23000000,
    contactPerson: '宋健华',
    contactNumber: '158****5820'
  }
]
export const chatMap = {
  // 1
  一季度采购磷酸铁锂电池福建工厂供货金额前五大的供应商: {
    type: DashComponentType.COLUMN_CHART,
    config: {
      data: [
        { name: '广东邦普', 订单总金额: 4058000000 },
        { name: '长远锂科', 订单总金额: 3488000000 },
        { name: '杉杉股份', 订单总金额: 3040000000 },
        { name: '凯金能源', 订单总金额: 2532000000 },
        { name: '贝特瑞', 订单总金额: 2022000000 }
      ],
      xField: 'name',
      yField: '订单总金额',
      // colorField: 'name',
      axis: {
        y: {
          labelFormatter: (val: number) => {
            const label = val / 100000000 + '亿'
            return label
          }
        }
      },
      style: {
        maxWidth: 30
      }
    },
    descript: '2024年第一季度采购磷酸铁锂电池（动力型和储能型）出货地为福建工厂出货确认订单总金额的前五大供应商排名'
  },
  // 2
  期初库存数量和期末库存数量分别是多少: {
    type: 'text',
    config: {
      data: '2024年新能源行业供需严重失衡，宁德时代的库存达454亿，库存占营业收入的11%，期末公司库存从454亿降低至400亿，略微有所下降，整体与一季度行业均值7.1%相比有库存优势，库存占营业收入的10%。'
    },
    descript: '2024年第一季期初库存数量和期末库存数量'
  },
  // 3
  '一季度应收账款情况如何，订单及时交付率情况呢': {
    type: DashComponentType.DATA_TABLE,
    config: {
      dataCfg: {
        fields: {
          columns: ['accountsReceivable', 'deliveryRate']
        },
        meta: [
          {
            field: 'accountsReceivable',
            name: '一季度应收账款'
          },
          {
            field: 'deliveryRate',
            name: '订单及时交付率'
          }
        ],
        data: [
          {
            accountsReceivable: '511.87亿人民币',
            deliveryRate: '98.7%'
          }
        ]
      }
    },
    style: {
      height: '80px'
    },
    descript: '2024年一季度应收账款总额，销售订单交付率；'
  },
  // 4
  '按照订单金额从大到小排序，订单未及时交付的销售负责人有哪些': {
    type: DashComponentType.BAR_CHART,
    config: {
      data: [
        {
          name: '皮亦昕',
          销售额: 530000000
        },
        {
          name: '杨蓝',
          销售额: 490000000
        },
        {
          name: '戴高亮',
          销售额: 430000000
        },
        {
          name: '郑佩佩',
          销售额: 390000000
        },
        {
          name: '张双良',
          销售额: 180000000
        }
      ],
      xField: 'name',
      yField: '销售额',
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
    },
    descript: '2024年一季度未及时交付的销售额排名前五的销售负责人'
  },
  // 5
  '应收款前十大的客户，分别总金额是多少': {
    type: DashComponentType.COLUMN_CHART,
    config: {
      data: data5,
      xField: 'name',
      yField: '应收款',
      axis: {
        y: {
          labelFormatter: (val: number) => {
            const label = val / 100000000 + '亿'
            return label
          }
        }
      },
      style: {
        maxWidth: 30
      }
    },

    descript: '2024年一季度财报期间交付未回款的十大客户'
  },
  // 6
  用表格展示: {
    type: DashComponentType.DATA_TABLE,
    config: {
      dataCfg: {
        fields: {
          columns: ['name', '应收款']
        },
        meta: [
          {
            field: 'name',
            name: '客户名称'
          },
          {
            field: '应收款',
            name: '应收款'
          }
        ],
        data: data5
      }
    },
    title: '应收款前十大的客户',
    descript: '以表格展示：2024年一季度财报期间交付未回款的十大客户'
  },
  // 7
  '联系人、电话': {
    type: DashComponentType.DATA_TABLE,
    config: {
      dataCfg: {
        fields: {
          columns: ['name', 'contactPerson', 'contactNumber']
        },
        meta: [
          {
            field: 'name',
            name: '客户名称'
          },
          {
            field: 'contactPerson',
            name: '联系人'
          },
          {
            field: 'contactNumber',
            name: '电话'
          }
        ],
        data: data5
      }
    },
    descript: '应收款总额排名前十的客户名称、联系人、电话'
  },
  // 8
  应收款前十大客户的销售负责人: {
    type: DashComponentType.DATA_TABLE,
    config: {
      dataCfg: {
        fields: {
          columns: ['name', 'value']
        },
        meta: [
          {
            field: 'name',
            name: '销售负责人'
          },
          {
            field: 'value',
            name: '应收总额'
          }
        ],
        data: [
          {
            name: '皮奕昕',
            value: 5199351012
          },
          {
            name: '周伊',
            value: 1178771000
          },
          {
            name: '宋健华',
            value: 151293295
          },
          {
            name: '坎嘉浩',
            value: 72756535
          },
          {
            name: '杨兰',
            value: 22816260
          },
          {
            name: 'Zoe',
            value: 11390896
          },
          {
            name: '戴高阔',
            value: 8169700
          },
          {
            name: '郑佩文',
            value: 4856197
          },
          {
            name: '孟庆龙',
            value: 1167100
          },
          {
            name: '王双良',
            value: 848800
          }
        ]
      }
    },
    descript: '查找应收款前十大客户的对应销售负责人'
  },
  // 9
  预测今年蔚来整体的采购费用: {
    type: DashComponentType.LINE_CHART,
    config: {
      xField: 'name',
      yField: '采购费用',
      // colorField: 'name',
      axis: {
        y: {
          labelFormatter: (val: number) => {
            const label = val / 100000000 + '亿'
            return label
          }
        }
      },
      data: [
        {
          name: '4月',
          采购费用: 9800000000
        },
        {
          name: '5月',
          采购费用: 10700000000
        },
        {
          name: '6月',
          采购费用: 12500000000
        },
        {
          name: '7月',
          采购费用: 11700000000
        },
        {
          name: '8月',
          采购费用: 13600000000
        },
        {
          name: '9月',
          采购费用: 8000000000
        },
        {
          name: '10月',
          采购费用: 16000000000
        },
        {
          name: '11月',
          采购费用: 13400000000
        },
        {
          name: '12月',
          采购费用: 6000000000
        }
      ]
      // style: {
      //   maxWidth: 30
      // }
    },
    descript: '结合今年销售订单、历史采购订单、历史销售订单、库存情况、行业销售增长趋势等进行预测',
    guessList: ['预测今年的销售量', '预测今年的采购量']
  },
  // 10
  预测今年的销售量: {
    type: DashComponentType.LINE_CHART,
    config: {
      xField: 'name',
      yField: '销售额',
      // colorField: 'name',
      axis: {
        y: {
          labelFormatter: (val: number) => {
            const label = val / 100000000 + '亿'
            return label
          }
        }
      },
      data: [
        {
          name: '4月',
          销售额: 49.8 * 100000000
        },
        {
          name: '5月',
          销售额: 50.7 * 100000000
        },
        {
          name: '6月',
          销售额: 62.5 * 100000000
        },
        {
          name: '7月',
          销售额: 52.7 * 100000000
        },
        {
          name: '8月',
          销售额: 50 * 100000000
        },
        {
          name: '9月',
          销售额: 73.6 * 100000000
        },
        {
          name: '10月',
          销售额: 56 * 100000000
        },
        {
          name: '11月',
          销售额: 43 * 100000000
        },
        {
          name: '12月',
          销售额: 87 * 100000000
        }
      ]
    },
    title: '2024年蔚来销售额预测',
    descript: '结合历史同期的销售量及销售订单、汽车对应品牌整理销售情况、主观预测值、国家政策等因子预测今年的销售量'
  }
}
