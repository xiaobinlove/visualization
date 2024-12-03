import { FC, ReactNode } from 'react'
import { chatCardComponentMap } from '../../base'
import { ChatComponent } from '../../types'
import type { FormProps } from 'antd'

import './index.less'
type Props = {
  chatComponentList: ChatComponent[]
  bottomRender?: ReactNode
  onFinish?: FormProps['onFinish']
}
const preifx = 'ac-chat-card-render'
const CardRender: FC<Props> = ({ chatComponentList, bottomRender, onFinish }) => {
  return (
    <div>
      {chatComponentList.map(({ component, props, id }, index) => {
        const Component = chatCardComponentMap[component]
        return (
          <div className={`${preifx}__item`} key={id}>
            <Component key={index} {...props} onFinish={onFinish} />
          </div>
        )
      })}
      {bottomRender}
    </div>
  )
}
export default CardRender
