import { FC } from 'react'
import { Column } from '@ant-design/plots'
import { ThemeType } from '@/types'
import { getChartsTheme } from '@dash/widgets'
import './index.less'
const prefix = 'hnc-chart9'
const data = [
  { month: 'L2', value: 110, type: '实际收入' },
  { month: 'L3', value: 140, type: '实际收入' },
  { month: 'L4', value: 130, type: '实际收入' },
  { month: 'L5', value: 142, type: '实际收入' },
  { month: 'L6', value: 120, type: '实际收入' },
  { month: 'L7', value: 130, type: '实际收入' },
  { month: 'L8', value: 150, type: '实际收入' },
  { month: 'MEGA', value: 160, type: '实际收入' },
  { month: 'L2', type: '预计收入', value: -108 },
  { month: 'L3', type: '预计收入', value: -130 },
  { month: 'L4', type: '预计收入', value: -123 },
  { month: 'L5', type: '预计收入', value: -143 },
  { month: 'L6', type: '预计收入', value: -112 },
  { month: 'L7', type: '预计收入', value: -117 },
  { month: 'L8', type: '预计收入', value: -140 },
  { month: 'MEGA', type: '预计收入', value: -149 }
]
const Chart9: FC = () => {
  const config = {
    theme: {
      ...getChartsTheme(ThemeType.TECHNOLOGY, undefined, true)
    },
    data,
    xField: 'month',
    yField: 'value',
    colorField: 'type',
    style: {
      maxWidth: 20
    },
    scale: {
      y: {
        domainMax: 180,
        domainMin: -180
      }
    }
  }
  return (
    <div className={prefix}>
      <Column {...config} />
    </div>
  )
}
export default Chart9
