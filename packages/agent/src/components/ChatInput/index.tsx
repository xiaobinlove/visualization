import { FC, useRef, FormEvent, useState } from 'react'
import classnames from 'classnames'
import { useFocusWithin } from 'ahooks'
const prefix = 'ac-chat-input'
import './index.less'
import { trim } from 'lodash-es'
type Props = {
  disabled?: boolean
  onSend?: (msg: string) => void
  onInput?: (msg: string) => void
}
const ChatInput: FC<Props> = ({ onSend, onInput, disabled }) => {
  const [message, setMessage] = useState('')
  const inputRef = useRef<HTMLDivElement>(null)
  const innerDisabled = disabled || !message
  const isFocus = useFocusWithin(inputRef)
  const handleSend = () => {
    const innerText = inputRef.current?.innerText
    if (!innerText) {
      return
    }
    onSend?.(innerText)
    setMessage('')
    inputRef.current.innerText = ''
  }
  const handleInputChange = (event: FormEvent<HTMLDivElement>) => {
    const innerText = trim((event.target as HTMLDivElement).innerText)
    setMessage(innerText)
    onInput?.(innerText)
  }

  return (
    <div className={classnames(prefix, { [`${prefix}--disabled`]: innerDisabled, [`${prefix}--focused`]: isFocus })}>
      <div className={`${prefix}__input`} contentEditable ref={inputRef} onInput={handleInputChange}></div>
      <div className={`${prefix}__send-wrapper`}>
        <div className={`${prefix}__send-right`}>
          <div className={`${prefix}__like-question`}>
            <div className={`${prefix}__like-icon`}></div>
            相似问题
          </div>
          <div className={`${prefix}__send`} onClick={handleSend}></div>
        </div>
      </div>
    </div>
  )
}
export default ChatInput
