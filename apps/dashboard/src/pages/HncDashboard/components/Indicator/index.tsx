import { FC } from 'react'
import { Statistic, StatisticProps } from 'antd'
import classnames from 'classnames'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'
import CountUp from 'react-countup'
import './index.less'
export type IndicatorProps = {
  name: string
  value: number
  percent?: number
  valueSuffix?: string
  unit?: boolean
  yoy?: 'up' | 'down'
}
const prefix = 'db-hnc-indicator'
const Indicator: FC<IndicatorProps> = ({ name, value, percent, yoy, valueSuffix, unit = true }) => {
  const formatter: StatisticProps['formatter'] = (value) => <CountUp duration={3} end={value as number} />
  return (
    <div className={classnames(prefix, { [`${prefix}--down`]: yoy === 'down' })}>
      <div className={`${prefix}__value`}>
        <Statistic formatter={formatter} suffix={valueSuffix} valueStyle={{ color: '#48d1ff', fontSize: '18px' }} value={value} />
      </div>
      <div className={`${prefix}__persent`}>
        {percent && (
          <Statistic
            value={percent}
            precision={2}
            valueStyle={{ color: '#fff', fontSize: '10px' }}
            prefix={yoy === 'up' ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
            suffix="%"
          />
        )}
      </div>
      <div className={`${prefix}__name`}>
        {name}
        {unit && <span className={`${prefix}__unit`}> /万</span>}
      </div>
    </div>
  )
}
export default Indicator
