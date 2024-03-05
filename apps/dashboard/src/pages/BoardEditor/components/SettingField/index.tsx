import { FC, useState } from 'react'
import SettingFieldItem from '../SettingFieldItem'
import type { Field } from '../SettingFieldItem'
import './index.less'
const prefix = 'db-setting-field'
const SettingField: FC = () => {
  const [fieldList, setFieldList] = useState<Field[]>([
    { label: '重量', name: 'weight' },
    { label: '年龄', name: 'age' }
  ])
  const onFieldChange = (fieldList: Field[]) => {
    setFieldList(fieldList)
  }
  return (
    <div className={prefix}>
      <SettingFieldItem title="维度" key="1" fieldList={fieldList} onFieldChange={onFieldChange} />
      <SettingFieldItem title="度量" key="2" />
      <SettingFieldItem title="过滤器" key="3" />
    </div>
  )
}
export default SettingField
