import { FC } from 'react'
import { Form, Checkbox } from 'antd'
import type { CollapseProps, FormProps } from 'antd'
import { SetterCollapse, BackgroundSetter, ColorSelect } from '@dash/setter'
import { useSelector, useStore, curWidgetSelector } from '@/store'
export const StylePanel: FC = () => {
  const { updateCurWidget, styles } = useStore(useSelector(['updateCurWidget', 'styles']))
  const curWidget = useStore(curWidgetSelector)
  const initialValues = { background: curWidget.styles?.background || styles.card.background, title: curWidget.styles?.title || styles.card.title }
  const items: CollapseProps['items'] = [
    {
      label: '整体样式',
      key: '1',
      children: (
        <>
          <Form.Item name="background" label="背景">
            <BackgroundSetter palette={styles.theme.palette} />
          </Form.Item>
          <Form.Item label="标题颜色" name={['title', 'fontColor']}>
            <ColorSelect palette={styles.theme.palette} />
          </Form.Item>
          <Form.Item name={['title', 'hide']} getValueFromEvent={(e) => e.target.checked}>
            <Checkbox>隐藏标题</Checkbox>
          </Form.Item>
        </>
      )
    }
  ]
  const onValuesChange: FormProps['onValuesChange'] = (changedValue, values) => {
    console.log(values, 'values')
    updateCurWidget({ styles: values })
    // const themeType = changedValue.theme?.type as ThemeType | undefined
    // if (themeType) {
    //   updateStyles(themeMap[themeType])
    // } else {
    //   updateStyles(values)
    // }
  }

  return (
    <Form labelAlign="left" labelCol={{ span: 5 }} initialValues={initialValues} onValuesChange={onValuesChange}>
      <SetterCollapse items={items} defaultActiveKey={['1']} />
    </Form>
  )
}
