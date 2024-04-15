import { FC } from 'react'
import './index.less'
const prefix = 'db-palette-color'
type Props = {
  colors: string[]
}
export const PaletteColor: FC<Props> = ({ colors }) => {
  return (
    <div className={prefix}>
      {colors.map((item, index) => {
        return <div key={index} className={`${prefix}__item`} style={{ backgroundColor: item }}></div>
      })}
    </div>
  )
}
