import { useState, useRef, useImperativeHandle, forwardRef } from 'react'
import { ProChat, ChatMessage, ProChatInstance } from '@ant-design/pro-chat'
import { ChatRequest } from '@ant-design/pro-chat/es/ProChat/store/initialState'
import assistantAatar from '../../assets/images/assistant-avatar.png'
import userAvatar from '../../assets/images/user-avatar.png'
import { ChatCard, ChatMsgItem, ChatRef } from '../../types'
import { App } from 'antd'
import { parseJson } from '../../utils'
import { Button } from 'antd'
import { useStomp } from '../../hooks'
import to from 'await-to-js'
import CardRender from '../CardRender'
import { conversationApi, formDataConfirmApi, chatRobotAppRegist } from '../../api/chat'
import './index.less'
import { useRequest, useMount } from 'ahooks'
const prefix = 'ac-chat-assistant'
const url = 'ws://8.130.25.124:8613/stomp'
const topic = 'instruction'
type Props = {
  appCode?: string
  appId?: string
  // 是否禁用组件内的Stomp 订阅消息
  disabledStomp?: boolean
  callback?: (params: ChatCard['params']) => void
}
const AgentChat = forwardRef<ChatRef, Props>(({ appCode, appId, disabledStomp, callback }, ref) => {
  const { message } = App.useApp()
  const proChatRef = useRef<ProChatInstance>()
  useMount(() => {
    if (!appCode && !appId) {
      message.error('appCode或appId 不能为空！')
      return
    }
    chatRobotAppRegist({ appCode, appId })
  })
  useStomp({ url, topic, disabledStomp }, (msg) => {
    console.log('msg', msg)
    proChatRef.current?.sendMessage(msg)
  })
  const [chats, setChats] = useState<ChatMsgItem[]>([])
  const { run: runConfirm, loading } = useRequest(formDataConfirmApi, {
    manual: true,
    onSuccess: () => {
      proChatRef.current?.pushChat({
        content: '操作成功',
        role: 'assistant'
      })
      setTimeout(() => {
        proChatRef?.current?.scrollToBottom?.()
      }, 1000)
    }
  })
  const onFinish = ({ values, questionID }: { values: any; questionID?: string }) => {
    console.log('values', values)
    runConfirm({ questionID, ...values })
  }
  const handleRequest: ChatRequest = async (messages) => {
    const sendMsg = messages[messages.length - 1].content as string
    const [err, data] = await to(conversationApi({ questionStr: sendMsg }))
    if (err) {
      return {
        content: new Response(err.message),
        type: 'ERROR'
      }
    }
    const response = new Response(JSON.stringify(data?.data))
    return {
      content: response
    }
  }
  const formDataConfirm = (questionID: string) => {
    runConfirm({ questionID })
  }
  const bottomRender = ({ type, questionID }: ChatCard) => {
    if (type !== 'SEARCH_DATA' && type !== 'ADD_DATA') {
      return (
        <Button
          type="primary"
          loading={loading}
          onClick={() => {
            formDataConfirm(questionID!)
          }}
        >
          确认
        </Button>
      )
    }
    return null
  }
  const handleComMand = (chatCard: ChatCard) => {
    setTimeout(() => {
      executeComMand(chatCard.params)
    }, 3000)
  }
  const executeComMand = (params: ChatCard['params']) => {
    callback?.(params)
  }
  useImperativeHandle(ref, () => ({
    proChatInstance: proChatRef.current
  }))
  return (
    <div className={prefix}>
      {/* <div className={`${prefix}__header`}>业务智能体</div> */}
      {/* <div className={`${prefix}__scan-tool`}>
        <Popover
          content={
            <div>
              <div>请扫描二维码连接</div>
              <img src="/images/scan.png" className={`${prefix}__scan-img`} />
            </div>
          }
        >
          <img src="/images/erweima-icon.png" alt="" />
        </Popover>
      </div> */}
      <div className={`${prefix}__content`}>
        <ProChat<ChatCard>
          chatRef={proChatRef}
          chats={chats}
          helloMessage="您好，我是您的海狸业务智能助手，您可以描述所需处理的业务，我会自动帮您完成，快来试试吧!"
          onChatsChange={setChats}
          userMeta={{
            avatar: userAvatar
          }}
          style={{ height: '100%' }}
          assistantMeta={{ avatar: assistantAatar }}
          request={handleRequest}
          chatItemRenderConfig={{
            contentRender: (item, defaultDom) => {
              const { originData } = item
              const { content, role } = originData as ChatMessage
              if (role === 'assistant') {
                const res = parseJson(content)
                if (typeof res === 'string') {
                  return <div className={`${prefix}__message-content`}>{res}</div>
                }
                if (res && typeof res === 'object') {
                  const obj = res as ChatCard
                  if (obj.type === 'COMMAND') {
                    handleComMand(obj)
                    return (
                      <div className={`${prefix}__message-content`}>
                        <div>
                          此业务操作需要使用
                          {
                            <a
                              onClick={() => {
                                executeComMand(obj.params)
                              }}
                            >
                              【{obj.name}】
                            </a>
                          }
                          功能，3秒后跳转
                        </div>
                      </div>
                    )
                  }
                  return (
                    <div className={`${prefix}__message-content`}>
                      <CardRender
                        chatComponentList={obj.dsl!}
                        bottomRender={bottomRender(obj)}
                        onFinish={(values) => {
                          onFinish({ values, questionID: obj.questionID })
                        }}
                      />
                    </div>
                  )
                }
              }
              return defaultDom
            }
          }}
        />
      </div>
    </div>
  )
})
export default AgentChat
