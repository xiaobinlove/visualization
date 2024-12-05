import { FC, useEffect, useState, useRef } from 'react'
import { Button } from 'antd'
import { ChatModal, AgentChat, AgentChatEntry } from '../../../../../packages/agent/src/index'
import type { ChatRef } from '@zov/agent'
import { nanoid } from 'nanoid'
import './index.less'
import { RxStomp } from '@stomp/rx-stomp'
import { getQueryParam } from '@/utils'
const url = 'ws://8.130.25.124:8613/stomp'

const topc = 'instruction'
const Demo: FC = () => {
  const appCode = getQueryParam('appCode') || ''
  const chatRef = useRef<ChatRef>(null)
  const [open, setOpen] = useState<boolean>(true)
  useEffect(() => {
    const rxStomp = new RxStomp()
    rxStomp.configure({
      brokerURL: url,
      connectHeaders: {
        login: nanoid(12),
        passcode: '123456',
        host: 'host'
      },
      debug: (msg: string): void => {
        console.log(msg, 'debugMsg')
      }
    })
    rxStomp.activate()
    const subscription = rxStomp.watch({ destination: topc }).subscribe((message) => {
      console.log(message, 'message')
      console.log(typeof message.body, 'typeof')
    })
    return () => {
      subscription.unsubscribe()
      rxStomp.deactivate()
    }
  }, [])
  return (
    <div>
      {/* <Rnd dragHandleClassName="demo-header" default={{ height: '100vh', width, x: document.body.clientWidth - width - 10, y: 0 }}>
        <div className="demo-content">
          <div className="demo-header">header</div>
          <div>body</div>
        </div>
      </Rnd> */}
      {/* {list.map((item, index) => (
        <div key={index}>
          {item}
          <br />
        </div>
      ))} */}
      {/* <Randar /> */}
      {/* <Button
        onClick={() => {
          setOpen(true)
          // setMessage('fdsfds')
          chatRef.current?.proChatInstance?.sendMessage('你好')
        }}
      >
        发送消息
      </Button>
      <Button
        className="demo-button"
        type="primary"
        onClick={() => {
          alert('222')
        }}
      >
        按钮
      </Button>
      <ChatModal open={open} onOpenChange={setOpen}>
        <AgentChat
          ref={chatRef}
          disabledStomp={true}
          appCode={appCode}
          callback={(params) => {
            console.log(params, 'callback')
          }}
        />
      </ChatModal> */}
      <AgentChatEntry appCode={appCode} open={open} disabledStomp onOpenChange={setOpen} />
    </div>
  )
}
export default Demo
