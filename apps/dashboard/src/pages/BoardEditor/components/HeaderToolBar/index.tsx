import { forwardRef, DragEvent } from 'react'
import ComponentSelect from '../ComponentSelect'
import { DashComponentType } from '@/types'
import { Tooltip, Divider } from 'antd'
const prefix = 'hd-header-tool-bar'
import './index.less'
type Props = {
  toggleExpandMenu: (exnapnd: boolean) => void
  menuExpand: boolean
}
const componentWidgetList = [
  {
    name: '富文本',
    icon: 'component-type-text',
    type: DashComponentType.RICH_TEXT
  },
  {
    name: '图片',
    icon: 'component-type-pic',
    type: DashComponentType.IMAGE
  },
  {
    name: 'tab',
    icon: 'component-type-tab',
    type: DashComponentType.TAB
  }
]
const HeaderToolBar = forwardRef<HTMLDivElement, Props>(({ toggleExpandMenu, menuExpand }, ref) => {
  const onDragStart = (e: DragEvent<HTMLElement>, type: DashComponentType) => {
    e.dataTransfer.setData('text/plain', type)
  }
  return (
    <div className={prefix}>
      <div className={`${prefix}__left`}>
        <div ref={ref}>
          <ComponentSelect onClick={toggleExpandMenu} expand={menuExpand} prefixIconName="tubiao-1" />
        </div>
        <Divider type="vertical" />
        <div className={`${prefix}__cop-group`}>
          {componentWidgetList.map((item) => {
            return (
              <Tooltip key={item.name} title={item.name}>
                <div
                  className={`${prefix}__cop-item`}
                  draggable
                  onDragStart={(e) => {
                    onDragStart(e, item.type)
                  }}
                >
                  <div className={`${prefix}__icon-wrap`}>
                    <div className={`global-component-icon ${prefix}__cop-icon ${item.icon} light`}></div>
                  </div>
                </div>
              </Tooltip>
            )
          })}
        </div>
      </div>
      <div className={`${prefix}__right`}></div>
    </div>
  )
})
export default HeaderToolBar
