import { FC } from 'react'
import { Line } from '@ant-design/plots'
import { BaseWidget } from '../../types'
interface Props extends BaseWidget {}
import { getChartsTheme } from '../../utils'
export const LineChart: FC<Props> = ({ data, colors, themeType, dark }) => {
  const config = {
    data,
    theme: {
      ...getChartsTheme(themeType, colors, dark)
    },
    xField: 'year',
    yField: 'value'
    // interaction: {
    //   tooltip: {
    //     marker: false
    //   }
    // },
    // style: {
    //   lineWidth: 2
    // }
  }
  return <Line {...config} autoFit className="global-antv-charts" />
}
