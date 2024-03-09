import { FC } from 'react'
import { Bar } from '@ant-design/plots'
const data = [
  { year: '1951 年', value: 38 },
  { year: '1952 年', value: 52 },
  { year: '1956 年', value: 61 },
  { year: '1957 年', value: 145 },
  { year: '1958 年', value: 48 }
]
export const BarChart: FC = () => {
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
