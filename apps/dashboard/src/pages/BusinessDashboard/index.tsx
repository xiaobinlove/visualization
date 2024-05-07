import { FC } from 'react'
import ChatAiFloatButton from '@/components/ChatAiFloatButton'
import { IndicatorCard } from './components/IndicatorCard'
import Card from './components/Card'
import InnerCard from './components/InnerCard'
import { Column, Line, Area, Pie, DualAxes, Liquid } from '@ant-design/plots'
import { mock1, mock2, mock3, mock4, mock5, mock6, mock7, mock8, mock9, mock10 } from './mock'
import './index.less'
const prefix = 'db-business-dashboard'
const BusinessDashboard: FC = () => {
  return (
    <div className={prefix}>
      <ChatAiFloatButton />
      <div className={`${prefix}__grid-container`}>
        {/* <IndicatorCard title="期间营业总收入 /亿元" data={{ value: '797.71' }} ratio={-10.41} /> */}
        <div className={`${prefix}__title row-1`}>供应链经营分析</div>
        <div className={`${prefix}__indicator row-2`}>
          <IndicatorCard title="期间营业总收入 /亿元" value={797.71} valueStyle={{ color: '#4B6EEF' }} />
          <IndicatorCard title="期间利润 /亿元" value={105.1} valueStyle={{ color: '#4B6EEF' }} />
          <IndicatorCard title="销售净利润" suffix="%" value={14.03} valueStyle={{ color: '#4B6EEF' }} />
          <IndicatorCard title="销售毛利润" value={26.42} valueStyle={{ color: '#4B6EEF' }} />
          <IndicatorCard title="存货周转率 /次" value={1.31} valueStyle={{ color: '#FF8800' }} />
          <IndicatorCard title="存货周转天数 /天" value={64.99} valueStyle={{ color: '#4B6EEF' }} />
          <IndicatorCard title="应该收账周转天数 /天" value={64.99} valueStyle={{ color: '#4B6EEF' }} />
          <IndicatorCard title="流动比率" value={1.65} valueStyle={{ color: '#4B6EEF' }} />
          <IndicatorCard title="资产负债率" value={68.48} valueStyle={{ color: '#4B6EEF' }} />
        </div>
        <div className={`row-3`}>
          <Card title="净利润">
            <Column {...mock1} height={200} autoFit />
          </Card>
          <Card title="资产负债">
            <Line {...mock8} height={200} autoFit />
          </Card>
          <Card title="现金流量">
            <Area {...mock9} height={200} autoFit />
          </Card>
        </div>
        {/* 销售主题 */}
        <Card title="销售主题">
          <div className={`${prefix}__sale`}>
            <InnerCard title="前五大客户">
              <Pie height={250} autoFit {...mock2} />
            </InnerCard>
            <InnerCard title="销售合同">
              <DualAxes {...mock6} height={250} autoFit />
            </InnerCard>
            <InnerCard title="待回款合同" className={`${prefix}__contract-wrap`}>
              <div className={`${prefix}__contract`}></div>
            </InnerCard>
            <InnerCard title="客户管理">
              <Column {...mock3} height={250} />
            </InnerCard>
          </div>
        </Card>
        <div className="row-5">
          <Card title="采购主题">
            <div className={`${prefix}__purchase`}>
              <InnerCard title="前五供应商">
                <Pie {...mock4} height={250} autoFit />
              </InnerCard>
              <InnerCard title="产品采购订单金额 /亿">
                <Pie {...mock5} height={300} autoFit />
              </InnerCard>
              <InnerCard title="产需率">
                <Liquid {...mock7} autoFit height={250}></Liquid>
              </InnerCard>
              <InnerCard title="供需风险指标">2</InnerCard>
            </div>
          </Card>
          <Card title="生产主题">
            <div className={`${prefix}__production`}>
              <Line {...mock10} height={300} autoFit />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
export default BusinessDashboard
