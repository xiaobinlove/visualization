import { FC } from 'react'
import { Area } from '@ant-design/plots'
import { BaseWidget } from '../../types'
import { getChartsTheme } from '../../utils'
interface Props extends BaseWidget {}
export const AreaChart: FC<Props> = ({ data, colors, themeType, dark, ...res }) => {
  const config = {
    data,
    theme: {
      ...getChartsTheme(themeType, colors, dark)
    },
    axis: {
      y: { labelFormatter: '~s' }
    },
    line: {},
    ...res
  }
  return <Area {...config} className="global-antv-charts" />
}
