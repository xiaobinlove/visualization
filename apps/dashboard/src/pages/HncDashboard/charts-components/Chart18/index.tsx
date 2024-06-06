import { FC } from 'react'
import { Liquid } from '@ant-design/plots'
import './index.less'
const prefix = 'hnc-chart18'
const list = [
  {
    value: 0.3,
    name: '生产完成率'
  },
  {
    value: 0.3,
    name: '生产完成率'
  },
  {
    value: 0.6,
    name: '损失率'
  }
]
const Chart18: FC = () => {
  return (
    <div className={prefix}>
      <div className={`${prefix}__inner`}>
        {list.map((item) => {
          const config = {
            percent: item.value,
            width: 130,
            height: 130,
            style: {
              // outlineBorder: 2,
              // outlineDistance: 2,
              // shape: 'pin',
              waveLength: 128,
              textFill: '#fff'
            }
          }
          return (
            <div className={`${prefix}__item`}>
              <div className={`${prefix}__cycle`}>
                <Liquid {...config} />
              </div>
              <div className={`${prefix}__name`}>{item.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Chart18
