import { FC } from 'react'
import Progress from '../../components/Process'
import './index.less'

const prefix = 'hnc-chart12'
const Chart12: FC = ({
  list = [
    { name: '销售目标达成', value: 87000, percent: 0.7 },
    { name: '毛利目标达成', value: 56000, percent: 0.7 },
    { name: '成本预算控制', value: 10000, percent: 0.7 }
  ]
}) => {
  // const list = []
  return (
    <div className={prefix}>
      <div className={`${prefix}__list`}>
        {list.map((item) => {
          return (
            <div className={`${prefix}__item`}>
              <div className={`${prefix}__item-top`}>
                <div className={`${prefix}__name`}>{item.name}</div>
                <div className={`${prefix}__value`}>{item.value}</div>
              </div>
              <Progress width={300} height={25} color={['rgba(88, 98, 240, 0.38)', '#5790FC']} percent={item.percent} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Chart12
