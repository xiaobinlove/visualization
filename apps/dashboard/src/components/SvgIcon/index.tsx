import { useMemo, FC, MouseEventHandler } from 'react'

type SvgIconProps = {
  size?: string | number
  color?: string
  prefix?: string
  name: string
  className?: string
  onClick?: MouseEventHandler
}

/**
 * @Svg组件
 * @props  color   图标颜色
 * @props  name 图标名称--文件名称
 * @props  size  图标大小
 * @props  prefix 前缀 默认icon
 */

const SvgIcon: FC<SvgIconProps> = ({ color, name, size = 16, prefix = 'icon', className, onClick }) => {
  const symbolId = useMemo(() => `#${prefix}-${name}`, [prefix, name])
  return (
    <svg aria-hidden="true" width={size} height={size} fill={color} className={className} onClick={onClick}>
      <use href={symbolId} fill={color} />
    </svg>
  )
}
export default SvgIcon
