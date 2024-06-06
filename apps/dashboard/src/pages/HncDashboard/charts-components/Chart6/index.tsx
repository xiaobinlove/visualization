import { FC } from 'react'
import { Pie } from '@ant-design/plots'
import './index.less'
const prefix = 'hnc-chart6'
const Chart6: FC = () => {
  const config = {
    data: [
      { type: '响应速度', value: 27 },
      { type: '产品质量', value: 25 },
      { type: '服务态度', value: 18 },
      { type: '专业程度', value: 15 },
      { type: '创新能力', value: 10 }
    ],
    width: 256,
    height: 110,
    angleField: 'value',
    colorField: 'type',
    paddingRight: 50,
    innerRadius: 0.65,
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 0,
        itemLabelFontSize: 10,
        itemLabelFill: '#fff'
      },
      textStyle: {
        // 图例文字样式
        fill: '#fff' // 修改图例文字颜色
      }
    }
  }
  return (
    <div className={prefix}>
      <Pie {...config} autoFit={false} className={`${prefix}__pie`} />
    </div>
  )
}
export default Chart6
