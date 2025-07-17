import { useRef, FormEvent, useState, forwardRef, useImperativeHandle, RefObject, ReactNode, MouseEventHandler } from 'react'
import classnames from 'classnames'
import { Dropdown, MenuProps } from 'antd'
import { useFocusWithin } from 'ahooks'
const prefix = 'ac-chat-input'
import './index.less'
import { trim } from 'lodash-es'
type Props = {
  disabled?: boolean
  onSend?: (msg: string) => void
  onInput?: (msg: string) => void
}
type ChatInputRef = {
  inputRef: RefObject<HTMLDivElement>
}
const ChatInput = forwardRef<ChatInputRef, Props>(({ onSend, onInput, disabled }, ref) => {
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
    setInputMessage('')
  }
  const setInputMessage = (msg: string) => {
    setMessage(msg)
    if (inputRef.current) {
      inputRef.current.innerText = msg
    }
  }
  const handleInputChange = (event: FormEvent<HTMLDivElement>) => {
    const innerText = trim((event.target as HTMLDivElement).innerText)
    setMessage(innerText)
    onInput?.(innerText)
  }
  const onLikeQuestionClick: MenuProps['onClick'] = (val) => {
    console.log('val', val)
    setInputMessage(val.key)
  }

  useImperativeHandle(ref, () => ({
    inputRef
  }))
  return (
    <div className={classnames(prefix, { [`${prefix}--disabled`]: innerDisabled, [`${prefix}--focused`]: isFocus })}>
      <div className={`${prefix}__input`} contentEditable ref={inputRef} onInput={handleInputChange}></div>
      <div className={`${prefix}__send-wrapper`}>
        <div className={`${prefix}__send-right`}>
          <Dropdown
            disabled={innerDisabled}
            trigger={['click']}
            menu={{
              onClick: onLikeQuestionClick,
              items: [
                {
                  key: '相似问题1相似问题1相似问题1相似问题1',
                  label: '相似问题1相似问题1相似问题1相似问题1'
                },
                {
                  key: '相似问题2',
                  label: '相似问题2'
                },
                {
                  key: '相似问题3',
                  label: '相似问题3'
                }
              ]
            }}
          >
            <div className={`${prefix}__like-question`}>
              <div className={`${prefix}__like-icon`}></div>
              相似问题
            </div>
          </Dropdown>
          <div className={`${prefix}__send`} onClick={handleSend}></div>
        </div>
      </div>
    </div>
  )
})
export default ChatInput
