import { FC, useState } from 'react'
import ChatModalButton from '../ChatModalButton'
import ChatModal from '../ChatModal'
const AgentChatEntry: FC = () => {
  const [open, setOpen] = useState(true)
  const handleClick = () => {
    console.log('点击了按钮')
    setOpen(true)
  }
  return (
    <div>
      {!open && <ChatModalButton onClick={handleClick} />}
      <ChatModal open={open} setOpen={setOpen} />
    </div>
  )
}
export default AgentChatEntry
