import { FC } from 'react'
import { Column } from '@ant-design/plots'
import { BaseWidget } from '../../types'
import { getChartsTheme } from '../../utils'
interface Props extends BaseWidget {}
export const ColumnChart: FC<Props> = ({ data, colors, themeType, dark, ...res }) => {
  const config = {
    data,
    theme: {
      ...getChartsTheme(themeType, colors, dark)
    },
    xField: 'type',
    yField: 'value',
    colorField: 'status',
    group: true,
    label: {
      text: (d) => d.value,
      textBaseline: 'bottom'
    },
    ...res
  }
  return <Column {...config} className="global-antv-charts" />
}
