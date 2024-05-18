import { FC, useState, useMemo } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { json } from '@codemirror/lang-json'
import { widgetsConfigMap } from '@/framework/base'
import './index.less'
const prefix = 'db-dsl-demo'
const DslDemo: FC = () => {
  const [dslStr, setDslStr] = useState('{}')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dsl: any = useMemo(() => {
    let dsl = {}
    try {
      dsl = JSON.parse(dslStr)
    } catch (err) {
      //dd
    }
    return dsl
  }, [dslStr])
  const handleChange = (val: string) => {
    setDslStr(val)
  }
  const { type, ...res } = dsl
  console.log(dsl, 'csafsf')
  const ChartComponent = type ? widgetsConfigMap[type].component : () => <div></div>
  return (
    <div className={prefix}>
      <div className={`${prefix}__chart`}>
        <ChartComponent {...res} />
      </div>
      <div className={`${prefix}__dsl`}>
        <CodeMirror height="400px" basicSetup={{}} value={dslStr} onChange={handleChange} extensions={[json()]} />
      </div>
    </div>
  )
}
export default DslDemo
