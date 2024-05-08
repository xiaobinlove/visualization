import { FC } from 'react'
import { Schema, useForm } from 'form-render'
import { xAxis, yAxis, legend, getChartType } from '../common'
import { useMount } from 'ahooks'
import FormRender from '@/framework/components/FormRender'
const schema: Schema = {
  type: 'object',
  properties: {
    ...getChartType('柱形图类型', [
      { name: '普通', type: '0' },
      { name: '堆积', type: '1' },
      { name: '百分比', type: '2' }
    ]),
    ...xAxis,
    ...yAxis,
    ...legend
  }
}
const ConfigPanel: FC = () => {
  const form = useForm()
  useMount(() => {
    form.setValues({})
  })
  return <FormRender form={form} schema={schema} />
}
export default ConfigPanel
