import { useEffect } from 'react'
// const url = 'ws://8.130.25.124:8613/stomp'
import { RxStomp } from '@stomp/rx-stomp'
// const topc = 'instruction'
export const useStomp = (
  {
    topic,
    url,
    disabledStomp
  }: {
    url: string
    topic: string
    disabledStomp?: boolean // 是否连接stomp
  },
  onMessage: (content: string, body: { content: string; [key: string]: unknown }) => void
) => {
  useEffect(() => {
    if (disabledStomp) return
    const rxStomp = new RxStomp()
    rxStomp.configure({
      brokerURL: url,
      connectHeaders: {
        login: String(new Date().getTime()),
        passcode: '123456',
        host: 'host'
      }
    })
    rxStomp.activate()
    const subscription = rxStomp.watch({ destination: topic }).subscribe((message) => {
      const body = JSON.parse(message.body)
      onMessage(body.content, body)
    })
    return () => {
      subscription.unsubscribe()
      rxStomp.deactivate()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
