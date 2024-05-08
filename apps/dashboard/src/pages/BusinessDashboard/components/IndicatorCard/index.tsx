import { FC } from 'react'
import CountUp from 'react-countup'
import { Statistic, StatisticProps } from 'antd'
import Card from '../Card'
const prefix = 'db-indicator-card'
import './index.less'
interface Props extends StatisticProps {
  alarm?: boolean
}
export const IndicatorCard: FC<Props> = ({ alarm, ...res }) => {
  const formatter: StatisticProps['formatter'] = (value) => <CountUp duration={3} end={value as number} />
  console.log(alarm)
  return (
    <Card className={prefix}>
      <Statistic {...res} formatter={formatter} />
      {alarm && <div className={`${prefix}__alarm`}></div>}
    </Card>
  )
}
