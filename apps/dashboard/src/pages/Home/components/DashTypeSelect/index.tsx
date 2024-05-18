import { FC, useState } from 'react'
import classnames from 'classnames'
import './index.less'
const prefix = 'db-dashType-select'
const list = [
  {
    label: '仪表盘',
    value: '1',
    bg: ''
  },
  {
    label: '大屏',
    value: '2',
    bg: ''
  }
]
type Props = {
  value?: string
  onChange?: (val: string) => void
}
const DashTypeSelect: FC<Props> = ({ value, onChange }) => {
  const [type, setType] = useState(value || '1')
  const handleSelect = (cur: string) => {
    if (cur !== type) {
      setType(cur)
      onChange?.(cur)
    }
  }
  return (
    <div className={prefix}>
      {list.map(({ value: curValue, label, bg }) => {
        return (
          <div
            className={classnames(`${prefix}__item`, { [`${prefix}__item--active`]: curValue === type })}
            onClick={() => {
              handleSelect(curValue)
            }}
          >
            <div className={`${prefix}__item-top`}></div>
            <div className={`${prefix}__title`}>{label}</div>
          </div>
        )
      })}
    </div>
  )
}
export default DashTypeSelect
