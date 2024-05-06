import { FC } from 'react'
import './index.less'
interface Props {
  data: string
}
const Text: FC<Props> = ({ data }) => {
  return <div className="db-chat-widget-text">{data}</div>
}
export default Text
