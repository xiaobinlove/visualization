import { FC, useState, useRef } from 'react'
import { ProChat, ChatMessage, ProChatInstance } from '@ant-design/pro-chat'
import { ChatRequest } from '@ant-design/pro-chat/es/ProChat/store/initialState'
import { ChatCard, ChatMsgItem } from '../../types'
// import { trim } from 'lodash-es'
// import { sleep } from '@/utils'
import { parseJson, getQueryParam } from '../../utils'
import { Button, Popover } from 'antd'
import { useStomp } from '../../hooks'
import to from 'await-to-js'
// import searchDataMock2 from '@/mock/update2.json'
// import { css, cx, useTheme } from 'antd-style'
import CardRender from '../CardRender'
import { conversationApi, formDataConfirmApi, chatRobotAppRegist } from '../../api/chat'
import './index.less'
import { useRequest, useMount } from 'ahooks'
const prefix = 'ac-chat-assistant'
// const CustomClassName = cx(
//   css(`
//     .ant-pro-chat-list-item-message-content{
//       // background-color: rgb(51 221 19 / 24%);
//     }
// `)
// )
const url = 'ws://8.130.25.124:8613/stomp'
const topic = 'instruction'
const AgentChat: FC = () => {
  // const proChat = useProChat()
  // const lastFormData = useRef<ChatMessage>()
  const proChatRef = useRef<ProChatInstance>()
  // const { message } = App.useApp()
  useMount(() => {
    const appCode = getQueryParam('appCode')
    if (!appCode) {
      return
    }
    chatRobotAppRegist(appCode)
  })
  // () => {
  //   proChatRef.current?.sendMessage(msg)
  // }
  useStomp({ url, topic }, (msg) => {
    console.log('msg', msg)
    proChatRef.current?.sendMessage(msg)
  })
  const [chats, setChats] = useState<ChatMsgItem[]>([])
  const { run: runConfirm, loading } = useRequest(formDataConfirmApi, {
    manual: true,
    onSuccess: () => {
      // message.success('操作成功！')
      // proChatRef.current?.sendMessage('操作成功')
      proChatRef.current?.pushChat({
        content: '操作成功',
        role: 'assistant'
      })
      setTimeout(() => {
        proChatRef?.current?.scrollToBottom?.()
      }, 1000)
    }
  })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = ({ values, questionID }: { values: any; questionID?: string }) => {
    console.log('values', values)
    runConfirm({ questionID, ...values })
  }
  // const clickSubmitBtn = () => {
  //   const list = document.querySelectorAll('.ac-submit-bnt')
  //   const last = list[list.length - 1]
  //   console.log('last', last)
  //   // last?.click()
  // }
  const handleRequest: ChatRequest = async (messages) => {
    const sendMsg = messages[messages.length - 1].content as string
    // if (trim(sendMsg) === '确认') {
    //   // clickSubmitBtn()
    //   await sleep(1000)
    //   return sendMsg
    // }
    const [err, data] = await to(conversationApi({ questionStr: sendMsg }))
    if (err) {
      return {
        content: new Response(err.message),
        type: 'ERROR'
      }
    }
    // const response = new Response(JSON.stringify(searchDataMock2.data))
    const response = new Response(JSON.stringify(data?.data))
    return {
      content: response
    }
  }
  const formDataConfirm = (questionID: string) => {
    // const values = form?.getFieldsValue?.() || {}
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
  return (
    <div className={prefix}>
      {/* <div className={`${prefix}__header`}>业务智能体</div> */}
      <div className={`${prefix}__scan-tool`}>
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
      </div>
      <div className={`${prefix}__content`}>
        <ProChat<ChatCard>
          chatRef={proChatRef}
          chats={chats}
          helloMessage="您好，我是您的海狸业务智能助手，您可以描述所需处理的业务，我会自动帮您完成，快来试试吧!"
          onChatsChange={setChats}
          userMeta={{
            avatar: `/images/user-avatar.png`
          }}
          style={{ height: '100%' }}
          assistantMeta={{ avatar: `/images/assistant-avatar.png` }}
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
                if (res) {
                  console.log('originData', originData)
                  const obj = res as ChatCard
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
}
export default AgentChat
