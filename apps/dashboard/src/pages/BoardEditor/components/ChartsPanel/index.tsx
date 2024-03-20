import { FC, DragEvent } from 'react'
import './index.less'
const prefix = 'hd-charts-panel'
import type { ChartMenuItem, ChartMenu } from '@/types'
import { DashComponentType } from '@/types'
type Props = {
  type?: 'menu' | 'select'
  onItemClick?: (item: ChartMenuItem) => void
}
const data: ChartMenu[] = [
  {
    title: '表格',
    chilren: [
      {
        name: '明细表',
        icon: 'component-type-common-table',
        type: DashComponentType.DATA_TABLE
      },
      {
        name: '交叉表',
        icon: 'component-type-cross-table',
        type: DashComponentType.LINE_CHART
      }
    ]
  },
  {
    title: '指标',
    chilren: [
      {
        name: '指标看板',
        icon: 'component-type-indicator-card',
        type: DashComponentType.INDICATOR_CARD
      },
      {
        name: '进度条',
        icon: 'component-type-progress-new',
        type: DashComponentType.LINE_CHART
      },
      {
        name: '仪表盘',
        icon: 'component-type-gauge-new',
        type: DashComponentType.LINE_CHART
      }
    ]
  },
  {
    title: '线/面图',
    chilren: [
      {
        name: '线图',
        icon: 'component-type-line',
        type: DashComponentType.LINE_CHART
      },
      {
        name: '面积图',
        icon: 'component-type-polyline',
        type: DashComponentType.AREA_CHART
      }
    ]
  },
  {
    title: '柱/条图',
    chilren: [
      {
        name: '柱图',
        icon: 'component-type-bar',
        type: DashComponentType.COLUMN_CHART
      },
      {
        name: '堆积',
        icon: 'component-type-bar-stack',
        type: DashComponentType.LINE_CHART
      },
      {
        name: '百分比',
        icon: 'component-type-bar-stack-percent',
        type: DashComponentType.LINE_CHART
      },
      {
        name: '条形图',
        icon: 'component-type-strip',
        type: DashComponentType.AREA_CHART
      },
      {
        name: '堆积',
        icon: 'component-type-strip-stack',
        type: DashComponentType.LINE_CHART
      },
      {
        name: '百分比',
        icon: 'component-type-polyline-stack-percent',
        type: DashComponentType.LINE_CHART
      },
      {
        name: '甘特图',
        icon: 'component-type-polyline-stack-percent',
        type: DashComponentType.GANTT_CHART
      }
    ]
  },
  {
    title: '饼/环形',
    chilren: [
      {
        name: '饼图',
        icon: 'component-type-pie',
        type: DashComponentType.PIE_CHART
      }
    ]
  }
]
const onDragStart = (e: DragEvent<HTMLElement>, type: DashComponentType) => {
  e.dataTransfer.setData('text/plain', type)
}

const ChartsPanel: FC<Props> = ({ onItemClick, type = 'menu' }) => {
  const handleClick = (item: ChartMenuItem) => {
    onItemClick?.(item)
  }
  return (
    <div className={prefix}>
      <div className={`${prefix}__group-list`}>
        {data.map(({ title, chilren }, index) => {
          return (
            <div className={`${prefix}__group`} key={index}>
              <div className={`${prefix}__title`}>{title}</div>
              <div className={`${prefix}__items`}>
                {chilren.map((item, index) => {
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
