import { FC } from 'react'
import { DualAxes } from '@ant-design/plots'
import { getChartsTheme } from '@dash/widgets'
import { ThemeType } from '@/types'
import './index.less'
const prefix = 'hnc-chart19'
const Chart19: FC = () => {
  const data1 = [
    {
      value: 24631,
      name: '总目标OEE'
    },
    {
      value: 10730,
      name: '实际OEE'
    }
  ]
  const data2 = [
    {
      time: '2024/01',
      实际OEE: 290,
      目标OEE: 260
    },
    {
      time: '2024/02',
      实际OEE: 150,
      目标OEE: 120
    },
    {
      time: '2024/03',
      实际OEE: 460,
      目标OEE: 330
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
      目标OEE: 460
    }
  ]
  const config = {
    legend: {
      color: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        itemMarker: (v: any) => {
          if (v === 'waiting') return 'rect'
          return 'smooth'
        }
      }
    },
    theme: {
      ...getChartsTheme(ThemeType.TECHNOLOGY, undefined, true)
    },
    data: data2,
    xField: 'time',
    children: [
      {
        type: 'interval',
        yField: '实际OEE',
        style: {
          maxWidth: 30
        }
      },
      {
        type: 'line',
        yField: '目标OEE',
        shapeField: 'smooth',
        scale: { color: { relations: [['people', '#fdae6b']] } },
        axis: { y: { position: 'right' } },
        style: { lineWidth: 2 }
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
export default Chart19
