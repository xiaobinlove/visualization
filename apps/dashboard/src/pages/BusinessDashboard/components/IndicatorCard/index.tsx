import { FC } from 'react'
import classnames from 'classnames'
import { ArrowUpOutlined } from '@ant-design/icons'
import CountUp from 'react-countup'
import { Statistic, StatisticProps } from 'antd'
import Card from '../Card'
const prefix = 'db-indicator-card'
import './index.less'
interface Props extends StatisticProps {
  alarm?: boolean
  ratio?: number
}
export const IndicatorCard: FC<Props> = ({ alarm, ratio, ...res }) => {
  const formatter: StatisticProps['formatter'] = (value) => <CountUp duration={3} end={value as number} />
  console.log(alarm)
  return (
    <Card className={prefix}>
      <Statistic {...res} formatter={formatter} />
      {alarm && <div className={`${prefix}__alarm`}></div>}
      {/* {ratio && <div className={`${prefix}__ratio`}></div>} */}

      {/* <div className={classnames(prefix, { [`${prefix}--dark`]: dark })}>
        <div className={`${prefix}__inner`}>
          <div className={`${prefix}__name`}>{title}</div>
          <div className={`${prefix}__value`}>{data?.value}</div>
        </div>
      </div> */}
    </Card>
  )
}
