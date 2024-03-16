import { FC } from 'react'
const prefix = 'db-indicator-card'
import './index.less'
type Props = {
  data?: { name: string; value: string }
}
export const IndicatorCard: FC<Props> = ({ data }) => {
  return (
    <div className={prefix}>
      <div className={`${prefix}__inner`}>
        <div className={`${prefix}__name`}>{data?.name}</div>
        <div className={`${prefix}__value`}>{data?.value}</div>
      </div>
    </div>
  )
}
