import { FC, useState, useRef } from 'react'
import './index.less'
import classnames from 'classnames'
import NavigationBar from './NavigationBar'
import Menu from './Menu'
import HeaderToolBar from './HeaderToolBar'
import DashCanvas from './DashCanvas'
import SettingPanel from './SettingPanel'
import { useStore, isEditModeSelector } from '@/store'
import { useClickAway } from 'ahooks'
import { registerWidgets } from './widgets'
registerWidgets()
const prefix = 'db-board-framework'
const Framework: FC = () => {
  const [menuExpand, setExpandMenu] = useState<boolean>(false)
  const isEdit = useStore(isEditModeSelector)
  const menuRef = useRef<HTMLDivElement>(null)
  const toolBarRef = useRef<HTMLDivElement>(null)
  useClickAway(() => {
    setExpandMenu(false)
  }, [menuRef, toolBarRef])
  return (
    <div className={classnames([prefix, isEdit && `${prefix}--edit`])}>
      {/* 顶部导航栏 */}
      <NavigationBar />
      <div className={`${prefix}__body`}>
        <div className={`${prefix}__main`}>
          {/* 左侧菜单 */}
          {menuExpand && (
            <div className={`${prefix}__menu`} ref={menuRef}>
              <Menu />
            </div>
          )}
          {/* 顶部菜单工具栏 */}
          {isEdit && <HeaderToolBar toggleExpandMenu={setExpandMenu} menuExpand={menuExpand} ref={toolBarRef} />}
          {/* 画布 */}
          <DashCanvas />
        </div>
        {/* 右侧设置器面板 */}
        {isEdit && (
          <div className={`${prefix}__setting`}>
            <SettingPanel />
          </div>
        )}
      </div>
    </div>
  )
}
export default Framework
