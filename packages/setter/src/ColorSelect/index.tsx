import { useState } from 'react'
// import { CaretDownOutlined } from '@ant-design/icons'
import { ColorPicker } from 'antd'
import { FC } from 'react'
import './index.less'
import type { ColorPickerProps } from 'antd'
import type { ColorSelectChange } from '../types'
import type { PaletteType } from '@dash/board'
import { paletteMap } from '@dash/board'
interface Props extends Omit<ColorPickerProps, 'onChange'> {
  onChange?: ColorSelectChange
  palette: PaletteType
}
export const ColorSelect: FC<Props> = ({ onChange, palette, ...res }) => {
  console.log(paletteMap[palette], 'paletteMap[palette]1')
  console.log(palette, 'palette')

  const [open, setOpen] = useState(false)
  return (
    <ColorPicker
      className="db-color-select"
      open={open}
      size="small"
      presets={[{ label: '推荐颜色', colors: paletteMap[palette] }]}
      onOpenChange={setOpen}
      onChange={(_, hex) => {
        onChange?.(hex)
      }}
      // showText={() => (
      //   <CaretDownOutlined
      //     rotate={open ? 180 : 0}
      //     style={{
      //       color: '#777d8d'
      //     }}
      //   />
      // )}
      {...res}
    />
  )
}
