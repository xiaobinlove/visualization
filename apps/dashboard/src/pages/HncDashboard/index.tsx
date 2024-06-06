import { FC, useState } from 'react'
import classnames from 'classnames'
import Box from './components/Box'
import CustomSelect from './components/CustomSelect'
import * as Comp from './charts-components/index'
import './index.less'
const prefix = 'db-hnc-dashboard'
const tabs: { label: string; url: string; height?: string }[] = [
  {
    label: '汇总看板',
    url: ''
  },
  {
    label: '销售部视角',
    url: 'https://datav.aliyuncs.com/share/page/ce4f66a5108e0eeb2cf8bc7b5d3308ca',
    height: '941px'
  },
  {
    label: '生产部视角',
    url: 'https://datav.aliyuncs.com/share/page/9df51a959032106b2dabd0feb789961d',
    height: '941px'
  },
  {
    label: '技术部视角',
    url: ''
  },
  {
    label: '采购部视角',
    url: ''
  },
  {
    label: '物流部视角',
    url: ''
  },

  {
    label: '财务部视角',
    url: ''
  },
  {
    label: 'SCM视角',
    url: ''
  },
  {
    label: '售后部视角',
    url: ''
  },
  {
    label: '人力资源部视角',
    url: ''
  }
]
const options = [
  {
    label: '理想',
    value: '1'
  },
  {
    label: '小米',
    value: '2'
  }
]
const HncDashboard: FC = () => {
  const [curTab, setCurTab] = useState(0)
  const handleTabClick = (index: number) => {
    setCurTab(index)
  }
  const items7 = [
    {
      label: '收入情况分析',
      key: '1',
      children: <Comp.Chart7 />
    },
    {
      label: '收入增长分析',
      key: '2',
      children: <Comp.Chart7 />
    },
    {
      label: '净利润分析',
      key: '3',
      children: <Comp.Chart7 />
    },
    {
      label: '营业成本分析',
      key: '4',
      children: <Comp.Chart7 />
    }
  ]
  return (
    <div className={prefix}>
      <div className={`${prefix}__header`}>海纳川总部经营分析</div>
      <div className={`${prefix}__tabs`}>
        {tabs.map((item, index) => {
          return (
            <div
              className={classnames(`${prefix}__tab`, { [`${prefix}__tab--active`]: curTab === index })}
              key={index}
              onClick={() => {
                handleTabClick(index)
              }}
            >
              {item.label}
            </div>
          )
        })}
      </div>
      {curTab === 0 ? (
        <div className={`${prefix}__content`}>
          {/* <Box items={items1} headerRight={<CustomSelect size="small" style={{ width: '100px' }} options={options} />} /> */}
          <div className={`${prefix}__wrapper-1`}>
            <div>
              <Box
                items={[
                  {
                    label: '经营数据',
                    key: '1',
                    children: <Comp.Chart1 />
                  }
                ]}
              />
            </div>
            <div>
              {/* 地图 */}
              <Box noBorder>{<Comp.Chart2 />}</Box>
            </div>
            <div>
              {/* 合作客户 */}
              <Box
                items={[
                  {
                    label: '合作客户2',
                    key: '1',
                    children: <Comp.Chart3 />
                  }
                ]}
              />
            </div>
            <div>
              {/* 客户评价 */}
              <Box
                items={[
                  {
                    label: '客户评价',
                    key: '1',
                    children: <Comp.Chart4 />
                  }
                ]}
              />
            </div>
            <div>
              {/* 事件指标 */}
              <Box
                items={[
                  {
                    label: '事件指标',
                    key: '1',
                    children: <Comp.Chart5 />
                  }
                ]}
              />
            </div>
            <div>
              {/* 客户问题占比 */}
              <Box
                items={[
                  {
                    label: '客户问题占比',
                    key: '1',
                    children: <Comp.Chart6 />
                  }
                ]}
              />
            </div>
            <div>
              <Box items={items7} />
            </div>
            <div>
              <Box
                items={[
                  {
                    label: '资金计划',
                    key: '1',
                    children: (
                      <Comp.Chart8
                        list={[
                          {
                            name: '长期股权投资',
                            percent: 0.39
                          },
                          {
                            name: '长期借款',
                            percent: 0.26
                          },
                          {
                            name: '总成本',
                            percent: 0.92
                          },
                          {
                            name: '投资收益',
                            percent: 0.42
                          },
                          {
                            name: '费用',
                            percent: 0.49
                          },
                          {
                            name: '生产成本',
                            percent: 0.62
                          }
                        ]}
                      />
                    )
                  }
                ]}
              />
            </div>
          </div>

          <div className={`${prefix}__wrapper-2`}>
            <div>
              <Box
                items={[
                  {
                    label: '产品销售情况',
                    key: '1',
                    children: <Comp.Chart11 />
                  }
                ]}
              />
            </div>
            <div>
              <Box
                items={[
                  {
                    label: '市场细分变化',
                    key: '1',
                    children: <Comp.Chart9 />
                  }
                ]}
              />
            </div>
            <div>
              <Box
                items={[
                  {
                    label: '应收预测',
                    key: '1',
                    children: <Comp.Chart10 />
                  },
                  {
                    label: '成本预测',
                    key: '2',
                    children: <Comp.Chart10 />
                  }
                ]}
              />
            </div>
            <div>
              <Box
                items={[
                  {
                    label: '投诉',
                    key: '1',
                    children: <Comp.Chart13 />
                  }
                ]}
              />
            </div>
          </div>
          <div className={`${prefix}__wrapper-3`}>
            <div>
              <Box
                items={[
                  {
                    label: '产能利用率',
                    key: '1',
                    children: (
                      <Comp.Chart15
                        target={70}
                        list={[
                          { percent: 0.856, name: '部门B' },
                          { percent: 0.676, name: '部门C' },
                          { percent: 0.597, name: '部门A' }
                        ]}
                      />
                    )
                  }
                ]}
              />
            </div>
            <div>
              <Box
                items={[
                  {
                    label: '内部收益率',
                    key: '1',
                    children: (
                      <Comp.Chart15
                        target={80}
                        list={[
                          { percent: 0.756, name: '部门B' },
                          { percent: 0.576, name: '部门C' },
                          { percent: 0.797, name: '部门A' }
                        ]}
                      />
                    )
                  }
                ]}
              />
            </div>
            <div>
              <Box
                items={[
                  {
                    label: '实时产出',
                    key: '1',
                    children: <Comp.Chart17 />
                  }
                ]}
              />
            </div>
          </div>
          <div className={`${prefix}__wrapper-4`}>
            <div>
              <Box
                items={[
                  {
                    label: '生产计划',
                    key: '1',
                    children: <Comp.Chart14 />
                  }
                ]}
              />
            </div>
            <div>
              <Box
                items={[
                  {
                    label: '数据统计',
                    key: '1',
                    children: <Comp.Chart18 />
                  }
                ]}
              />
            </div>
            <div>
              <Box
                items={[
                  {
                    label: '目标达成情况',
                    key: '1',
                    children: <Comp.Chart12 />
                  }
                ]}
              />
            </div>
            <div>
              <Box
                items={[
                  {
                    label: '设备综合效率',
                    key: '1',
                    children: <Comp.Chart19 />
                  }
                ]}
              />
            </div>
          </div>
        </div>
      ) : (
        <iframe width="100%" style={{ border: 'none' }} src={tabs[curTab].url} height={tabs[curTab].height} />
      )}
    </div>
  )
}
export default HncDashboard
