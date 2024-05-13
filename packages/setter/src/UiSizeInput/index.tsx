import { FC } from 'react'
import { InputNumber } from 'antd'
import { SvgIcon } from '@dash/icons'
import './index.less'
const prefix = 'db-ui-size-input'
export const UiSizeInput: FC = () => {
  return (
    <div className={prefix}>
      <InputNumber
        addonBefore={<SvgIcon size={12} name="pc" />}
        formatter={(value) => `${value}px`}
        parser={(value) => value!.replace('px', '')}
        // min={0}
        size="small"
      />
    </div>
  )
}
