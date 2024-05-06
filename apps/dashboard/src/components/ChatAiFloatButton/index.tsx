import { FC, useState } from 'react'
import { Drawer } from 'antd'
import ChatBi from '../ChatBi'
import { CloseOutlined } from '@ant-design/icons'
import './index.less'
const prefix = 'db-chat-ai'
const ChatAi: FC = () => {
  const [open, setOpen] = useState(false)
  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }
  return (
    <div className={prefix}>
      <div className={`${prefix}__icon`} onClick={showDrawer}></div>
      <Drawer className={`${prefix}__content`} mask={false} onClose={onClose} open={open} width="750">
        <CloseOutlined
          className={`${prefix}__close`}
          onClick={() => {
            setOpen(false)
          }}
        />
        <ChatBi />
      </Drawer>
    </div>
  )
}
export default ChatAi
