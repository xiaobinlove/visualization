import { FC, useState, useRef, useMemo } from 'react'
import classnames from 'classnames'
import { useHover } from 'ahooks'
import ChartsPanel from '../../components/ChartsPanel'
import { useStore, curWidgetSelector, useSelector } from '@/store'
import { widgetMap } from '../../widgetMap.tsx'
import type { ChartMenuItem } from '@/types'
import './index.less'
const prefix = 'switch-chart-menu'
const SwitchChartMenu: FC = () => {
  const curWidget = useStore(curWidgetSelector)
  const { updateCurWidget } = useStore(useSelector(['updateCurWidget']))
  const ref = useRef()
  const { type } = curWidget
  const { icon, name } = widgetMap[type]
  const isHover = useHover(ref, {
    onLeave() {
      setExpand(false)
    }
  })
  const [expand, setExpand] = useState<boolean>(false)
  const active = useMemo(() => expand && isHover, [expand, isHover])
  const handleClick = () => {
    setExpand((expand) => !expand)
  }
  const onItemClick = (item: ChartMenuItem) => {
    updateCurWidget({
      type: item.type
    })
    setExpand(false)
  }
  return (
    <div className={classnames(prefix, { [`${prefix}--active`]: active })} ref={ref}>
      <span className={`${prefix}__text`}>切换图表</span>
      <div className={`${prefix}__select`} onClick={handleClick}>
        <div className={`${prefix}__icon-container`}>
          <i className={`global-component-icon ${prefix}__icon ${icon} light`}></i>
        </div>
        <div className={`${prefix}__name`}>{name}</div>
      </div>
      <div className={`${prefix}__menu-box`} style={{ display: active ? 'block' : 'none' }}>
        <ChartsPanel onItemClick={onItemClick} />
      </div>
    </div>
  )
}
export default SwitchChartMenu
