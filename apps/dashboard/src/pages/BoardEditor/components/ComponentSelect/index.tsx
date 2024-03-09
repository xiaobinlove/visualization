import { FC, useState } from 'react'
import SvgIcon from '@/components/SvgIcon'
import './index.less'
const prefix = 'hd-component-select'
import classnames from 'classnames'
type Props = {
  onClick?: (expand: boolean) => void
  prefixIconName?: string
}
const ComponentSelect: FC<Props> = ({ onClick, prefixIconName }) => {
  const [expand, setExpand] = useState<boolean>(false)
  return (
    <div
      className={classnames(prefix, { [`${[prefix]}--expand`]: expand })}
      onClick={() => {
        setExpand((val) => {
          onClick?.(!val)
          return !val
        })
      }}
    >
      {prefixIconName && <SvgIcon className={`${prefix}__prefix-icon`} name={prefixIconName} size={16} />}
      <span>添加图表</span>
      <SvgIcon name="arrow-down" size={16} className={`${prefix}__arrow`} />
    </div>
  )
}
export default ComponentSelect
