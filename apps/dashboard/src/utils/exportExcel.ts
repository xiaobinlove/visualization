import { utils, writeFile } from 'xlsx'
export type ExportParams = {
  data: Record<string, unknown>[]
  fileName: string
}
export const exportExcel = ({ data, fileName }: ExportParams) => {
  const worksheet = utils.json_to_sheet(data)
  // 构造workbook
  const workbook = utils.book_new()
  utils.book_append_sheet(workbook, worksheet, 'Dates')
  // 默认使用json结构中的name和birthday作为表头，也可以使用下面代码自定义表头
  //   utils.sheet_add_aoa(worksheet, [['ID', '指标名称']], { origin: 'A1' })

  // 下载文件
  writeFile(workbook, `${fileName}.xlsx`, { compression: true })
}
