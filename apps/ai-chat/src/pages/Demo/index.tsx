import { FC, useEffect, useState } from 'react'
import { Button } from 'antd'
import { Rnd } from 'react-rnd'
import Randar from './Randar'
import { AgentChatEntry } from '@zov/agent'
import { nanoid } from 'nanoid'
import './index.less'
import { RxStomp } from '@stomp/rx-stomp'
const url = 'ws://8.130.25.124:8613/stomp'
const topc = 'instruction'
const width = 400
const Demo: FC = () => {
  const [list, setList] = useState<string[]>([])
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
      setList((prev) => [...prev, message.body])
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
      <Button
        className="demo-button"
        type="primary"
        onClick={() => {
          alert('222')
        }}
      >
        按钮
      </Button>
      <AgentChatEntry />
    </div>
  )
}
export default Demo
