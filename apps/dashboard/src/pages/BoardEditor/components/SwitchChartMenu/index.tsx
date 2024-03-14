import { FC, useState, useRef, useMemo } from 'react'
import classnames from 'classnames'
import { useHover } from 'ahooks'
import ChartsPanel from '../ChartsPanel'
import './index.less'
import type { ChartMenuItem } from '@/types'
const prefix = 'switch-chart-menu'
const SwitchChartMenu: FC = () => {
  const ref = useRef(null)
  const [curSelect, setCurSelect] = useState<ChartMenuItem | null>(null)
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
  console.log(isHover, 'isHover')
  const onItemClick = (item: ChartMenuItem) => {
    setCurSelect(item)
    setExpand(false)
  }
  return (
    <div className={classnames(prefix, { [`${prefix}--active`]: active })} ref={ref}>
      <span className={`${prefix}__text`}>切换图表</span>
      <div className={`${prefix}__select`} onClick={handleClick}>
        <div className={`${prefix}__icon-container`}>
          <i className={`global-component-icon ${prefix}__icon ${curSelect?.icon} light`}></i>
        </div>
        <div className={`${prefix}__name`}>{curSelect?.name}</div>
      </div>
      <div className={`${prefix}__menu-box`} style={{ display: active ? 'block' : 'none' }}>
        <ChartsPanel onItemClick={onItemClick} />
      </div>
    </div>
  )
}
export default SwitchChartMenu
