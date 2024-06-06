import { FC } from 'react'
import './index.less'
import { ScrollBoard } from '@jiaminghi/data-view-react'
const prefix = 'hnc-chart11'
const config = {
  headerBGC: 'transparent',
  oddRowBGC: 'rgba(88, 98, 240, 0.43)',
  evenRowBGC: 'transparent',
  header: ['产品', '销售额/万元', '目标达成', '市场份额'],
  // columnWidth: [140, 140, 140, 140],
  data: [
    ['产品A', '2200', '21%', '10%'],
    ['产品B', '1000', '61%', '12%'],
    ['产品C', '4000', '23%', '29%'],
    ['产品D', '5000', '45%', '23%'],
    ['产品E', '5000', '23%', '53%'],
    ['产品F', '7000', '15%', '23%']
  ]
}
const Chart11: FC = () => {
  return (
    <div className={prefix}>
      <ScrollBoard config={config} style={{ width: '100%', height: '208px' }} />
    </div>
  )
}
export default Chart11
