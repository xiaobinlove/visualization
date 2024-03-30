import { FC, useState } from 'react'
import Draggable from '@/components/Draggable'
import { Select } from 'antd'
import SvgIcon from '@/components/SvgIcon'
import { dataSourceMap } from '@/mock/data.ts'
const prefix = 'db-setting-data-panel'
import './index.less'
const SettingDataPanel: FC = () => {
  const [dataSourceId, setDataSourceId] = useState<string>('')
  const onDataSourceSelect = (val: string) => {
    setDataSourceId(val)
  }
  return (
    <div className={prefix}>
      <Select
        options={[
          { label: '工单数据', value: '1' },
          { label: '告警数据', value: '6' },
          { label: '资产数据', value: '2' },
          { label: '文档数据', value: '3' },
          { label: '资源数据', value: '4' },
          { label: '备品数据', value: '5' }
        ]}
        value={dataSourceId}
        size="small"
        onChange={onDataSourceSelect}
        placeholder="请选择数据源"
        className={`${prefix}__data-select`}
      />
      <div className={`${prefix}__title`}>字段</div>
      {dataSourceId &&
        dataSourceMap[dataSourceId].map((item) => {
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
