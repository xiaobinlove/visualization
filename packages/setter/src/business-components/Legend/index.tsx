import { FC } from 'react'
import { Form, Switch } from 'antd'
export const Legend: FC = () => {
  return (
    <>
      <Form.Item label="显示图例" name={['legend', 'hide']}>
        <Switch defaultChecked />
      </Form.Item>
    </>
  )
}
