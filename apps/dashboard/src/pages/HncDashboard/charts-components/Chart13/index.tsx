import { FC } from 'react'
import './index.less'
import { ScrollBoard } from '@jiaminghi/data-view-react'
const prefix = 'hnc-chart13'
const config = {
  header: ['投诉客户', '投诉客户', '投诉企业'],
  headerBGC: 'transparent',
  oddRowBGC: 'rgba(88, 98, 240, 0.43)',
  evenRowBGC: 'transparent',
  // columnWidth: [100, 350, 140],
  data: [
    ['理想', '04-1批次产品损坏、脱胶、起泡、翘曲、不符合规格、性能不达标等', '顺义分公司'],
    ['蔚来', '车灯交货时间延期时间较长，影响整车生产，包括交货延期', '北京分公司'],
    ['小鹏', '退换货流程繁琐、维修响应慢，服务有非常大的问题', '模块系统分公司'],
    ['比亚迪', '退换货流程繁琐、维修响应慢，服务有非常大的问题', '长沙分公'],
    ['哪吒', '在生产过程中存在环境污染、排放不达标等问题，被消费者投诉', '合肥分公司'],
    ['特斯拉', '货物丢失或损坏、错误的交货数量或错误的交货地址', '上海总部']
  ]
}
const Chart13: FC = () => {
  return (
    <div className={prefix}>
      <ScrollBoard config={config} style={{ width: '100%', height: '208px' }} />
    </div>
  )
}
export default Chart13
