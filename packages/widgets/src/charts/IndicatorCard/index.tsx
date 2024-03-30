import { FC, CSSProperties } from 'react'
import classnames from 'classnames'
const prefix = 'db-indicator-card'
import './index.less'
type Props = {
  data?: { name: string; value: string }
  title: string
  titleStyle: CSSProperties
  dark: boolean
}
export const IndicatorCard: FC<Props> = ({ data, title, titleStyle, dark, styles }) => {
  return (
    <div className={classnames(prefix, { [`${prefix}--dark`]: dark })}>
      <div className={`${prefix}__inner`}>
        {data?.name && (
          <div className={`${prefix}__name`} style={{ color: titleStyle.color }}>
            {title}
          </div>
        )}

        <div className={`${prefix}__value`} style={{ color: styles?.value?.fontColor }}>
          {data?.value}
        </div>
      </div>
    </div>
  )
}
