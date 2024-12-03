import { FC } from 'react'
import './index.less'
type Props = {
  value: string
}
const prefix = 'ac-chat-text'
const ChatText: FC<Props> = ({ value }) => {
  return <div className={prefix}>{value}</div>
}
export default ChatText
