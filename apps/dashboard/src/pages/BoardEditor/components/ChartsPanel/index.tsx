import { FC } from 'react'
import './index.less'
import './charts-icon.less'
const prefix = 'hd-charts-panel'
import { DashComponentType } from '@/types'
const data = [
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
        type: DashComponentType.LINE_CHART
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
const ChartsPanel: FC = () => {
  return (
    <div className={prefix}>
      <div className={`${prefix}__group-list`}>
        {data.map(({ title, chilren }) => {
          return (
            <div className={`${prefix}__group`}>
              <div className={`${prefix}__title`}>{title}</div>
              <div className={`${prefix}__items`}>
                {chilren.map((item) => {
                  return (
                    <div className={`${prefix}__item `}>
                      <div className={`${prefix}__icon-container`}>
                        <div className={`${prefix}__icon component-type-icon ${item.icon} light`}></div>
                      </div>
                      <div className={`${prefix}__name`}>{item.name}</div>
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
