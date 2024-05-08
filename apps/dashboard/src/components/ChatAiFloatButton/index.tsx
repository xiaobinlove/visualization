import { FC, useState } from 'react'
import { Drawer } from 'antd'
import ChatBi from '../ChatBi'
import { CloseOutlined } from '@ant-design/icons'
import SvgIcon from '../SvgIcon'
import './index.less'
const prefix = 'db-chat-ai'
const ChatAi: FC = () => {
  const [open, setOpen] = useState(false)
  const [fullScreem, setFullScreem] = useState(false)
  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
    setFullScreem(false)
  }
  const handleExpandClick = () => {
    setFullScreem((val) => !val)
  }
  return (
    <div className={prefix}>
      <div className={`${prefix}__icon`} onClick={showDrawer}></div>
      <Drawer className={`${prefix}__content`} mask={false} onClose={onClose} open={open} width={fullScreem ? '100%' : '750'}>
        <CloseOutlined
          className={`${prefix}__close`}
          onClick={() => {
            setOpen(false)
          }}
        />
        <div className={`${prefix}__expand-icon`} onClick={handleExpandClick}>
          <SvgIcon name={fullScreem ? 'un-full' : 'full'} />
        </div>
        <ChatBi />
      </Drawer>
    </div>
  )
}
export default ChatAi
