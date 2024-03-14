import { FC, useState } from 'react'
import Draggable from '@/components/Draggable'
import { Select } from 'antd'
import SvgIcon from '@/components/SvgIcon'
import { Field } from '@/types'
const prefix = 'db-setting-data-panel'

import './index.less'
const SettingDataPanel: FC = () => {
  const [fieldList, setFieldList] = useState<Field[]>([])
  const onDataSourceSelect = () => {
    setFieldList([
      { fieldName: 'height', fieldLabel: '身高', fieldType: 'number', id: 'f_321321312321' },
      { fieldName: 'weight', fieldLabel: '体重', fieldType: 'number', id: 'f_321321312322' },
      { fieldName: 'gender', fieldLabel: '性别', fieldType: 'text', id: 'f_321321312323' }
    ])
  }
  return (
    <div className={prefix}>
      <Select
        options={[{ label: '图表基础数据', value: '1' }]}
        size="small"
        onChange={onDataSourceSelect}
        placeholder="请选择数据源"
        className={`${prefix}__data-select`}
      />
      <div className={`${prefix}__title`}>字段</div>
      {fieldList.map((item) => {
        return (
          <Draggable key={item.fieldName} id={item.fieldName} data={{ from: 'right', field: item }}>
            <div className={`${prefix}__item`}>
              <SvgIcon name="filed-number" className={`${prefix}__icon`} size={12} />
              <span className={`${prefix}__label`}>{item.fieldLabel}</span>
            </div>
          </Draggable>
        )
      })}
    </div>
  )
}
export default SettingDataPanel
