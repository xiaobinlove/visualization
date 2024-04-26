import { FC, useState } from 'react'
import { Radio, Upload } from 'antd'
import type { RadioChangeEvent, UploadProps } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import type { ColorSelectChange } from '../types'
import { ColorSelect } from '../ColorSelect'
import { Background } from '@dash/board'
import { PaletteType } from '@dash/board'
import './index.less'
const prefix = 'db-background-setter'
type Props = {
  value?: Background
  onChange?: (val: Background) => void
  palette?: PaletteType
}
export const BackgroundSetter: FC<Props> = ({ palette = PaletteType.CLASSIC, value = { type: 'color' }, onChange }) => {
  const [loading, setLoading] = useState(false)
  const handleTypeChange = (e: RadioChangeEvent) => {
    onChange?.({ ...value, type: e.target.value })
  }
  const handleUploadChange: UploadProps['onChange'] = ({ file }) => {
    const { status, response } = file
    if (status === 'removed') {
      onChange?.({ ...value, image: '' })
    }
    if (status === 'uploading') {
      setLoading(true)
    }
    if (status === 'done') {
      setLoading(false)
      const url = response?.data?.url
      url && onChange?.({ ...value, image: url })
    }
  }
  const handleColorChange: ColorSelectChange = (hex) => {
    onChange?.({ ...value, color: hex })
  }
  const defaultFileList = value.image ? [{ url: value.image, name: '', uid: value.image }] : []
  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>上传图片，5M以内</div>
    </button>
  )
  return (
    <div className={prefix}>
      <div className={`${prefix}__type`}>
        <Radio.Group defaultValue={value.type} onChange={handleTypeChange}>
          <Radio value="color">颜色</Radio>
          <Radio value="image">图片</Radio>
        </Radio.Group>
      </div>
      {value.type === 'color' && <ColorSelect palette={palette} defaultValue={value.color} onChange={handleColorChange} />}
      {value.type === 'image' && (
        <Upload defaultFileList={defaultFileList} onChange={handleUploadChange} maxCount={1} action="http://localhost:3000/upload" listType="picture-card">
          <div className={`${prefix}__upload`}> {value.image ? null : uploadButton}</div>
        </Upload>
      )}
    </div>
  )
}
