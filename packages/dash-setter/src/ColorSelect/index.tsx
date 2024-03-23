import { useState } from 'react'
import { CaretDownOutlined } from '@ant-design/icons'
import { ColorPicker } from 'antd'
import { FC } from 'react'
import './index.less'
import type { ColorPickerProps } from 'antd'
interface Props extends ColorPickerProps {}
export const ColorSelect: FC<Props> = ({ ...res }) => {
  const [open, setOpen] = useState(false)
  return (
    <ColorPicker
      className="db-color-select"
      defaultValue="#1677ff"
      open={open}
      size="small"
      onOpenChange={setOpen}
      showText={() => (
        <CaretDownOutlined
          rotate={open ? 180 : 0}
          style={{
            color: '#777d8d'
          }}
        />
      )}
      {...res}
    />
  )
}
