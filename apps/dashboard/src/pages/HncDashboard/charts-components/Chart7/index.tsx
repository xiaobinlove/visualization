import { FC } from 'react'
import './index.less'
const prefix = 'hnc-chart7'
import { DualAxes } from '@ant-design/plots'
import { getChartsTheme } from '@dash/widgets'
import { ThemeType } from '@/types'
const Chart7: FC = () => {
  const config = {
    theme: {
      ...getChartsTheme(ThemeType.TECHNOLOGY, undefined, true)
    },
    xField: 'time',
    data: [
      { time: '2024/01', call: 4, waiting: 2, people: 2 },
      { time: '2024/02', call: 2, waiting: 6, people: 3 },
      { time: '2024/03', call: 13, waiting: 2, people: 5 },
      { time: '2024/04', call: 9, waiting: 9, people: 1 },
      { time: '2024/05', call: 5, waiting: 2, people: 3 }
    ],
    style: {
      maxWidth: 30
    },
    axis: {
      x: {
        lineStroke: '#fff'
      },
      y: {}
    },
    legend: {
      color: {
        itemMarker: (v) => {
          if (v === 'waiting') return 'rect'
          return 'smooth'
        }
      }
    },
    children: [
      {
        type: 'interval',
        yField: 'waiting'
      },
      {
        type: 'line',
        yField: 'people',
        shapeField: 'smooth',
        scale: { color: { relations: [['people', '#fdae6b']] } },
        axis: { y: { position: 'right', lineStroke: '#fff' } },
        style: { lineWidth: 2 }
      }
    ]
  }
  return (
    <div className={prefix}>
      <DualAxes {...config} width={565} height={202} />
    </div>
  )
}
export default Chart7
