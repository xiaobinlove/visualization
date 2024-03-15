import { FC } from 'react'
import { Pie } from '@ant-design/plots'
type Props = {
  data: unknown
}
export const PieChart: FC<Props> = ({ data }) => {
  const config = {
    data,
    angleField: 'value',
    colorField: 'type',
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold'
      }
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5
      }
    }
  }
  return <Pie {...config} className="global-antv-charts" />
}
