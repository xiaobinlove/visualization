import { FC, useState } from 'react'
import './index.less'
import NavigationBar from './components/NavigationBar'
import Menu from './components/Menu2'
import HeaderToolBar from './components/HeaderToolBar'
import DashCanvas from './components/DashCanvas'
import SettingPanel from './components/SettingPanel'
const prefix = 'db-board-editor'
const BoardEditor: FC = () => {
  const [expandMenu, setExpandMenu] = useState<boolean>(false)
  return (
    <div className={prefix}>
      <NavigationBar />
      <div className={`${prefix}__body`}>
        <div className={`${prefix}__main`}>
          {expandMenu && (
            <div className={`${prefix}__menu`}>
              <Menu />
            </div>
          )}
          <HeaderToolBar toggleExpandMenu={setExpandMenu} />
          <DashCanvas />
        </div>
        <div className={`${prefix}__setting`}>
          <SettingPanel />
        </div>
      </div>
    </div>
  )
}
export default BoardEditor
