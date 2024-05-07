import { FC } from 'react'
import CollectItemContainer from '../GridItemContainer'
import './index.less'
import { chatMap } from '@/mock/chart-bi'
import { LineChart } from '@dash/widgets'
const prefix = 'db-chart-collect'
const Collect: FC = () => {
  return (
    <div className={prefix}>
      <div style={{ width: '50%' }}>
        <CollectItemContainer
          title="2024年蔚来销售额预测"
          contentRender={
            <div style={{ height: '240px' }}>
              <LineChart {...chatMap['预测今年的销售量'].config} />
            </div>
          }
        />
      </div>
    </div>
  )
}
export default Collect
