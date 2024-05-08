import { FC } from 'react'
import { Tabs, Form, Radio, Select } from 'antd'
import type { CollapseProps, FormProps, RadioChangeEvent } from 'antd'
import { SetterCollapse, BackgroundSetter, ColorSelect, PaletteSetter } from '@dash/setter'
import { useSelector, useStore } from '@/store'
import { themeOptions, themeMap } from '@/framework/theme'
import { useMount } from 'ahooks'
import { ThemeType } from '@/types'
import './index.less'
const prefix = 'global-setting-panel'
const alignOption = [
  {
    label: '默认',
    value: ''
  },
  {
    label: '左对齐',
    value: 'left'
  },
  {
    label: '居中对齐',
    value: 'center'
  }
]
const GlobalSettingPanel: FC = () => {
  const { styles, updateStyles, resetWidgetStyles } = useStore(useSelector(['styles', 'updateStyles', 'resetWidgetStyles']))
  const [form] = Form.useForm()
  useMount(() => {
    setTimeout(() => {
      // TODO: 不加这个初始化无法生效
      form.resetFields()
    })
  })
  const items: CollapseProps['items'] = [
    {
      label: '系统主题',
      key: '1',
      children: (
        <Form.Item noStyle name={['theme', 'type']} getValueFromEvent={(e: RadioChangeEvent) => e.target.value}>
          <Radio.Group optionType="button" options={themeOptions} />
        </Form.Item>
        // <Form.Item noStyle name={['theme', 'type']} getValueFromEvent={(e: RadioChangeEvent) => e.target.value}>
        //   <Radio.Group value={styles.theme.type} optionType="button" options={themeOptions} />
        // </Form.Item>
      )
    },
    {
      label: '仪表盘整体',
      key: '2',
      children: (
        <Form.Item name="background" label="背景">
          <BackgroundSetter palette={styles.theme.palette} />
        </Form.Item>
      )
    },
    {
      label: '图表整体',
      key: '3',
      children: (
        <>
          <Form.Item name={['card', 'background']} label="背景">
            <BackgroundSetter palette={styles.theme.palette} />
          </Form.Item>
          <Form.Item label="标题颜色" name={['card', 'title', 'color']}>
            <ColorSelect palette={styles.theme.palette} />
          </Form.Item>
        </>
      )
    },
    {
      label: '配色方案',
      key: '4',
      children: (
        <>
          <Form.Item label="色板" name={['theme', 'palette']}>
            <PaletteSetter />
          </Form.Item>
        </>
      )
    },
    {
      label: '表格类图表',
      key: '5',
      children: (
        <>
          <Form.Item label="主题色" name={['table', 'themeColor']}>
            <ColorSelect palette={styles.theme.palette} />
          </Form.Item>
          <Form.Item label="表头文字" name={['table', 'head', 'color']}>
            <ColorSelect palette={styles.theme.palette} />
          </Form.Item>
          <Form.Item label="内容文字" name={['table', 'body', 'color']}>
            <ColorSelect palette={styles.theme.palette} />
          </Form.Item>
          <Form.Item label="对齐方式" name={['table', 'textAlign']}>
            <Select options={alignOption} />
          </Form.Item>
        </>
      )
    }
  ]
  const onValuesChange: FormProps['onValuesChange'] = (changedValue, values) => {
    const themeType = changedValue.theme?.type as ThemeType | undefined
    if (themeType) {
      updateStyles(themeMap[themeType])
      // 重置每个widget样式
      resetWidgetStyles()
      setTimeout(() => {
        form.resetFields()
      })
    } else {
      updateStyles(values)
    }
  }

  const children = (
    <Form labelAlign="left" labelCol={{ span: 6 }} initialValues={styles} onValuesChange={onValuesChange} form={form} colon={false}>
      <SetterCollapse items={items} defaultActiveKey={['1', '2', '3', '4', '5']} />
    </Form>
  )
  return (
    <div className={prefix}>
      <Tabs items={[{ key: '1', label: '仪表盘样式', children }]} centered />
    </div>
  )
}
export default GlobalSettingPanel
