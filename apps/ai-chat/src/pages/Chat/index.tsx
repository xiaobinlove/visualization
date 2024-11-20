import { FC, useState } from 'react'
import { ProChat, ChatMessage } from '@ant-design/pro-chat'
import { ChatRequest } from '@ant-design/pro-chat/es/ProChat/store/initialState'
import { useTheme } from 'antd-style'
const Chat: FC = () => {
  const theme = useTheme()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [chats, setChats] = useState<ChatMessage<Record<string, any>>[]>([])
  const handleRequest: ChatRequest = async (messages) => {
    console.log(messages, 'messages')
    const mockedData: string = `这是一段模拟的对话数据。本次会话传入了${messages.length}条消息`
    const res = new Response(mockedData)
    console.log(res, 'handleRequest')
    return res
  }
  return (
    <div style={{ background: theme.colorBgLayout }}>
      <ProChat
        chats={chats}
        helloMessage="你好，我是 Ant Design Pro 机器人，很高兴为你服务。"
        onChatsChange={setChats}
        style={{ height: '90vh' }}
        request={handleRequest}
      />
    </div>
  )
}
export default Chat
