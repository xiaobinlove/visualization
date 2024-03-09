import { forwardRef } from 'react'
const prefix = 'hd-header-tool-bar'
import './index.less'
import ComponentSelect from '../ComponentSelect'
type Props = {
  toggleExpandMenu: (exnapnd: boolean) => void
  menuExpand: boolean
}
const HeaderToolBar = forwardRef<HTMLDivElement, Props>(({ toggleExpandMenu, menuExpand }, ref) => {
  return (
    <div className={prefix}>
      <div ref={ref}>
        <ComponentSelect onClick={toggleExpandMenu} expand={menuExpand} prefixIconName="tubiao-1" />
      </div>
    </div>
  )
})
export default HeaderToolBar
