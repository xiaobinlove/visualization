import { FC, useState, useRef, useMemo } from 'react'
import classnames from 'classnames'
import { useHover } from 'ahooks'
import ChartsPanel from '@/framework/components/ChartsPanel'
import { useStore, curWidgetSelector, useSelector } from '@/store'
import { widgetsConfigMap, menuConfig } from '@/framework/base.ts'
import type { ChartMenuItem } from '@/types'
import SvgIcon from '@/components/SvgIcon'
import './index.less'
import '../common.less'
const prefix = 'switch-chart-menu'
const SwitchChartMenu: FC = () => {
  const curWidget = useStore(curWidgetSelector)
  const { updateCurWidget } = useStore(useSelector(['updateCurWidget']))
  const ref = useRef(null)
  const { type } = curWidget
  const { icon, name } = widgetsConfigMap[type]
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
      <span className="db-common-switch-text">切换图表</span>
      <div className={`${prefix}__select`} onClick={handleClick}>
        <SvgIcon size={20} name={icon} className={`${prefix}__icon ${icon}`} />
        <div className={`${prefix}__name`}>{name}</div>
        <SvgIcon name="select-down" color="#777d8c" style={{ marginTop: '-6px' }} />
      </div>
      <div className={`${prefix}__menu-box`} style={{ display: active ? 'block' : 'none' }}>
        <ChartsPanel data={menuConfig} onItemClick={onItemClick} />
      </div>
    </div>
  )
}
export default SwitchChartMenu
