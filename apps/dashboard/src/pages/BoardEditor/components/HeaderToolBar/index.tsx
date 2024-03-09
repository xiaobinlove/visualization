import { FC, useState } from 'react'
const prefix = 'hd-header-tool-bar'
import './index.less'
import ComponentSelect from '../ComponentSelect'
type Props = {
  toggleExpandMenu: (exnapnd: boolean) => void
}
const HeaderToolBar: FC<Props> = ({ toggleExpandMenu }) => {
  return (
    <div className={prefix}>
      <ComponentSelect onClick={toggleExpandMenu} prefixIconName="tubiao-1" />
    </div>
  )
}
export default HeaderToolBar
