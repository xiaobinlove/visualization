import { FC } from 'react'
import { Pie } from '@ant-design/plots'
import { BaseWidget } from '../../types'
import { getChartsTheme } from '../../utils'
interface Props extends BaseWidget {}
export const PieChart: FC<Props> = ({ data, colors, themeType, dark }) => {
  const config = {
    data,
    angleField: 'value',
    colorField: 'type',
    theme: {
      ...getChartsTheme(themeType, colors, dark)
    },
    // label: {
    //   text: 'value',
    //   style: {
    //     fontWeight: 'bold'
    //   }
    // },
    encode: { y: 'percent', color: 'type' },
    transform: [{ type: 'stackY' }],
    coordinate: { type: 'theta', outerRadius: 0.8 },
    legend: {
      color: { position: 'top', layout: { justifyContent: 'center' } }
    },
    labels: [
      {
        position: 'outside',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        text: (data: any) => `${data.type}: ${data.value} (${data.percent * 100}%)`
      }
    ],
    tooltip: {
      items: [
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (data: any) => ({
          name: data.type,
          value: `${data.percent * 100}%`
        })
      ]
    }
  }
  return <Pie {...config} className="global-antv-charts" />
}
