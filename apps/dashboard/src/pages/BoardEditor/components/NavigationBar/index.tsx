import { FC, useState } from 'react'
import { LeftOutlined } from '@ant-design/icons'
import { Typography, Space, Button, App } from 'antd'
import { useStore, isEditModeSelector, useSelector } from '@/store'
import { doResize } from '@/utils'
import { DashMode } from '@/types'
import './index.less'
const prefix = 'db-navigation-bar'
const NavigationBar: FC = () => {
  const { message } = App.useApp()
  const isEdit = useStore(isEditModeSelector)
  const { widgets } = useStore(useSelector(['widgets']))
  const setMode = useStore((state) => state.setMode)
  const [name, setName] = useState('未命名仪表盘')
  const onSave = () => {
    localStorage.setItem('dash-data', JSON.stringify(widgets))
    message.success('仪表板保存成功！')
  }
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
          <Button type="primary" onClick={onSave}>
            保存
          </Button>
        </Space>
      </div>
    </div>
  )
}
export default NavigationBar
