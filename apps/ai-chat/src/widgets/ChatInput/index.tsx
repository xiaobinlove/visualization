import { FC } from 'react'
import { Input } from 'antd'
import type { InputProps } from 'antd'
const ChatInput: FC<InputProps> = (props) => {
  return <Input {...props} />
}
export default ChatInput
