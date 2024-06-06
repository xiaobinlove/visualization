import { FC } from 'react'
import CountUp from 'react-countup'
import './index.less'
const prefix = 'hnc-chart3'
const list = [
  {
    value: 980,
    name: '新客户'
  },
  {
    value: 800,
    name: '复购客户'
  },
  {
    value: 100,
    name: '重点客户'
  },
  {
    value: 200,
    name: '金牌客户'
  }
]
const Chart3: FC = () => {
  return (
    <div className={prefix}>
      {list.map((item) => {
        return (
          <div className={`${prefix}__item`}>
            <div className={`${prefix}__value`}>
              <CountUp duration={3} end={item.value} />
            </div>
            <div className={`${prefix}__name`}>{item.name}</div>
          </div>
        )
      })}
      <div></div>
    </div>
  )
}
export default Chart3
