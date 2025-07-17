import { FC, useRef } from 'react'
import { Row, Col, Space, Grid } from 'antd'
import { RedoOutlined } from '@ant-design/icons'
const prefix = 'ac-frequently-question'
import './index.less'
type Props = {
  questions: { question: string }[]
  onItemClick?: (question: string) => void
}
const FrequentlyQuestion: FC<Props> = ({ questions, onItemClick }) => {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div className={prefix} ref={ref}>
      <Row wrap={false} gutter={10}>
        <Col flex="auto">
          <div className={`${prefix}__title`}>
            <div className={`${prefix}__icon`}></div>
            <div className={`${prefix}__name`}>常见问题</div>
          </div>
        </Col>
        {questions.map(({ question }, index) => {
          return (
            <Col key={index} flex={1}>
              <div
                className={`${prefix}__item-box ${prefix}__item`}
                onClick={() => {
                  onItemClick?.(question)
                }}
              >
                {question}
              </div>
            </Col>
          )
        })}
        <Col flex="auto">
          <div className={`${prefix}__item-box ${prefix}__change`}>
            <Space>
              <RedoOutlined color="#1B68FC" size={16} />
              换一换
            </Space>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default FrequentlyQuestion
