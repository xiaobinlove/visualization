import { useEffect, useRef, useCallback } from 'react'
import { StompClient } from '@/assets/lib/ipu-stomp'
const url = 'ws://8.130.25.124:8613/stomp'
const clientId = 'instruction'
const pass = '123456'
const host = ''
export const useStomp = (callback: (msg: string) => void) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const stompClientRef = useRef<any>(null)

  const handleMessage = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (msg: any) => {
      let content = ''
      try {
        content = JSON.parse(msg.body).content
      } catch (error) {
        console.error('解析消息内容失败：', error)
      }
      console.log(JSON.parse(msg.body), 'mgs')
      console.log('收到订阅消息：', JSON.stringify(msg))
      if (content) {
        callback(content)
      }
      // 处理前端触发逻辑
    },
    [callback]
  )

  const subscribeToTopic = useCallback(
    (topic: string) => {
      const client = stompClientRef.current
      if (client && client.connected()) {
        client.subscribe(topic, handleMessage)
      } else {
        console.log('未连接，请先连接')
      }
    },
    [handleMessage]
  )

  const onConnected = (msg: string) => {
    console.log('连接成功：', msg)
    subscribeToTopic(clientId)
  }

  const onFailure = (msg: string) => {
    console.log('连接失败：', msg)
    // 可以考虑将错误传递给上层组件或显示给用户
  }

  const connectToStomp = () => {
    const client = stompClientRef.current
    if (!client || !client.connected()) {
      const stompClient = new StompClient(url)
      stompClientRef.current = stompClient
      stompClient.connect(clientId, pass, { onConnected, onFailure }, host)
    } else {
      console.log('已经建立了连接')
    }
  }

  useEffect(() => {
    connectToStomp()
    // 清理函数，组件卸载时断开连接
    return () => {
      const client = stompClientRef.current
      if (client && client.connected()) {
        client.disconnect()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // 空依赖项数组，表示这个 effect 只在组件挂载和卸载时运行
}
