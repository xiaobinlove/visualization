import { FC } from 'react'
import './index.less'
import { Line } from '@ant-design/plots'
import { getChartsTheme } from '@dash/widgets'
import { ThemeType } from '@/types'
import { values } from 'lodash-es'
const prefix = 'hnc-chart10'
const Chart10: FC = () => {
  // const config = {
  //   theme: {
  //     ...getChartsTheme(ThemeType.TECHNOLOGY, undefined, true)
  //   },
  //   data: [
  //     {
  //       name: '2024/01',
  //       营收数据: 232,
  //       成本数据: 100
  //     },
  //     {
  //       name: '2024/02',
  //       营收数据: 123,
  //       成本数据: 123
  //     },
  //     {
  //       name: '2024/03',
  //       营收数据: 413,
  //       成本数据: 300
  //     },
  //     {
  //       name: '2024/04',
  //       营收数据: 421,
  //       成本数据: 342
  //     },
  //     {
  //       name: '2024/05',
  //       营收数据: 234,
  //       成本数据: 23
  //     },
  //     {
  //       name: '2024/06',
  //       营收数据: 235,
  //       成本数据: 123
  //     },
  //     {
  //       name: '2024/07',
  //       营收数据: 234,
  //       成本数据: 20
  //     },
  //     {
  //       name: '2024/08',
  //       营收数据: 133,
  //       成本数据: 40
  //     },
  //     {
  //       name: '2024/09',
  //       营收数据: 324,
  //       成本数据: 100
  //     },
  //     {
  //       name: '2024/10',
  //       营收数据: 245,
  //       成本数据: 90
  //     },
  //     {
  //       name: '2024/11',
  //       营收数据: 234,
  //       成本数据: 97
  //     },
  //     {
  //       name: '2024/12',
  //       采购费用: 234,
  //       成本数据: 87
  //     }
  //   ],
  //   xField: 'name',
  //   legend: true,
  //   children: [
  //     {
  //       type: 'line',
  //       yField: '营收数据',
  //       style: {
  //         stroke: '#5B8FF9',
  //         lineWidth: 2
  //       }
  //     },
  //     {
  //       type: 'line',
  //       yField: '成本数据',
  //       style: {
  //         stroke: '#5AD8A6',
  //         lineWidth: 2
  //       },
  //       axis: {
  //         y: {
  //           position: 'right'
  //         }
  //       }
  //     }
  //   ]
  // }
  const data = [
    {
      name: '2024/01',
      type: '营收数据',
      value: 232,
      成本数据: 100
    },
    {
      name: '2024/02',
      type: '营收数据',
      value: 123,
      成本数据: 123
    },
    {
      name: '2024/03',
      type: '营收数据',
      value: 413,
      成本数据: 300
    },
    {
      name: '2024/04',
      type: '营收数据',
      value: 421,
      成本数据: 342
    },
    {
      name: '2024/05',
      type: '营收数据',
      value: 234,
      成本数据: 23
    },
    {
      name: '2024/06',
      type: '预测营收数据',
      value: 235,
      成本数据: 123
    },
    {
      name: '2024/07',
      type: '预测营收数据',
      value: 234,
      成本数据: 20
    },
    {
      name: '2024/08',
      type: '预测营收数据',
      value: 133,
      成本数据: 40
    },
    {
      name: '2024/09',
      type: '预测营收数据',
      value: 324,
      成本数据: 100
    },
    {
      name: '2024/10',
      type: '预测营收数据',
      value: 245,
      成本数据: 90
    },
    {
      name: '2024/11',
      type: '预测营收数据',
      value: 234,
      成本数据: 97
    },
    {
      name: '2024/12',
      type: '预测营收数据',
      value: 234,
      成本数据: 87
    }
  ]

  const config = {
    theme: {
      ...getChartsTheme(ThemeType.TECHNOLOGY, undefined, true)
    },
    data,
    xField: 'name',
    yField: 'value',
    colorField: 'type',
    style: {
      lineWidth: 2,
      lineDash: (data) => {
        if (data[0].type === '预测营收数据') return [4, 4]
      }
    }
  }

  return (
    <div className={prefix}>
      <Line {...config} />
    </div>
  )
}
export default Chart10
