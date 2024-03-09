import { FC } from 'react'
import SvgIcon from '@/components/SvgIcon'
import './index.less'
const prefix = 'hd-component-select'
import classnames from 'classnames'
type Props = {
  onClick: (expand: boolean) => void
  prefixIconName?: string
  expand: boolean
}
const ComponentSelect: FC<Props> = ({ onClick, prefixIconName, expand }) => {
  return (
    <div
      className={classnames(prefix, { [`${[prefix]}--expand`]: expand })}
      onClick={() => {
        onClick(!expand)
      }}
    >
      {prefixIconName && <SvgIcon className={`${prefix}__prefix-icon`} name={prefixIconName} size={16} />}
      <span className={`${prefix}__text`}>添加图表</span>
      <SvgIcon name="arrow-down" size={16} className={`${prefix}__arrow`} />
    </div>
  )
}
export default ComponentSelect
