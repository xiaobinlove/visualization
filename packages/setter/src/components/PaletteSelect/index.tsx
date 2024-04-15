import { FC } from 'react'
import { Select } from 'antd'
import type { SelectProps } from 'antd'
import { PaletteColor } from './components/PaletteColor'
import './index.less'
const prefix = 'db-palette-select'
import type { PaletteSelectProps } from '../../types'
export const PaletteSelect: FC<PaletteSelectProps> = ({ value, onChange, paletteMap, options }) => {
  const labelRender: SelectProps['labelRender'] = (props) => {
    const value = props.value as string
    const colors = paletteMap[value]
    return (
      <div className={`${prefix}__input-label`}>
        <PaletteColor colors={colors} />
      </div>
    )
  }
  const optionRender: SelectProps['optionRender'] = (oriOpton) => {
    const value = oriOpton.value as string
    const colors = paletteMap[value]
    return (
      <div className={`${prefix}__option`}>
        <div style={{ width: '100%' }}>
          <PaletteColor colors={colors} />
        </div>
        <div className={`${prefix}__label`}>{oriOpton.label}</div>
      </div>
    )
  }
  return (
    <div className={prefix}>
      <Select
        className={`${prefix}__select`}
        defaultValue={value}
        dropdownStyle={{ width: '280px' }}
        options={options}
        labelRender={labelRender}
        optionRender={optionRender}
        onChange={onChange}
      />
    </div>
  )
}
