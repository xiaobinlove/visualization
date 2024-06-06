import { Tiny } from '@ant-design/plots'
import { FC } from 'react'
type Props = {
  percent: number
  width: number
  height: number
  fontSize?: number
  radius?: number
  showPercent?: boolean
  fill?: boolean
  color?: string[]
}

const Progress: FC<Props> = ({ percent, width, height, fontSize = 16, showPercent = false, fill = '#fff', color = ['#D8D8D8', '#5862F0'], radius }) => {
  const text = {
    type: 'text',
    style: {
      text: `${percent * 100}%`,
      x: '50%',
      y: '50%',
      textAlign: 'center',
      fontSize,
      fill
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const config: any = {
    width,
    height,
    autoFit: false,
    percent,
    color,
    annotations: [],
    style: {
      radiusTopLeft: radius,
      radiusTopRight: radius,
      radiusBottomRight: radius,
      radiusBottomLeft: radius
    }
  }
  if (showPercent) {
    config.annotations.push(text)
  }
  return <Tiny.Progress {...config} />
}
export default Progress
