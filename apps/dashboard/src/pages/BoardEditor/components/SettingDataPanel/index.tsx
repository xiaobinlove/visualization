import { FC, useState } from 'react'
import Draggable from '@/components/Draggable'
import { Select } from 'antd'
import SvgIcon from '@/components/SvgIcon'
import type { Field } from '../SettingFieldItem'
const prefix = 'db-setting-data-panel'

import './index.less'
const SettingDataPanel: FC = () => {
  const fieldList: Field[] = [{ name: 'length', label: '长度' }]
  return (
    <div className={prefix}>
      <Select options={[{ label: '图表基础数据', value: '1' }]} size="small" className={`${prefix}__data-select`} />
      <div className={`${prefix}__title`}>字段</div>
      {fieldList.map((item) => {
        return (
          <Draggable key={item.name} id={item.name} data={{ from: 'right', field: item }}>
            <div className={`${prefix}__item`}>
              <SvgIcon name="filed-number" className={`${prefix}__icon`} size={12} />
              <span className={`${prefix}__label`}>{item.label}</span>
            </div>
          </Draggable>
        )
      })}
    </div>
  )
}
export default SettingDataPanel
