import { FC, ReactNode } from 'react'
import { Rnd } from 'react-rnd'
// import { FullscreenOutlined, FullscreenExitOutlined, CloseOutlined } from '@ant-design/icons'
import { CloseOutlined } from '@ant-design/icons'
import { useControllableValue } from 'ahooks'

import './index.less'
const width = 500
const prefix = 'ac-chat-modal'
type Props = {
  title?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: ReactNode
}

const ChatModal: FC<Props> = (props) => {
  const { title = '智能助手', children } = props
  const defualt = { height: '100vh', width, x: document.body.clientWidth - width - 10, y: 0 }
  const [innerOpen, innerSetOpen] = useControllableValue(props, { valuePropName: 'open', trigger: 'onOpenChange', defaultValue: false })
  const handleClose = () => {
    innerSetOpen(false)
  }
  return (
    <Rnd className={innerOpen ? prefix : `${prefix}--hide`} dragHandleClassName={`${prefix}__header`} default={defualt} minWidth={400} minHeight={500}>
      <div className={`${prefix}__content`}>
        <div className={`${prefix}__header`}>
          <div className={`${prefix}__title-wrapper`}>
            <i className={`${prefix}__ai-icon`}></i>
            <div className={`${prefix}__title`}>{title}</div>
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
        <div className={`${prefix}__chat`}>{children}</div>
      </div>
    </Rnd>
  )
}
export default ChatModal
