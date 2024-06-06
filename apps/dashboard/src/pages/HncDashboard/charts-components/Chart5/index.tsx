import { FC } from 'react'
import CountUp from 'react-countup'
import './index.less'
const prefix = 'hnc-chart5'
const list = [
  {
    value: 33,
    name: '客户投诉',
    unit: '次'
  },
  {
    value: 40,
    name: '生产事故处理',
    unit: '次'
  },
  {
    value: 13,
    name: '经营异常指标',
    unit: '次'
  },
  {
    value: 73,
    name: '质检异常指标',
    unit: '次'
  }
]
const Chart5: FC = () => {
  return (
    <div className={prefix}>
      <div className={`${prefix}__inner`}>
        {list.map((item) => {
          return (
            <div className={`${prefix}__item`}>
              <div className={`${prefix}__value`}>
                <CountUp duration={3} end={item.value} />
                <span className={`${prefix}__unit`}>/{item.unit}</span>
              </div>
              <div className={`${prefix}__name`}>{item.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Chart5
