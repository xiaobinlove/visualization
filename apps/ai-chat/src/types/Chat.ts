import { ChatMessage } from '@ant-design/pro-chat'
type Dsl = {
  type: string
}
export type ChatItem = ChatMessage<{
  dsl?: Dsl
}>
const item: ChatItem = { id: '1', content: '1', role: 'user', createAt: 1, updateAt: 1 }

// item.extra?.dsl
