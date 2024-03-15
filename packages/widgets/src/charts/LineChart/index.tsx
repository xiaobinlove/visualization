import { FC } from 'react'
import { Line } from '@ant-design/plots'
type Props = {
  data: unknown
}
export const LineChart: FC<Props> = ({ data }) => {
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    interaction: {
      tooltip: {
        marker: false
      }
    },
    style: {
      lineWidth: 2
    }
  }
  return <Line {...config} autoFit className="global-antv-charts" />
}
