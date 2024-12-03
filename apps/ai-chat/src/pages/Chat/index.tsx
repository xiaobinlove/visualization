import { FC } from 'react'
import './index.less'
const prefix = 'ac-chat'
import ChatAssistant from '@/components/ChatAssistant'
import { AgentChat } from '@zov/agent'

const Chat: FC = () => {
  return (
    <div className={prefix}>
      <div className={`${prefix}__content`}>
        {/* <ChatAssistant /> */}
        <AgentChat />
      </div>
    </div>
  )
}
export default Chat
