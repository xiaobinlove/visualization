import { FC } from 'react'
import CountUp from 'react-countup'
import './index.less'
const prefix = 'hnc-chart14'
const list = [
  {
    value: 12,
    name: '实验总数',
    unit: '次'
  },
  {
    value: 10,
    name: '正常运行',
    unit: '次'
  },
  {
    value: 2,
    name: '异常情况',
    unit: '次'
  }
]
const Chart14: FC = () => {
  return (
    <div className={prefix}>
      <div className={`${prefix}__inner`}>
        {list.map((item) => {
          return (
            <div className={`${prefix}__item`}>
              <div className={`${prefix}__cycle`}>
                <div className={`${prefix}__value`}>
                  <CountUp duration={3} end={item.value} />
                </div>
              </div>
              <div className={`${prefix}__name`}>
                {item.name}
                <span className={`${prefix}__unit`}>/次</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Chart14
