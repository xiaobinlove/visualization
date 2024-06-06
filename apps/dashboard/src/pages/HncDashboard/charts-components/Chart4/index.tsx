import { FC } from 'react'
import './index.less'
const prefix = 'hnc-chart4'
import { WordCloud } from '@ant-design/plots'
const Chart4: FC = () => {
  const config = {
    width: 257,
    height: 110,
    data: [
      {
        text: '专业',
        count: 11
      },

      {
        text: '质量好',
        count: 11
      },
      {
        text: '便捷',
        count: 12
      },
      {
        text: '方便',
        count: 11
      },
      {
        text: '美观',
        count: 10
      },
      {
        text: '质量好',
        count: 9
      },
      {
        text: '操作简单',
        count: 8
      }
    ],
    layout: { spiral: 'rectangular', fontSize: 14 },
    colorField: 'text'
  }
  return (
    <div className={prefix}>
      <WordCloud {...config} className={`${prefix}__word`} autoFit={false} />
    </div>
  )
}
export default Chart4
