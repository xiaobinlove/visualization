import { FC, useState } from 'react'
import { Button, Form } from 'antd'
import type { FormProps } from 'antd'
import { ChatComponent } from '@/types'
import { chatCardComponentMap } from '@/base'
type FieldComponent = {
  name: string
  label: string
} & ChatComponent
type Props = {
  fields: FieldComponent[]
  initialValues: FormProps['initialValues']
  onFinish?: FormProps['onFinish']
}
const ChatForm: FC<Props> = ({ fields, initialValues, onFinish }) => {
  const [flag, setFlag] = useState<boolean>(false)
  const handleFinish: FormProps['onFinish'] = (values) => {
    setFlag(true)
    onFinish?.(values)
  }
  return (
    <Form initialValues={initialValues} size="middle" onFinish={handleFinish}>
      {fields.map(({ name, label, props, component }) => {
        const Component = chatCardComponentMap[component]
        return (
          <Form.Item name={name} label={label}>
            <Component {...props} />
          </Form.Item>
        )
      })}
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" disabled={flag} className="ac-submit-bnt">
          确认
        </Button>
      </Form.Item>
    </Form>
  )
}
export default ChatForm
