import { FC } from 'react'
import { Rnd } from 'react-rnd'
// import { FullscreenOutlined, FullscreenExitOutlined, CloseOutlined } from '@ant-design/icons'
import { CloseOutlined } from '@ant-design/icons'
import AgentChat from '../AgentChat'
import './index.less'
const width = 500
const prefix = 'ac-chat-modal'
type Props = {
  open: boolean
  setOpen: (open: boolean) => void
}

const ChatModal: FC<Props> = ({ open, setOpen }) => {
  const defualt = { height: '100vh', width, x: document.body.clientWidth - width - 10, y: 0 }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Rnd className={open ? prefix : `${prefix}--hide`} dragHandleClassName={`${prefix}__header`} default={defualt} minWidth={400} minHeight={500}>
      <div className={`${prefix}__content`}>
        <div className={`${prefix}__header`}>
          <div className={`${prefix}__title-wrapper`}>
            <i className={`${prefix}__ai-icon`}></i>
            <div className={`${prefix}__title`}>智能助手</div>
          </div>
          <div className={`${prefix}__operators`}>
            {/* <div className={`${prefix}__operator`}>
              <FullscreenOutlined />
            </div> */}
            <div className={`${prefix}__operator`} onClick={handleClose}>
              <CloseOutlined />
            </div>
          </div>
        </div>
        <div className={`${prefix}__chat`}>
          <AgentChat />
        </div>
      </div>
    </Rnd>
  )
}
export default ChatModal
