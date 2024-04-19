import { FC, useState } from 'react'
import Draggable from '@/components/Draggable'
import { Select, TreeSelect, Form } from 'antd'
import CodeMirror from '@uiw/react-codemirror'
import { json } from '@codemirror/lang-json'
import SvgIcon from '@/components/SvgIcon'
import { dataSourceMap } from '@/mock/data.ts'
const prefix = 'db-setting-data-panel'
import './index.less'
import '../common.less'
enum DataSource {
  实体 = '01212',
  逻辑流 = '132131',
  静态数据 = '213123'
}
const data = `{
  xField: 'year',
  yField: 'value',
  data: [
    {
      year: '1991',
      value: 3
    },
    {
      year: '1992',
      value: 4
    },
    {
      year: '1993',
      value: 3.5
    },
    {
      year: '1994',
      value: 5
    },
    {
      year: '1995',
      value: 4.9
    },
    {
      year: '1996',
      value: 6
    },
    {
      year: '1997',
      value: 7
    },
    {
      year: '1998',
      value: 9
    },
    {
      year: '1999',
      value: 13
    }
  ]
}`
const treeData = [
  {
    value: DataSource.实体,
    title: '实体数据',
    selectable: false,
    children: [
      { title: '工单数据', value: '1' },
      { title: '告警数据', value: '6' },
      { title: '资产数据', value: '2' },
      { title: '文档数据', value: '3' },
      { title: '资源数据', value: '4' },
      { title: '备品数据', value: '5' }
    ]
  },
  {
    value: DataSource.逻辑流,
    title: '逻辑流数据',
    selectable: false,
    children: [
      { title: '逻辑流1', value: '12' },
      { title: '逻辑流2', value: '22' },
      { title: '逻辑流3', value: '33' }
    ]
  },
  {
    value: DataSource.静态数据,
    title: '静态数据'
  }
]
const SettingDataPanel: FC = () => {
  const [dataSourceId, setDataSourceId] = useState<string | null>(null)
  const onDataSourceSelect = (val: string) => {
    setDataSourceId(val)
  }
  return (
    <div className={prefix}>
      {/* <TreeSelect treeDefaultExpandAll listHeight={400} placeholder="请选择数据源" size="small" treeData={treeData} className={`${prefix}__data-source`} /> */}
      <div className={`${prefix}__switch-data`}>
        <div className="db-common-switch-text">切换数据</div>
        <Select
          options={[
            { label: '实体数据', value: DataSource.实体 },
            { label: '逻辑流', value: DataSource.逻辑流 },
            { label: '静态数据', value: DataSource.静态数据 }
          ]}
          size="small"
          suffixIcon={<SvgIcon name="select-down" color="#777d8c" style={{ marginTop: '-6px' }} />}
          placeholder="请选择"
          className={`${prefix}__data-select`}
        />
      </div>
      {/* <Select
        options={[
          { label: '实体', value: DataSource.实体 },
          { label: '逻辑流', value: DataSource.逻辑流 },
          { label: '静态数据', value: DataSource.静态数据 }
        ]}
        size="small"
        placeholder="请选择数实体"
        className={`${prefix}__data-select`}
      /> */}
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
        placeholder="请选择实体"
        suffixIcon={<SvgIcon name="select-down" style={{ marginTop: '-6px' }} color="rgba(255, 255, 255, 0.75)" />}
        className={`${prefix}__entity-select`}
      />
      <div className={`${prefix}__title`}>字段</div>
      {/* <Form.Item label="数据内容">
        <CodeMirror
          height="600px"
          style={{ margin: '0 -10px', border: '1px solid #e6e6e6' }}
          extensions={[json()]}
          value={data}
          basicSetup={{
            tabSize: 2,
            lineNumbers: false,
            foldGutter: false
          }}
        />
      </Form.Item> */}

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
