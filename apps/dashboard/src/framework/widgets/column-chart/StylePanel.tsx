import { FC } from 'react'
import { Schema, useForm } from 'form-render'
import { getChartCardStyle } from '../common'
import { useMount } from 'ahooks'
import FormRender from '@/framework/components/FormRender'
const schema: Schema = {
  type: 'object',
  properties: {
    ...getChartCardStyle()
  }
}
const StylePanel: FC = () => {
  const form = useForm()
  useMount(() => {})
  const watch = {
    // '#': (v) => {
    //   console.log(v, 'v111')
    // }
  }
  return <FormRender form={form} schema={schema} watch={watch} />
}
export default StylePanel
