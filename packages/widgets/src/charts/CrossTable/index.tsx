import { FC } from 'react'
import { SheetComponent } from '@antv/s2-react'
import { S2Theme } from '@antv/s2'
import { BaseWidget } from '../../types'
import '@antv/s2-react/dist/style.min.css'
import './index.less'
interface Props extends BaseWidget {
  dark: boolean
}

const cellTheme = {
  cell: {
    // backgroundColor: 'red',
    backgroundColorOpacity: 0.3,
    verticalBorderColorOpacity: 0.2,
    horizontalBorderColorOpacity: 0.4
  }
}
const s2Theme: S2Theme = {
  background: {
    opacity: 0.1
  },
  rowCell: cellTheme,
  colCell: cellTheme,
  dataCell: cellTheme,
  cornerCell: cellTheme
}
export const CrossTable: FC<Props> = ({ data, dark }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const themeCfg: any = dark ? { name: 'dark', theme: s2Theme } : {}
  return (
    <div className="db-cross-table">
      <SheetComponent
        dataCfg={data}
        adaptive={{ width: true, height: true }}
        themeCfg={themeCfg}
        options={{
          hierarchyType: 'grid',
          interaction: {
            copy: { enable: true },
            hiddenColumnFields: ['city']
            // withHeader: true
          }
        }}
      />
    </div>
  )
}
