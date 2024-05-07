import { FC } from 'react'
import CollectItemContainer from '../GridItemContainer'
import './index.less'
import { chatMap } from '@/mock/chart-bi'
import { DataTable } from '@dash/widgets'
const prefix = 'db-chart-collect'
const Collect: FC = () => {
  return (
    <div className={prefix}>
      <div style={{ width: '50%' }}>
        <CollectItemContainer
          title="应收款前十大的客户"
          contentRender={
            <div>
              <DataTable {...chatMap['用表格展示'].config} options={{ height: 350 }} />
            </div>
          }
        />
      </div>
    </div>
  )
}
export default Collect
