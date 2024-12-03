import { FC } from 'react'
import logoSrc from '../../assets/images/logo.svg'
import './index.less'
const prefix = 'ac-chat-modal-button'
type Props = {
  onClick: () => void
}
const ChatModalButton: FC<Props> = ({ onClick }) => {
  return (
    <div className={prefix} onClick={onClick}>
      <div className={`${prefix}__logo`}>
        <img src={logoSrc} />
      </div>
      <div className={`${prefix}__label`}>智能助手</div>
    </div>
  )
}
export default ChatModalButton
