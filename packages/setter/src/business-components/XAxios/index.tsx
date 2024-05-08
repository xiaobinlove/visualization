import { FC } from 'react'
import { Form, Select } from 'antd'
const options = [
  {
    label: '横向显示',
    value: 0
  },
  {
    label: '竖向显示',
    value: 90
  },
  {
    label: '左斜显示',
    value: -25
  },
  {
    label: '右斜显示',
    value: 25
  }
]
export const XAxios: FC = () => {
  return (
    <Form.Item label="标签文字" name={['xAxios', 'labelTransform']}>
      <Select defaultValue={options[0].value} options={options}></Select>
    </Form.Item>
  )
}
