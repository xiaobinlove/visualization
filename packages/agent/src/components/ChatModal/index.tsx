import { FC, ReactNode, useState } from 'react'
import classnames from 'classnames'
import { FullscreenOutlined, FullscreenExitOutlined, CloseOutlined } from '@ant-design/icons'
// import { CloseOutlined } from '@ant-design/icons'
import { useControllableValue } from 'ahooks'

import './index.less'
const prefix = 'ac-chat-modal'
type Props = {
  title?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: ReactNode
}

const ChatModal: FC<Props> = (props) => {
  const [full, setFull] = useState(false)
  const { title = '智能助手', children } = props
  const [innerOpen, innerSetOpen] = useControllableValue(props, { valuePropName: 'open', trigger: 'onOpenChange', defaultValue: false })
  const handleClose = () => {
    innerSetOpen(false)
  }
  return (
    <div className={classnames(prefix, { [`${prefix}--hide`]: !innerOpen, [`${prefix}--full`]: full })}>
      <div className={`${prefix}__content`}>
        <div className={`${prefix}__header`}>
          <div className={`${prefix}__title-wrapper`}>
            <i className={`${prefix}__ai-icon`}></i>
            <div className={`${prefix}__title`}>{title}</div>
          </div>
          <div className={`${prefix}__operators`}>
            <div
              className={`${prefix}__operator`}
              onClick={() => {
                setFull((val) => !val)
              }}
            >
              {!full ? <FullscreenOutlined /> : <FullscreenExitOutlined />}
            </div>
            <div className={`${prefix}__operator`} onClick={handleClose}>
              <CloseOutlined />
            </div>
          </div>
        </div>
        <div className={`${prefix}__chat`}>{children}</div>
      </div>
    </div>
  )
}
export default ChatModal
