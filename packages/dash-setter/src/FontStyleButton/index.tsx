import { FC, useState } from 'react'
import { Button } from 'antd'
import { SvgIcon } from '@dash/icons'
import classnames from 'classnames'
import './index.less'
const prefix = 'db-font-style-button'
type Value = { fontWeight?: string; fontStyle?: string }
type Props = {
  value?: Value
  onChange?: (val: Value) => void
}
const transfrom = ({ bold, italic }: { bold?: boolean; italic?: boolean }): Value => {
  const res: Value = {}
  if (bold) {
    res.fontWeight = 'bold'
  }
  if (italic) {
    res.fontStyle = 'italic'
  }
  return res
}
export const FontStyleButton: FC<Props> = ({ value, onChange }) => {
  const [bold, setBold] = useState<boolean>(Boolean(value?.fontWeight == 'bold'))
  const [italic, setItalic] = useState<boolean>(Boolean(value?.fontWeight == 'italic'))
  return (
    <div className="db-font-style-button">
      <Button
        size="small"
        className={classnames({ [`${prefix}--bold`]: bold })}
        icon={<SvgIcon name="font-weight" size={12} />}
        onClick={() => {
          setBold((bold) => {
            onChange?.(transfrom({ bold, italic }))
            return !bold
          })
        }}
      ></Button>
      <Button
        className={classnames({ [`${prefix}--italic`]: italic })}
        size="small"
        onClick={() => {
          setItalic((italic) => {
            onChange?.(transfrom({ bold, italic }))
            return !italic
          })
        }}
        icon={<SvgIcon name="font-italic" size={12} />}
      ></Button>
    </div>
  )
}
