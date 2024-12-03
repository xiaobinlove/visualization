import { ChatMessage } from '@ant-design/pro-chat'
import { ReactNode } from 'react'
export type ChatMsgItem = ChatMessage<ChatCard> & {
  content: string | ReactNode
}
export type ChatCardType = 'SEARCH_DATA' | 'DELETE_DATA' | 'ADD_DATA' | 'UPDATE_DATA'
export type ChatComponentType = 'input' | 'select' | 'table' | 'text' | 'datePicker'
export type ChatComponent = {
  component: ChatComponentType
  id: string
  props?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }
}
export type ChatCard = {
  type?: ChatCardType
  dsl?: ChatComponent[]
  questionID?: string
}
