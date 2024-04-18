import { FC } from 'react'
import { Bar } from '@ant-design/plots'
import { BaseWidget } from '../../types'
import { getChartsTheme } from '../../utils'
interface Props extends BaseWidget {}
export const BarChart: FC<Props> = ({ data, colors, themeType, dark }) => {
  const config = {
    data,
    theme: {
      ...getChartsTheme(themeType, colors, dark)
    },
    xField: 'year',
    yField: ['value', 'value2'],
    shapeField: 'hollow',
    colorField: 'year',
    legend: {
      color: { size: 72, autoWrap: true, maxRows: 3, cols: 6 }
    }
  }
  return <Bar {...config} className="global-antv-charts" />
}
