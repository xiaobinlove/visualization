import { FC, useState } from 'react'
import { LeftOutlined } from '@ant-design/icons'
import { Typography, Space, Button } from 'antd'
import { useStore, isEditModeSelector } from '@/store'
import { doResize } from '@/utils'
import './index.less'
import { DashMode } from '@/types'
const prefix = 'db-navigation-bar'
const NavigationBar: FC = () => {
  const isEdit = useStore(isEditModeSelector)
  const setMode = useStore((state) => state.setMode)
  const [name, setName] = useState('未命名仪表盘')
  return (
    <div className={prefix}>
      <div className={`${prefix}__left`}>
        {isEdit && <LeftOutlined className={`${prefix}__back`} />}
        <Typography.Title
          editable={isEdit ? { onChange: setName } : false}
          level={5}
          style={{ margin: 0 }}
          onChange={(e) => {
            console.log(e, '22')
          }}
        >
          {name}
        </Typography.Title>
      </div>
      <div className={`${prefix}__right`}>
        <Space>
          {isEdit ? (
            <Button
              onClick={() => {
                doResize()
                setMode(DashMode.RENDER)
              }}
            >
              预览
            </Button>
          ) : (
            <Button
              onClick={() => {
                doResize()
                setMode(DashMode.EDIT)
              }}
            >
              继续编辑
            </Button>
          )}
          <Button type="primary">保存</Button>
        </Space>
      </div>
    </div>
  )
}
export default NavigationBar
