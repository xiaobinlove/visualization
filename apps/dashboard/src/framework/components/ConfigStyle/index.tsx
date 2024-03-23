import { FC } from 'react'
import { SetterCollapse } from '@dash/setter'
import type { CollapseProps } from 'antd'
const prefix = 'db-config-style'

const ConfigStyle: FC = () => {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: '整体样式',
      children: <>11</>
    },
    {
      key: '2',
      label: '图表配色',
      children: <>22</>
    }
  ]
  return (
    <div className={prefix}>
      <SetterCollapse items={items} />
    </div>
  )
}
export default ConfigStyle
