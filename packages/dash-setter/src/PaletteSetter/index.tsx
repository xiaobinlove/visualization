import { FC } from 'react'
import { PaletteSelect } from '../components/PaletteSelect'
import { paletteList, paletteMap } from '@dash/board'
import { PaletteSelectProps } from '../types'
type Props = Omit<PaletteSelectProps, 'options' | 'paletteMap'>
export const PaletteSetter: FC<Props> = (props) => {
  return <PaletteSelect options={paletteList} paletteMap={paletteMap} {...props} />
}
