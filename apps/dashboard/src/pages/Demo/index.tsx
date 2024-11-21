import { StompSessionProvider, useSubscription, useStompClient } from 'react-stomp-hooks'
import { Button } from 'antd'
import { useState } from 'react'
// const url = 'ws://8.130.25.124:8613/stomp'
// const topic = 'instruction'

const url = 'ws://8.130.25.124:8613/stomp'
const topic = 'instruction'
const pass = '123456'
const host = ''
const App = () => {
  return (
    //Initialize Stomp connection, will use SockJS for http(s) and WebSocket for ws(s)
    //The Connection can be used by all child components via the hooks or hocs.
    <StompSessionProvider
      url={url}
      //All options supported by @stomp/stompjs can be used here
    >
      <SubscribingComponent />
      <SendingMessages />
    </StompSessionProvider>
  )
}

function SubscribingComponent() {
  const [lastMessage, setLastMessage] = useState('No message received yet')

  //Subscribe to /topic/test, and use handler for all received messages
  //Note that all subscriptions made through the library are automatically removed when their owning component gets unmounted.
  //If the STOMP connection itself is lost they are however restored on reconnect.
  //You can also supply an array as the first parameter, which will subscribe to all destinations in the array
  useSubscription(topic, (message) => {
    console.log(message, 'message')
  })

  return <div>Last Message: {lastMessage}</div>
}

export function SendingMessages() {
  //Get Instance of StompClient
  //This is the StompCLient from @stomp/stompjs
  //Note: This will be undefined if the client is currently not connected
  const stompClient = useStompClient()

  const sendMessage = () => {
    if (stompClient) {
      //Send Message
      stompClient.publish({
        destination: topic,
        body: 'Echo 123'
      })
    } else {
      //Handle error
    }
  }

  return <Button onClick={sendMessage}>Send Message</Button>
}

export default App
