import { FC } from 'react'
import { ChatDataPicker, ChatForm, ChatInput, ChatSelect, ChatTable, ChatText } from '../widgets'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const chatCardComponentMap: { [componentName: string]: FC<any> } = {
  input: ChatInput,
  select: ChatSelect,
  table: ChatTable,
  text: ChatText,
  dataPicker: ChatDataPicker,
  form: ChatForm
}
