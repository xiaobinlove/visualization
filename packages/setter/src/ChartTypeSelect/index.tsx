import { FC } from 'react'
import { Radio } from 'antd'
const prefix = 'db-chart-type-select'
interface Props {
  options: { name: string; icon?: string; type: string }[]
  value?: string
  onChange?: (type: string) => void
}
export const ChartTypeSelect: FC<Props> = ({ options, onChange, value, ...res }) => {
  return (
    <div className={prefix}>
      <Radio.Group
        optionType="button"
        buttonStyle="solid"
        value={value}
        defaultValue={options[0].type}
        options={options.map((item) => ({ label: item.name, value: item.type }))}
        onChange={(e) => {
          onChange?.(e.target.value)
        }}
        {...res}
      ></Radio.Group>
    </div>
  )
}
