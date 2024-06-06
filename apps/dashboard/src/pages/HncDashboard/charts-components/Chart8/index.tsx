import { FC } from 'react'
import Progress from '../../components/Process'
import './index.less'

const prefix = 'hnc-chart8'
type Props = {
  list: { name: string; percent: number }[]
}

const Chart15: FC<Props> = ({ list }) => {
  return (
    <div className={prefix}>
      <div className={`${prefix}__list`}>
        {list.map((item) => {
          return (
            <div className={`${prefix}__item`}>
              <div className={`${prefix}__name`}>{item.name}</div>
              <Progress
                width={500}
                height={11}
                percent={item.percent}
                radius={20}
                color={item.name === '总成本' ? ['rgba(216, 216, 216, 0.24)', '#5880F8'] : ['rgba(216, 216, 216, 0.24)', '#5880F8']}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Chart15
