import { FC } from 'react'
import { ColorSelect, UiSizeInput, FontStyleButton, TextAlign, PaletteSelect } from '@dash/setter'
import { Line, DualAxes } from '@ant-design/plots'
import { config as config2 } from '../BusinessDashboard/mock'
// 一个纬度，一个或者多个指标
const data = [
  {
    // 纬度
    type: '哈密瓜',
    // 量度
    0: 20, // 指标1
    1: 10 // 指标2
  },
  {
    // 纬度
    type: '橘子',
    // 量度
    0: 30,
    1: 12
  },
  {
    // 纬度
    type: '李子',
    // 量度
    0: 123,
    1: 44
  }
]
import './index.css'
const config = {
  data: {
    type: 'inline',
    value: data
    // transform: [
    //   {
    //     type: 'rename',
    //     year: '年',
    //     value: '数值'
    //   }
    // ]
  },
  xField: 'type',
  yField: '0'
}
const data2 = [
  { year: '1991', value: 3, count: 10 },
  { year: '1992', value: 4, count: 4 },
  { year: '1993', value: 3.5, count: 5 },
  { year: '1994', value: 5, count: 5 },
  { year: '1995', value: 4.9, count: 4.9 },
  { year: '1996', value: 6, count: 35 },
  { year: '1997', value: 7, count: 7 },
  { year: '1998', value: 9, count: 1 },
  { year: '1999', value: 13, count: 20 }
]

const config3 = {
  data: data2,
  xField: 'year',
  legend: true,
  children: [
    {
      type: 'line',
      yField: 'value',
      style: {
        stroke: '#5B8FF9',
        lineWidth: 2
      },
      axis: {
        y: {
          title: 'value',
          style: { titleFill: '#5B8FF9' }
        }
      }
    },
    {
      type: 'line',
      yField: 'count',
      style: {
        stroke: '#5AD8A6',
        lineWidth: 2
      },
      axis: {
        y: {
          position: 'right',
          title: 'count',
          style: { titleFill: '#5AD8A6' }
        }
      }
    }
  ]
}
const Test: FC = () => {
  return (
    <div>
      {/* <ColorSelect /> */}
      {/* <UiSizeInput />
      <FontStyleButton />
      <TextAlign /> */}
      <div>
        <DualAxes {...config3} width={550} height={300} />
      </div>
      <div className="test1">
        {/* <PaletteSelect
          colors={[
            'rgb(99, 178, 238)',
            'rgb(118, 218, 145)',
            'rgb(248, 203, 127)',
            'rgb(248, 149, 136)',
            'rgb(124, 214, 207)',
            'rgb(145, 146, 171)',
            'rgb(120, 152, 225)',
            'rgb(239, 166, 102)',
            'rgb(237, 221, 134)',
            'rgb(153, 135, 206)'
          ]}
        ></PaletteSelect> */}
      </div>
      {/* <Line {...config} /> */}
    </div>
  )
}
export default Test
