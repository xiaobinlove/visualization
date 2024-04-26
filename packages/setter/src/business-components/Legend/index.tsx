import { FC } from 'react'
import { Form, Switch } from 'antd'
const options = [
  {
    label: '底部',
    value: 'bottom'
  },
  {
    label: '顶部',
    value: 'bottom'
  }
]
export const Legend: FC = () => {
  return (
    <>
      <Form.Item label="显示图例" name={['legend', 'hide']}>
        <Switch defaultChecked />
      </Form.Item>
    </>
  )
}
