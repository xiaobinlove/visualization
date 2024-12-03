import { FC } from 'react'
import { Table } from 'antd'
import type { TableProps } from 'antd'
const { Column } = Table
type Props = {
  columns: { title: string; dataIndex: string }[]
} & TableProps
const prefix = 'ac-chat-table'
const ChatTable: FC<Props> = ({ columns, dataSource, ...res }) => {
  const table = (
    <Table
      className={prefix}
      dataSource={dataSource}
      {...res}
      size="small"
      rowKey="_key"
      scroll={{ x: 'max-content' }}
      style={{ maxWidth: '700px' }}
      pagination={dataSource && dataSource?.length > 10 ? undefined : false}
    >
      {columns?.map(({ title, dataIndex }, index) => {
        return <Column key={index} title={title} dataIndex={dataIndex} ellipsis />
      })}
    </Table>
  )
  return <div className={prefix}>{table}</div>
}
export default ChatTable
