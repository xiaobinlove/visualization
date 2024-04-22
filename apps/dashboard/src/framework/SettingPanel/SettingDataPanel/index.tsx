import { FC, useState } from 'react'
import Draggable from '@/components/Draggable'
import { Select, TreeSelect, Form } from 'antd'
import CodeMirror from '@uiw/react-codemirror'
import { json } from '@codemirror/lang-json'
import { useSelector, curWidgetSelector, useStore } from '@/store'
import { DataSource } from '@/types'
import PanelSelect from '@/framework/components/PanelSelect'
import SvgIcon from '@/components/SvgIcon'
import { dataSourceMap } from '@/mock/data.ts'
const prefix = 'db-setting-data-panel'
import './index.less'
import '../common.less'
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
const SettingDataPanel: FC = () => {
  const [dataSourceId, setDataSourceId] = useState<string | null>()
  const { dataSourceType = DataSource.实体 } = useStore(curWidgetSelector)
  const { updateCurWidget } = useStore(useSelector(['updateCurWidget']))
  const onDataSourceSelect = (val: string) => {
    setDataSourceId(val)
  }
  // 实体
  const entityRender = (
    <>
      <PanelSelect
        options={[
          { label: '工单数据', value: '1' },
          { label: '告警数据', value: '6' },
          { label: '资产数据', value: '2' },
          { label: '文档数据', value: '3' },
          { label: '资源数据', value: '4' },
          { label: '备品数据', value: '5' }
        ]}
        value={dataSourceId}
        onChange={onDataSourceSelect}
        placeholder="请选择实体"
        className={`${prefix}__entity-select`}
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
    </>
  )
  // 逻辑流
  const logicFlowRender = (
    <>
      <PanelSelect
        options={[
          { label: '逻辑流1', value: '逻辑流1' },
          { label: '逻辑流2', value: '逻辑流2' },
          { label: '逻辑流3', value: '逻辑流3' }
        ]}
        placeholder="请选择逻辑流"
        className={`${prefix}__entity-select`}
      />
    </>
  )
  const renderMap = {
    [DataSource.实体]: entityRender,
    [DataSource.逻辑流]: logicFlowRender,
    [DataSource.静态数据]: null
  }
  return (
    <div className={prefix}>
      <div className={`${prefix}__switch-data`}>
        <div className="db-common-switch-text">数据来源</div>
        <Select
          options={[
            { label: '实体', value: DataSource.实体 },
            { label: '逻辑流', value: DataSource.逻辑流 },
            { label: '静态数据', value: DataSource.静态数据 }
          ]}
          size="small"
          value={dataSourceType}
          onChange={(val) => {
            updateCurWidget({ dataSourceType: val })
          }}
          suffixIcon={<SvgIcon name="select-down" color="#777d8c" style={{ marginTop: '-6px' }} />}
          placeholder="请选择"
          className={`${prefix}__data-select`}
        />
      </div>
      {dataSourceType && renderMap[dataSourceType]}

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
    </div>
  )
}
export default SettingDataPanel
