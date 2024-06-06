import { FC } from 'react'
import Indicator, { IndicatorProps } from '../../components/Indicator'
import './index.less'
const prefix = 'hnc-chart1'
const list1: IndicatorProps[] = [
  {
    name: '营业收入',
    value: 7973832,
    percent: 10,
    yoy: 'up'
  },
  {
    name: '利润总额',
    value: 105100,
    percent: 7,
    yoy: 'up'
  },
  {
    name: '产值',
    value: 9973832,
    percent: 15,
    yoy: 'up'
  },
  {
    name: '年度营收红线',
    value: 8273832,
    percent: 10.4,
    yoy: 'down'
  }
]
const list2: IndicatorProps[] = [
  {
    name: '当月产量',
    value: 63526,
    yoy: 'down',
    unit: false
  },
  {
    name: '成本',
    value: 1234324,
    percent: 10.41,
    yoy: 'up'
  },
  {
    name: '回款',
    value: 243424,
    percent: 15,
    yoy: 'up'
  },
  {
    name: '应付账款',
    value: 33236765,
    yoy: 'down'
  },
  {
    name: '应付账款',
    value: 8273832,
    yoy: 'down'
  }
]
const Chart1: FC = () => {
  return (
    <div className={prefix}>
      <div className={`${prefix}__line1`}>
        {list1.map(({ name, percent, value, yoy }) => {
          return <Indicator name={name} percent={percent} value={value} yoy={yoy} />
        })}
      </div>
      <div className={`${prefix}__line2`}>
        {list2.map(({ name, percent, value, yoy }) => {
          return <Indicator name={name} percent={percent} value={value} yoy={yoy} />
        })}
      </div>
    </div>
  )
}
export default Chart1
