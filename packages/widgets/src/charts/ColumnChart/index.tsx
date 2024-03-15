import { FC } from 'react'
import { Column } from '@ant-design/plots'
type Props = {
  data: unknown
}
export const ColumnChart: FC<Props> = ({ data }) => {
  const config = {
    data,
    xField: 'letter',
    yField: 'frequency',
    label: {
      text: (d) => `${(d.frequency * 100).toFixed(1)}%`,
      textBaseline: 'bottom'
    },
    axis: {
      y: {
        labelFormatter: '.0%'
      }
    },
    style: {
      // 圆角样式
      radiusTopLeft: 10,
      radiusTopRight: 10
    }
  }
  return <Column {...config} className="global-antv-charts" />
}
