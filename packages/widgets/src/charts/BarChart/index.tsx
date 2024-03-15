import { FC } from 'react'
import { Bar } from '@ant-design/plots'
type Props = {
  data: unknown
}
export const BarChart: FC<Props> = ({ data }) => {
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    shapeField: 'hollow',
    colorField: 'year',
    legend: {
      color: { size: 72, autoWrap: true, maxRows: 3, cols: 6 }
    }
  }
  return <Bar {...config} className="global-antv-charts" />
}
