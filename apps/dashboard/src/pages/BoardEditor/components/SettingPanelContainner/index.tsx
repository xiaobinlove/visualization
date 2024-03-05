import { ReactNode, FC, useState } from 'react'
import SvgIcon from '@/components/SvgIcon'
import classnames from 'classnames'
import { Typography } from 'antd'
import './index.less'

const prefix = 'db-setting-panel-containner'
type Props = {
  children: ReactNode
  configList: { key: string; label: ReactNode }[]
  closedTabClick: (key: string) => void
  width: string
  title: string
  titleEditable?: boolean
}
const SettingPanelContainner: FC<Props> = ({ children, configList = [], closedTabClick, width, title, titleEditable = false }) => {
  const [isExpand, setExpand] = useState<boolean>(true)
  const onCollaseClick = () => {
    setExpand((val) => !val)
  }
  return (
    <div className={prefix} style={{ width: isExpand ? width : '40px' }}>
      <div className={`${prefix}__title`}>
        {isExpand && (
          <Typography.Paragraph editable={titleEditable} style={{ margin: 0 }}>
            {title}
          </Typography.Paragraph>
        )}
        <SvgIcon
          name="shouqidaohang"
          className={classnames(`${prefix}__collapse-icon`, { [`${prefix}__collapse-icon--collapsing`]: !isExpand })}
          onClick={onCollaseClick}
        />
      </div>
      {isExpand && children}
      {!isExpand && (
        <div className={`${prefix}__closed-config`}>
          {configList.map((item) => {
            return (
              <div
                className={`${prefix}__closed-item`}
                onClick={() => {
                  setExpand(true)
                  closedTabClick(item.key)
                }}
              >
                {item.label}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
export default SettingPanelContainner
