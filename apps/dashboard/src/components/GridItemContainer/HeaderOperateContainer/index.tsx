import { FC, MouseEvent } from 'react'
import { Tooltip, Popconfirm } from 'antd'
import { CopyOutlined, DeleteOutlined } from '@ant-design/icons'
import { useStore, useSelector } from '@/store'
const prefix = 'hd-header-operate-container'
import './index.less'
type Props = {
  widgetId: string
}
const HeaderOperateContainer: FC<Props> = ({ widgetId }) => {
  const { deleteWidget, curWidgetId, setCurWidetId, copyWidget } = useStore(useSelector(['deleteWidget', 'setCurWidetId', 'curWidgetId', 'copyWidget']))
  const handleDelete = (e?: MouseEvent<HTMLElement>) => {
    e?.stopPropagation()
    if (curWidgetId === widgetId) {
      setCurWidetId('')
    }
    deleteWidget(widgetId)
  }
  const handleCopy = () => {
    copyWidget(widgetId)
  }
  return (
    <div className={prefix}>
      <div className={`${prefix}__operate`}>
        {/* <Tooltip title="编辑" placement="bottom">
          <div className={`${prefix}__btn`}>
            <EditOutlined />
          </div>
        </Tooltip> */}
        <Tooltip title="复制" placement="bottom">
          <div className={`${prefix}__btn`} onClick={handleCopy}>
            <CopyOutlined />
          </div>
        </Tooltip>
        <Tooltip title="删除" placement="bottom">
          <Popconfirm
            onConfirm={handleDelete}
            title="删除"
            placement="bottom"
            description="是否确定删除该组件？（删除后无法恢复）"
            okText="确认"
            cancelText="取消"
          >
            <div className={`${prefix}__btn`}>
              <DeleteOutlined />
            </div>
          </Popconfirm>
        </Tooltip>
      </div>
    </div>
  )
}
export default HeaderOperateContainer
