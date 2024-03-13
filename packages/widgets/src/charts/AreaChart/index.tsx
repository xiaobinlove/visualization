import { FC } from 'react'
import { Area } from '@ant-design/plots'
export const AreaChart: FC = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/aapl.json'
    },
    xField: (d) => new Date(d.date),
    yField: 'close'
  }
  console.log('Area-chart')
  return <Area {...config} className="global-antv-charts" />
}
