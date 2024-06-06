import { FC } from 'react'
import Progress from '../../components/Process'
import './index.less'

const prefix = 'hnc-chart15'
type Props = {
  list: { name: string; percent: number }[]
  target: number
}
import { Gauge } from '@ant-design/plots'
const Chart15: FC<Props> = ({ list, target }) => {
  const config = {
    data: {
      target,
      total: 100,
      name: 'score'
    },
    legend: false
  }
  return (
    <div className={prefix}>
      <div className={`${prefix}__percent`}>
        <Gauge {...config} />
      </div>
      <div className={`${prefix}__list`}>
        {list.map((item) => {
          return (
            <div className={`${prefix}__item`}>
              <div className={`${prefix}__name`}>{item.name}</div>
              <Progress width={200} height={12} percent={item.percent} />
              <div className={`${prefix}__item-percent`}>{(item.percent * 100).toFixed(1)}%</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Chart15
