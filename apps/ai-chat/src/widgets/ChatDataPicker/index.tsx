import { FC } from 'react'
import { DatePicker } from 'antd'
import type { DatePickerProps } from 'antd'
const ChatDataPicker: FC<DatePickerProps> = (props) => {
  return <DatePicker {...props} showTime />
}
export default ChatDataPicker
