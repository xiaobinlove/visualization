import { FC } from 'react'
import { ColorSelect, UiSizeInput, FontStyleButton, TextAlign, PaletteSelect } from '@dash/setter'
import './index.css'
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
    </div>
  )
}
export default Test
