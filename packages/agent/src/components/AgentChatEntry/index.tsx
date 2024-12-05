import { FC } from 'react'
import ChatModalButton from '../ChatModalButton'
import ChatModal from '../ChatModal'
import AgentChat from '../AgentChat'
import { useControllableValue } from 'ahooks'
type Prpops = {
  appCode?: string
  appId?: string
  open?: boolean
  disabledStomp?: boolean
  onOpenChange?: (open: boolean) => void
}
const AgentChatEntry: FC<Prpops> = (props) => {
  const { appCode, appId, disabledStomp } = props
  const [innerOpen, innerSetOpen] = useControllableValue(props, { valuePropName: 'open', trigger: 'onOpenChange' })
  const handleClick = () => {
    innerSetOpen(true)
  }
  return (
    <div>
      {!innerOpen && <ChatModalButton onClick={handleClick} />}
      <ChatModal open={innerOpen} onOpenChange={innerSetOpen}>
        <AgentChat disabledStomp={disabledStomp} appCode={appCode} appId={appId} />
      </ChatModal>
    </div>
  )
}
export default AgentChatEntry
