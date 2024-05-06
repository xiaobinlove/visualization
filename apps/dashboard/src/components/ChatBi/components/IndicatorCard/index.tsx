import { FC, CSSProperties } from 'react'
const prefix = 'db-indicator-card'
import './index.less'
type Props = {
  data?: { name: string; value: string }
  title: string
  titleStyle: CSSProperties
}
export const IndicatorCard: FC<Props> = ({ data, title }) => {
  return (
    <div className={prefix}>
      <div className={`${prefix}__inner`}>
        {data?.name && <div className={`${prefix}__name`}>{title}</div>}

        <div className={`${prefix}__value`}>{data?.value}</div>
      </div>
    </div>
  )
}
