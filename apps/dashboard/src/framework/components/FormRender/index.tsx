import Form, { FRProps } from 'form-render'
import { ChartTypeSelect, BackgroundSetter, ColorSelect, PaletteSetter } from '@dash/setter'

const FormRender = (props: Omit<FRProps, 'widgets'>) => (
  <Form
    displayType="row"
    column={1}
    labelCol={7}
    fieldCol={17}
    labelAlign="left"
    colon={false}
    widgets={{
      ChartTypeSelect,
      BackgroundSetter,
      ColorSelect,
      PaletteSetter
    }}
    {...props}
  />
)
export default FormRender
