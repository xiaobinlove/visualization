import { FC } from 'react'
import { SheetComponent } from '@antv/s2-react'
import './index.less'
import '@antv/s2-react/dist/style.min.css'
type Props = {
  data: any
}
export const DataTable: FC<Props> = ({ data }) => {
  const s2Options = {}
  return (
    <div className="db-data-table">
      <SheetComponent dataCfg={data} adaptive={{ width: true, height: true }} options={s2Options} />
    </div>
  )
}
