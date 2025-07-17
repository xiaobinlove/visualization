import { useRef, FormEvent, useState, forwardRef, useImperativeHandle, RefObject, ReactNode, MouseEventHandler } from 'react'
import classnames from 'classnames'
import { Dropdown } from 'antd'
import type { MenuProps } from 'antd'
import { useFocusWithin, useDebounceFn } from 'ahooks'
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
const suggestions = [
  {
    key: '1',
    name: '超市销售数据',
    tableName: '超市销售数据',
    title: '字段'
  },
  {
    key: '2',
    name: '超市销售数据',
    tableName: '超市销售数据',
    title: '字段'
  },
  {
    key: '3',
    name: '超市销售数据',
    tableName: '超市销售数据',
    title: '字段'
  }
]
const ChatInput = forwardRef<ChatInputRef, Props>(({ onSend, onInput, disabled }, ref) => {
  const [message, setMessage] = useState('')
  // 在您的组件中，添加一个状态来控制提示词列表弹窗的显示
  const [showSuggestions, setShowSuggestions] = useState(true)
  const [suggestionsPosition, setSuggestionsPosition] = useState({ top: 0, left: 0 })
  const inputRef = useRef<HTMLDivElement>(null)
  const suggestionRef = useRef<HTMLDivElement>(null)
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
  // 获取鼠标光标的位置
  const getCursorPosition = () => {
    const selection = window.getSelection()
    if (!selection) return
    const range = selection.getRangeAt(0)
    const rect = range.getBoundingClientRect()
    return {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX
    }
  }
  const setInputMessage = (msg: string) => {
    setMessage(msg)
    if (inputRef.current) {
      inputRef.current.innerText = msg
    }
  }
  const handleInputChange = (event: FormEvent<HTMLDivElement>) => {
    setShowSuggestions(false)
    const innerText = trim((event.target as HTMLDivElement).innerText)
    setMessage(innerText)
    run(innerText)
  }
  const { run } = useDebounceFn(
    (innerText) => {
      onInput?.(innerText)
      // 获取光标的位置并更新弹窗位置
      const position = getCursorPosition()
      if (position) {
        setTimeout(() => {
          setSuggestionsPosition(position)
          setShowSuggestions(true)
        }, 100)
      }
    },
    { wait: 500 }
  )
  const onLikeQuestionClick: MenuProps['onClick'] = (val) => {
    console.log('val', val)
    setInputMessage(val.key)
  }
  // 处理用户点击提示词的事件
  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion)
    setShowSuggestions(false) // 关闭弹窗
  }
  useImperativeHandle(ref, () => ({
    inputRef
  }))
  return (
    <div className={classnames(prefix, { [`${prefix}--disabled`]: innerDisabled, [`${prefix}--focused`]: isFocus })}>
      <div
        className={`${prefix}__input`}
        contentEditable
        ref={inputRef}
        onInput={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.altKey && !e.ctrlKey) {
            e.preventDefault()
            if (e.altKey) {
              document.execCommand('insertLineBreak')
            } else {
              handleSend()
            }
          }
        }}
      ></div>
      <div className={`${prefix}__send-wrapper`}>
        {!message && <div className={`${prefix}__placeholder`}>请输入消息...</div>}
        <div className={`${prefix}__send-right`}>
          <Dropdown
            disabled={innerDisabled}
            trigger={['click']}
            placement={'topLeft'}
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
      <Dropdown
        open={showSuggestions}
        onOpenChange={(open) => setShowSuggestions(open)}
        trigger={['click']}
        placement={'topLeft'}
        dropdownRender={() => {
          return (
            <div className={`${prefix}__suggestions-popup`}>
              {suggestions.map((suggestion) => {
                return (
                  <div key={suggestion.key} className={`${prefix}__suggestion-item`} onClick={() => handleSuggestionClick(suggestion.key)}>
                    <div className={`${prefix}__suggestion-title`}>{suggestion.title}</div>
                    <div>
                      <div className={`${prefix}__suggestion-name`}>{suggestion.name}</div>
                      <div className={`${prefix}__suggestion-table`}>{suggestion.tableName}</div>
                    </div>
                  </div>
                )
              })}
              <div className={`${prefix}__name`}></div>
            </div>
          )
        }}
        menu={{
          onClick: onLikeQuestionClick
        }}
      >
        <div ref={suggestionRef} style={{ position: 'fixed', top: suggestionsPosition.top, left: suggestionsPosition.left, width: '1px', height: '1px' }}></div>
      </Dropdown>
      {/* {showSuggestions && (
        <div className={`${prefix}__suggestions-popup`} style={{ top: suggestionsPosition.top, left: suggestionsPosition.left }}>
          <ul>
            <li onClick={() => handleSuggestionClick('提示词1')}>提示词1</li>
            <li onClick={() => handleSuggestionClick('提示词2')}>提示词2</li>
            <li onClick={() => handleSuggestionClick('提示词3')}>提示词3</li>
          </ul>
        </div>
      )} */}
    </div>
  )
})
export default ChatInput
