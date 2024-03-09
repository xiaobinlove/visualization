import { FC } from 'react'
import { SetterCollapse } from '@dash/setter'
import type { CollapseProps } from 'antd'
import './index.less'
const prefix = 'db-config-func'

const ConfigFunc: FC = () => {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: <>11</>
    },
    {
      key: '2',
      label: 'This is panel header 2',
      children: <>22</>
    },
    {
      key: '3',
      label: 'This is panel header 3',
      children: <>3</>
    }
  ]
  return (
    <div className={prefix}>
      <SetterCollapse items={items} />
    </div>
  )
}
export default ConfigFunc
