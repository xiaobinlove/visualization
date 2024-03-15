import { FC } from 'react'
import { Area } from '@ant-design/plots'
type Props = {
  data: unknown
}
export const AreaChart: FC<Props> = ({ data }) => {
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    shapeField: 'hvh',
    label: {
      text: 'value',
      style: {
        fontSize: 10,
        textAlign: (_, idx, arr) => {
          if (idx === 0) return 'left'
          if (idx === arr.length - 1) return 'right'
          return 'center'
        }
      }
    },
    style: {
      opacity: 0.4
    },
    axis: {
      y: { labelFormatter: '~s' }
    },
    line: {}
  }
  return <Area {...config} className="global-antv-charts" />
}
