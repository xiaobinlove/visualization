import { FC } from 'react'
import SvgIcon from '@/components/SvgIcon'
import { Input } from 'antd'
const Textarea = Input.TextArea
import './index.less'
const prefix = 'db-chat-bi'
const ChatBi: FC = () => {
  return (
    <div className={prefix}>
      <div className={`${prefix}__header`}></div>
      <div className={`${prefix}__content`}>
        <div className={`${prefix}__chat-item`}>
          <div className={`${prefix}__chat-head`}></div>
          <div className={`${prefix}__chat-body`}>
            <div className={`${prefix}__description`}>
              {/* 左侧 */}
              <div className={`${prefix}__info`}>
                <div className={`${prefix}__info-model`}>
                  查询数据表：
                  <span>各国人口数量趋势</span>
                </div>
                <div className={`${prefix}__filter-info`}>先按照国家或地区、年份分组，再计算人口数量求和，最后按照年份升序排序。</div>
              </div>
              {/* 右侧 */}
              <div className={`${prefix}__toolbar-container`}>
                <div className={`${prefix}__switch-chart-type-container`}></div>
                <div className={`${prefix}__feedback-container`}>
                  <div className={`${prefix}__toolbar-item`}>
                    <SvgIcon name="点赞@1x(1)" color="red" size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${prefix}__foot`}>
        <div className={`${prefix}__ask`}>
          <div className={`${prefix}__ask-inner`}>
            <Textarea className={`${prefix}__input`} autoSize={{ minRows: 1, maxRows: 4 }} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ChatBi
