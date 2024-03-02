import { FC } from 'react'
import { SolutionOutlined } from '@ant-design/icons'
import './index.less'
const prefix = 'db-dash-editor-menu'
const Menu: FC = () => {
  const onDragstart = (event: any) => {
    console.log(event, 'onDragstartevent')
    // 设置传输的数据类型和值
    event.dataTransfer.setData('text/plain', 'test11')
  }
  return (
    <div className={prefix}>
      <div>
        <div className={`${prefix}__label`}>图表</div>
        <div className={`${prefix}__group`}>
          <div className={`${prefix}__item`} onDragStart={onDragstart} draggable unselectable="on" data-grid={{ w: 30, h: 1 }}>
            <div className={`${prefix}__thumb`}>
              <SolutionOutlined />
            </div>
            <div className={`${prefix}__text`}>统计表</div>
          </div>
          <div className={`${prefix}__item`}>
            <div className={`${prefix}__thumb`}>
              <SolutionOutlined />
            </div>
            <div className={`${prefix}__text`}>统计表</div>
          </div>
          <div className={`${prefix}__item`}>
            <div className={`${prefix}__thumb`}>
              <SolutionOutlined />
            </div>
            <div className={`${prefix}__text`}>统计表</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Menu
