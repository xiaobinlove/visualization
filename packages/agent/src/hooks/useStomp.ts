import { useEffect } from 'react'
// const url = 'ws://8.130.25.124:8613/stomp'
import { RxStomp } from '@stomp/rx-stomp'
// const topc = 'instruction'
export const useStomp = (
  {
    topic,
    url
  }: {
    url: string
    topic: string
    //   onMessage: (content: string, body: { content: string; [key: string]: unknown }) => void
  },
  onMessage: (content: string, body: { content: string; [key: string]: unknown }) => void
) => {
  useEffect(() => {
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
      console.log(message, 'message')
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
