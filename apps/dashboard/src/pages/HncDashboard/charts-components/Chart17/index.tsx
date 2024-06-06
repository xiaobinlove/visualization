import { FC } from 'react'
import { DualAxes } from '@ant-design/plots'
import { getChartsTheme } from '@dash/widgets'
import { ThemeType } from '@/types'
import './index.less'
const prefix = 'hnc-chart17'
const Chart17: FC = () => {
  const data1 = [
    {
      value: 1124631,
      name: '总目标OEE'
    },
    {
      value: 1110730,
      name: '实际OEE'
    }
  ]
  const data2 = [
    {
      time: '2024/01',
      实际OEE: 290,
      目标OEE: 160
    },
    {
      time: '2024/02',
      实际OEE: 150,
      目标OEE: 20
    },
    {
      time: '2024/03',
      实际OEE: 460,
      目标OEE: 230
    },
    {
      time: '2024/04',
      实际OEE: 670,
      目标OEE: 440
    },
    {
      time: '2024/05',
      实际OEE: 180,
      目标OEE: 50
    },
    {
      time: '2024/06',
      实际OEE: 590,
      目标OEE: 360
    }
  ]
  const config = {
    legend: true,
    theme: {
      ...getChartsTheme(ThemeType.TECHNOLOGY, undefined, true)
    },
    data: data2,
    xField: 'time',
    children: [
      {
        type: 'area',
        yField: '目标OEE'
      },
      {
        type: 'area',
        yField: '实际OEE',
        axis: { y: { position: 'right' } },
        style: {
          fill: 'linear-gradient(180deg, rgba(117, 224, 254, 0.56) 64%, rgba(216, 216, 216, 0) 100%)'
        }
      }
    ]
  }
  return (
    <div className={prefix}>
      <div className={`${prefix}__chart`}>
        <DualAxes {...config} />
      </div>
      <div className={`${prefix}__content`}>
        {data1.map((item) => {
          return (
            <div className={`${prefix}__item`}>
              <div className={`${prefix}__name`}>{item.name}</div>
              <div className={`${prefix}__value`}>
                {item.value}
                <span className={`${prefix}__unit`}>/万元</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Chart17
