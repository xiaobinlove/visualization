import { FC, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { json } from '@codemirror/lang-json'
import './index.less'
type Props = {
  value?: string
  // defaultValue?: string
  onChange?: (val: string) => void
}
const prefix = 'db-static-data'
const SettingStaticData: FC<Props> = ({ value, onChange }) => {
  const [dslStr, setDslStr] = useState(value || '')
  const handleChange = (val: string) => {
    setDslStr(val)
    onChange?.(val)
  }
  return (
    <div className={prefix}>
      <CodeMirror
        className={`${prefix}__code`}
        height="100%"
        basicSetup={{ tabSize: 2, foldGutter: false }}
        value={dslStr}
        onChange={handleChange}
        extensions={[json()]}
      />
    </div>
  )
}
export default SettingStaticData
