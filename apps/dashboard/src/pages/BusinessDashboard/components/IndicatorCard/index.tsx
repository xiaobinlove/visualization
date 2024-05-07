import { FC } from 'react'
import classnames from 'classnames'
import { ArrowUpOutlined } from '@ant-design/icons'
import { Statistic, StatisticProps } from 'antd'
import Card from '../Card'
const prefix = 'db-indicator-card'
import './index.less'
interface Props extends StatisticProps {
  alarm?: boolean
}
export const IndicatorCard: FC<Props> = ({ alarm, ...res }) => {
  console.log(alarm)
  return (
    <Card className={prefix}>
      <Statistic {...res} />
      {/* <div className={classnames(prefix, { [`${prefix}--dark`]: dark })}>
        <div className={`${prefix}__inner`}>
          <div className={`${prefix}__name`}>{title}</div>
          <div className={`${prefix}__value`}>{data?.value}</div>
        </div>
      </div> */}
    </Card>
  )
}
