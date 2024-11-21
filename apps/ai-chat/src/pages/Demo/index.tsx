import { FC } from 'react'
import searchDataMock from '@/mock/search2.json'
import { Table } from 'antd'
const Demo: FC = () => {
  return (
    <div>
      <Table
        columns={searchDataMock.data.dsl[1].props.columns}
        dataSource={searchDataMock.data.dsl[1].props.dataSource}
        style={{ maxWidth: '700px' }}
        scroll={{ x: 700 }}
      ></Table>
    </div>
  )
}
export default Demo
