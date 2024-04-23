import { FC, DragEvent } from 'react'
import './index.less'
import type { ChartMenuItem, ChartMenu } from '@/types'
import { DashComponentType } from '@/types'
const prefix = 'hd-charts-panel'

type Props = {
  onItemClick?: (item: ChartMenuItem) => void
  data: ChartMenu[]
}
const onDragStart = (e: DragEvent<HTMLElement>, type: DashComponentType) => {
  e.dataTransfer.setData('text/plain', type)
}

const ChartsPanel: FC<Props> = ({ onItemClick, data }) => {
  const handleClick = (item: ChartMenuItem) => {
    onItemClick?.(item)
  }
  return (
    <div className={prefix}>
      <div className={`${prefix}__group-list`}>
        {data.map(({ title, children }, index) => {
          return (
            <div className={`${prefix}__group`} key={index}>
              <div className={`${prefix}__title`}>{title}</div>
              <div className={`${prefix}__items`}>
                {children.map((item, index) => {
                  return (
                    <div
                      className={`${prefix}__item`}
                      key={index}
                      draggable={true}
                      unselectable="on"
                      onClick={() => {
                        handleClick(item)
                      }}
                      onDragStart={(e) => {
                        onDragStart(e, item.type)
                      }}
                    >
                      <div className={`${prefix}__item-inner`}>
                        <div className={`${prefix}__icon-container`}>
                          <div className={`global-component-icon ${item.icon} light`}></div>
                        </div>
                        <div className={`${prefix}__name`}>{item.name}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default ChartsPanel
