import { FC } from 'react'
import { Form, Checkbox, Upload, Select } from 'antd'
import type { CollapseProps, FormProps } from 'antd'
import { SetterCollapse } from '@dash/setter'
import { useSelector, useStore, curWidgetSelector } from '@/store'
const options = [
  {
    label: '适配区域',
    value: '1'
  },
  {
    label: '居左平铺(图片不缩放，居左显示)',
    value: '2'
  },
  {
    label: '居中显示(图片不缩放，居中显示)',
    value: '3'
  },
  {
    label: '裁剪以充满区域(比例不变，图片缩放)',
    value: '4'
  },
  {
    label: '拉伸以充满区域(比例不变，图片缩放)',
    value: '5'
  }
]
const StylePanel: FC = () => {
  const { updateCurWidget, styles } = useStore(useSelector(['updateCurWidget', 'styles']))
  const curWidget = useStore(curWidgetSelector)
  const initialValues = { background: curWidget.styles?.background || styles.card.background, title: curWidget.styles?.title || styles.card.title }
  const items: CollapseProps['items'] = [
    {
      label: '样式',
      key: '1',
      children: (
        <>
          <Form.Item noStyle>
            <Upload />
          </Form.Item>
          <Form.Item label="显示方式">
            <Select options={options} />
          </Form.Item>
          <Form.Item label="跳转链接">
            <Checkbox>隐藏标题</Checkbox>
          </Form.Item>
        </>
      )
    }
  ]
  const onValuesChange: FormProps['onValuesChange'] = (changedValue, values) => {
    updateCurWidget({ styles: values })
  }

  return (
    <Form labelAlign="left" labelCol={{ span: 5 }} initialValues={initialValues} onValuesChange={onValuesChange}>
      <SetterCollapse items={items} defaultActiveKey={['1']} />
    </Form>
  )
}
export default StylePanel
