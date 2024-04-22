import { FC } from 'react'
import { Select } from 'antd'
import type { SelectProps } from 'antd'
import SvgIcon from '@/components/SvgIcon'
import './index.less'
interface Props extends SelectProps {}
const PanelSelect: FC<Props> = ({ className, ...res }) => {
  return (
    <Select
      size="small"
      {...res}
      suffixIcon={<SvgIcon name="select-down" style={{ marginTop: '-6px' }} color="rgba(255, 255, 255, 0.75)" />}
      // className={`${prefix}__entity-select`}
      className={`db-panel-select ${className}`}
    />
  )
}
export default PanelSelect
