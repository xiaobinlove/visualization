import { FC } from 'react'
import { Select, SelectProps } from 'antd'
import './index.less'
const CustomSelect: FC<SelectProps> = ({ ...res }) => {
  return <Select {...res} />
}
export default CustomSelect
