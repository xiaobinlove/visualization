import { FC } from 'react'
import './index.less'
const prefix = 'db-dash-editor-menu'
import ChartsPanel from '../ChartsPanel'
const Menu: FC = () => {
  return (
    <div className={prefix}>
      <ChartsPanel />
    </div>
  )
}
export default Menu
