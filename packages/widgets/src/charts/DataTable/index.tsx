import { FC } from 'react'
import { SheetComponent, SheetComponentsProps } from '@antv/s2-react'
import { PivotSheet, S2DataConfig, S2Options, S2Theme } from '@antv/s2'
import { BaseWidget } from '../../types'
import '@antv/s2-react/dist/style.min.css'
import './index.less'
interface Props extends BaseWidget, SheetComponentsProps {
  dark: boolean
}
const cellTheme = {
  cell: {
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
export const DataTable: FC<Props> = ({ dataCfg, dark, ...res }) => {
  const themeCfg = dark ? { name: 'dark', theme: s2Theme } : {}
  themeCfg
  return (
    <div className="db-data-table">
      <SheetComponent dataCfg={dataCfg} adaptive={{ width: true, height: true }} sheetType="table" themeCfg={themeCfg} {...res} />
    </div>
  )
}
