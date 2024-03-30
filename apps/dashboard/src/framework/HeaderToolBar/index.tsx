import { forwardRef, DragEvent, MouseEvent } from 'react'
import ComponentSelect from '../components/ComponentSelect'
import { DashComponentType } from '@/types'
import SvgIcon from '@/components/SvgIcon'
import { Tooltip, Divider, Dropdown, App } from 'antd'
import type { MenuProps } from 'antd'
const prefix = 'hd-header-tool-bar'
import { containerSelector, useStore, useSelector, curWidgetSelector } from '@/store'
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
  const { message } = App.useApp()
  const container = useStore(containerSelector)
  const curWidget = useStore(curWidgetSelector)
  const { curWidgetId, moveWidgetToTab } = useStore(useSelector(['curWidgetId', 'moveWidgetToTab']))
  const onDragStart = (e: DragEvent<HTMLElement>, type: DashComponentType) => {
    e.dataTransfer.setData('text/plain', type)
  }
  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    if (curWidget.type === DashComponentType.TAB) {
      return
    }
    moveWidgetToTab(curWidgetId, key)
  }
  const handleMoveBtnClick = (event: MouseEvent) => {
    if (!curWidgetId) {
      message.warning('请先选中要移动到图表/组件')
      event.stopPropagation()
      return
    }
  }
  return (
    <div className={prefix}>
      <div className={`${prefix}__left`}>
        <div ref={ref}>
          <ComponentSelect onClick={toggleExpandMenu} expand={menuExpand} prefixIconName="tubiao-1" />
        </div>
        <Divider type="vertical" />
        <div className={`${prefix}__oprate-group`}>
          <Dropdown menu={{ items: container, onClick: handleMenuClick }}>
            <div className={`${prefix}__oprate`} onClick={handleMoveBtnClick}>
              <SvgIcon className={`${prefix}__oprate-icon`} name="move" />
              移动
            </div>
          </Dropdown>
        </div>
        <Divider type="vertical" orientationMargin={100} />
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
