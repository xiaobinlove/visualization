import { FC, useState } from 'react'
import { SvgIcon } from '@dash/icons'
import classnames from 'classnames'
import './index.less'
const prefix = 'db-text-align'

type Value = {
  textAlign?: string
}
type Props = {
  value?: Value
  onChange?: (value: Value) => void
}
export const TextAlign: FC<Props> = ({ value, onChange }) => {
  const [right, setRight] = useState<boolean>(Boolean(value?.textAlign === 'right'))
  return (
    <div className={prefix}>
      <div
        className={`${prefix}__icon-wrap`}
        onClick={() => {
          setRight(false)
          onChange?.({})
        }}
      >
        <SvgIcon size={12} name="zuoduiqi" className={classnames({ [`${prefix}--active-btn`]: !right })} />
      </div>
      <div
        className={`${prefix}__icon-wrap`}
        onClick={() => {
          onChange?.({ textAlign: 'right' })
          setRight(true)
        }}
      >
        <SvgIcon size={12} className={classnames({ [`${prefix}--active-btn`]: right })} name="youduiqi" />
      </div>
    </div>
  )
}
