import { FC } from 'react'
import { Tooltip } from 'antd'
import { EditOutlined, CopyOutlined, DeleteOutlined } from '@ant-design/icons'
import { useStore } from '@/store'
const prefix = 'hd-header-operate-container'
import './index.less'
const HeaderOperateContainer: FC = () => {
  const deleteWidget = useStore((state) => state.deleteWidget)
  return (
    <div className={prefix}>
      <div className={`${prefix}__operate`}>
        <Tooltip title="编辑" placement="bottom">
          <div className={`${prefix}__btn`}>
            <EditOutlined />
          </div>
        </Tooltip>
        <Tooltip title="复制" placement="bottom">
          <div className={`${prefix}__btn`}>
            <CopyOutlined />
          </div>
        </Tooltip>
        <Tooltip title="删除" placement="bottom">
          <div
            className={`${prefix}__btn`}
            onClick={() => {
              deleteWidget()
            }}
          >
            <DeleteOutlined />
          </div>
        </Tooltip>
      </div>
    </div>
  )
}
export default HeaderOperateContainer
