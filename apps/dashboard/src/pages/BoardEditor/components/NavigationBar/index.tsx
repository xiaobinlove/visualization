import { FC } from 'react'
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
  return (
    <div className={prefix}>
      <div className={`${prefix}__left`}>
        {isEdit && <LeftOutlined className={`${prefix}__back`} />}
        <Typography.Title editable={isEdit} level={5} style={{ margin: 0 }}>
          未命名
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
