import { FC } from 'react'
import './index.less'
import NavigationBar from './components/NavigationBar'
import Menu from './components/Menu'
import DashCanvas from './components/DashCanvas'
import SettingPanel from './components/SettingPanel'
const prefix = 'db-board-editor'
const BoardEditor: FC = () => {
  return (
    <div className={prefix}>
      <NavigationBar />
      <div className={`${prefix}__body`}>
        <div className={`${prefix}__menu`}>
          <Menu />
        </div>
        <div className={`${prefix}__main`}>
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
