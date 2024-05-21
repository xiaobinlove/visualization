import { FC } from 'react'
import { Column } from '@ant-design/plots'
import { BaseWidget } from '../../types'
import { getChartsTheme } from '../../utils'
interface Props extends BaseWidget {}
export const ColumnChart: FC<Props> = ({ data = [], colors, themeType, dark, xField, yField }) => {
  const config = {
    data,
    theme: {
      ...getChartsTheme(themeType, colors, dark)
    },
    xField,
    yField
  }
  return <Column {...config} className="global-antv-charts" autoFit />
}
