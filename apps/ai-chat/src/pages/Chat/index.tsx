import { FC } from 'react'
import './index.less'
const prefix = 'ac-chat'
import ChatAssistant from '@/components/ChatAssistant'

const Chat: FC = () => {
  return (
    <div className={prefix}>
      <div className={`${prefix}__content`}>
        <ChatAssistant />
      </div>
    </div>
  )
}
export default Chat
