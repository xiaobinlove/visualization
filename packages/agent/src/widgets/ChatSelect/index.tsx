import { FC } from 'react'
import { Select } from 'antd'
import type { SelectProps } from 'antd'
const ChatSelect: FC<SelectProps> = (props) => {
  return <Select {...props} />
}
export default ChatSelect
