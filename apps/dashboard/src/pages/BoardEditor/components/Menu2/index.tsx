import { FC } from 'react'
import './index.less'
const prefix = 'db-dash-editor-menu'
import ChartsPanel from '../ChartsPanel'
const Menu: FC = () => {
  const onDragstart = (event: any) => {
    console.log(event, 'onDragstartevent')
    // 设置传输的数据类型和值
    event.dataTransfer.setData('text/plain', 'test11')
  }
  return (
    <div className={prefix}>
      <ChartsPanel />
    </div>
  )
}
export default Menu
