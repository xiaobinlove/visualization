import { FC } from 'react'
import { Schema, useForm } from 'form-render'
import { getChartCardStyle } from '../common'
import { useStore, useSelector } from '@/store'
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
  useMount(() => {
    // form.setValues({})
  })
  const watch = {
    '#': (v) => {
      console.log(v, 'v')
    }
  }
  return <FormRender form={form} schema={schema} watch={watch} />
}
export default StylePanel
