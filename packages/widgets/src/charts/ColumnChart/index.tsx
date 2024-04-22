import { FC } from 'react'
import { Column } from '@ant-design/plots'
import { BaseWidget } from '../../types'
import { getChartsTheme } from '../../utils'
interface Props extends BaseWidget {}
export const ColumnChart: FC<Props> = ({ data, colors, themeType, dark }) => {
  const config = {
    data,
    theme: {
      ...getChartsTheme(themeType, colors, dark)
      // type: themeType,
      // color: colors[0],
      // category10: colors
    },
    xField: 'type',
    yField: 'value',
    colorField: 'status',
    group: true,
    label: {
      text: (d) => d.value,
      textBaseline: 'bottom'
    }
    // xField: 'letter',
    // yField: 'frequency',
    // label: {
    //   text: (d) => `${(d.frequency * 100).toFixed(1)}%`,
    //   textBaseline: 'bottom'
    // },
    // axis: {
    //   y: {
    //     labelFormatter: '.0%'
    //   }
    // },
    // style: {
    //   // 圆角样式
    //   radiusTopLeft: 10,
    //   radiusTopRight: 10
    // }
  }
  return <Column {...config} className="global-antv-charts" />
}
