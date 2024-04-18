import { FC } from 'react'
import { ColorSelect, UiSizeInput, FontStyleButton, TextAlign, PaletteSelect } from '@dash/setter'
import { Line } from '@ant-design/plots'
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
const Test: FC = () => {
  return (
    <div>
      {/* <ColorSelect /> */}
      <UiSizeInput />
      <FontStyleButton />
      <TextAlign />
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
      <Line {...config} />
    </div>
  )
}
export default Test
