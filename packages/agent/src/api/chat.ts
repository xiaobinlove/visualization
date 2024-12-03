import requestHandler from '@/utils/request'
import { ChatCard } from '@/types'
type ConversationApiParams = {
  questionStr: string
}
export type ConversationApiReturn = (Required<ChatCard> & { questionID?: string })[]
export const conversationApi = (params: ConversationApiParams) => {
  return requestHandler<ConversationApiReturn, ConversationApiParams>(`/api/question/execute`, 'post', params, { timeout: 10000000 })
}
export type FormDataConfirmParams = { questionID: string; [key: string]: unknown }
export const formDataConfirmApi = ({ questionID, ...res }: FormDataConfirmParams) => {
  return requestHandler<unknown, unknown>(`/api/question/${questionID}/execute`, 'post', res)
}

export const chatRobotAppRegist = (appCode: string) => {
  return requestHandler<unknown, unknown>(`/api/app/regist`, 'post', { appCode })
}
