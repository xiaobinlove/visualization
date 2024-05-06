import { FC } from 'react'
import ChatAiFloatButton from '@/components/ChatAiFloatButton'
import './index.less'
const prefix = 'db-business-dashboard'
const BusinessDashboard: FC = () => {
  return (
    <div className={prefix}>
      <ChatAiFloatButton />
    </div>
  )
}
export default BusinessDashboard
