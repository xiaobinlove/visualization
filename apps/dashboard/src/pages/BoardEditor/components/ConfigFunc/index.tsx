import { FC } from 'react'
import { SetterCollapse } from '@dash/setter'
import type { CollapseProps } from 'antd'
const prefix = 'db-config-func'

const ConfigFunc: FC = () => {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: '坐标x轴',
      children: <>11</>
    },
    {
      key: '2',
      label: '坐标y轴',
      children: <>22</>
    },
    {
      key: '3',
      label: '图例',
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
