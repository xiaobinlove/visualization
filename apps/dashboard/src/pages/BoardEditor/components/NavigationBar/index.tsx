import { FC } from 'react'
import { LeftOutlined } from '@ant-design/icons'
import { Typography, Space, Button } from 'antd'
import './index.less'
const prefix = 'db-navigation-bar'

const NavigationBar: FC = () => {
  return (
    <div className={prefix}>
      <div className={`${prefix}__left`}>
        <LeftOutlined className={`${prefix}__back`} />
        <Typography.Title editable level={5} style={{ margin: 0 }}>
          未命名
        </Typography.Title>
      </div>
      <div className={`${prefix}__right`}>
        <Space>
          <Button>预览</Button>
          <Button type="primary">保存</Button>
        </Space>
      </div>
    </div>
  )
}
export default NavigationBar
