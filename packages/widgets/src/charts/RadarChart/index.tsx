import { FC } from 'react'
import { Radar } from '@ant-design/plots'
type Props = {
  data: unknown
}
export const RadarChart: FC<Props> = ({ data }) => {
  const config = {
    data: data.map((d) => ({ ...d, star: Math.sqrt(d.star) })),
    xField: 'name',
    yField: 'star',
    area: {
      style: {
        fillOpacity: 0.2
      }
    },
    scale: {
      x: {
        padding: 0.5,
        align: 0
      },
      y: {
        nice: true
      }
    },
    axis: {
      x: {
        title: false,
        grid: true
      },
      y: {
        gridAreaFill: 'rgba(0, 0, 0, 0.04)',
        label: false,
        title: false
      }
    }
  }
  return <Radar {...config} className="global-antv-charts" />
}
