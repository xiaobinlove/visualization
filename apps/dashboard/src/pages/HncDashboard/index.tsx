import { FC, useState } from 'react'
import classnames from 'classnames'
import Box from './components/Box'
import CustomSelect from './components/CustomSelect'
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
    height: '940px'
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
    label: '生产部视角',
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
  const items1 = [
    {
      label: '资金计划',
      key: '1',
      children: <div>111</div>
    },
    {
      label: '收入增长分析',
      key: '2',
      children: <div>2</div>
    },
    {
      label: '净利润分析',
      key: '3',
      children: <div>净利润分析</div>
    },
    {
      label: '营业成本分析',
      key: '4',
      children: <div>营业成本分析</div>
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
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
          </div>
          <div className={`${prefix}__wrapper-2`}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
          </div>
        </div>
      ) : (
        <iframe width="100%" style={{ border: 'none' }} src={tabs[curTab].url} height={tabs[curTab].height} />
      )}
    </div>
  )
}
export default HncDashboard
