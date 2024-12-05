import { FC } from 'react'
import './index.less'

const prefix = 'ac-chat'
import { getQueryParam } from '@/utils'
import { AgentChat } from '@zov/agent'

const Chat: FC = () => {
  const appCode = getQueryParam('appCode') || ''
  return (
    <div className={prefix}>
      <div className={`${prefix}__content`}>
        {/* <ChatAssistant /> */}
        <AgentChat appCode={appCode} />
      </div>
    </div>
  )
}
export default Chat
