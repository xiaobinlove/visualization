import { FC } from 'react'
import { Form, InputNumber, Input } from 'antd'
export const YAxios: FC = () => {
  return (
    <>
      <Form.Item label="标题" name={['yAxios', 'title']}>
        <Input />
      </Form.Item>
      <Form.Item label="最大值" name={['yAxios', 'max']}>
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item label="最小值" name={['yAxios', 'min']}>
        <InputNumber min={0} />
      </Form.Item>
    </>
  )
}
