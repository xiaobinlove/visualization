import { FC, useState, useRef } from 'react'
import './index.less'
import classnames from 'classnames'
import NavigationBar from './components/NavigationBar'
import Menu from './components/Menu2'
import HeaderToolBar from './components/HeaderToolBar'
import DashCanvas from './components/DashCanvas'
import SettingPanel from './components/SettingPanel'
import { useStore, isEditModeSelector } from '@/store'
import { useClickAway } from 'ahooks'
const prefix = 'db-board-editor'
const BoardEditor: FC = () => {
  const [menuExpand, setExpandMenu] = useState<boolean>(false)
  const isEdit = useStore(isEditModeSelector)
  const menuRef = useRef<HTMLDivElement>(null)
  const toolBarRef = useRef<HTMLDivElement>(null)
  useClickAway(() => {
    setExpandMenu(false)
  }, [menuRef, toolBarRef])
  return (
    <div className={classnames([prefix, isEdit && `${prefix}--edit`])}>
      <NavigationBar />
      <div className={`${prefix}__body`}>
        <div className={`${prefix}__main`}>
          {menuExpand && (
            <div className={`${prefix}__menu`} ref={menuRef}>
              <Menu />
            </div>
          )}
          {isEdit && <HeaderToolBar toggleExpandMenu={setExpandMenu} menuExpand={menuExpand} ref={toolBarRef} />}
          <DashCanvas />
        </div>
        {isEdit && (
          <div className={`${prefix}__setting`}>
            <SettingPanel />
          </div>
        )}
      </div>
    </div>
  )
}
export default BoardEditor
