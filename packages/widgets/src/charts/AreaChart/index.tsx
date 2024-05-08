import { FC } from 'react'
import { Area } from '@ant-design/plots'
import { BaseWidget } from '../../types'
import { getChartsTheme } from '../../utils'
interface Props extends BaseWidget {}
export const AreaChart: FC<Props> = ({ data, colors, themeType, dark }) => {
  const config = {
    data,
    theme: {
      ...getChartsTheme(themeType, colors, dark)
    },
    xField: 'year',
    yField: 'value',
    shapeField: 'hvh',
    style: {
      opacity: 0.4
    },
    axis: {
      y: { labelFormatter: '~s' }
    },
    line: {}
  }
  return <Area {...config} className="global-antv-charts" />
}
