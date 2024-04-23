import { FC } from 'react'
import './index.less'
const prefix = 'db-dash-editor-menu'
import ChartsPanel from '../components/ChartsPanel'
import { menuConfig } from '../base'
const Menu: FC = () => {
  return (
    <div className={prefix}>
      <ChartsPanel data={menuConfig} />
    </div>
  )
}
export default Menu
