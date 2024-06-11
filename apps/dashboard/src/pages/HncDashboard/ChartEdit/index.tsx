import { FC, useMemo } from 'react'
import { LeftOutlined } from '@ant-design/icons'
import { Column } from '@ant-design/plots'
import { useNavigate } from 'react-router-dom'
import { Tag } from 'antd'
import { MockType, mockMap } from '../mock'
import { getQueryParam } from '@/utils'
const prefix = 'hnc-chart-edit'
import './index.less'
function getImageUrl(path: string) {
  return new URL(path, import.meta.url).href
}
const ChartEdit: FC = () => {
  const navigate = useNavigate()
  const type = getQueryParam('type') as MockType
  const { x, y, config, title } = useMemo(() => {
    const { config, x = [], y = [], title } = mockMap[type]
    return {
      x,
      config,
      y,
      title
    }
  }, [type])
  const back = () => {
    navigate(-1)
  }
  return (
    <div className={prefix}>
      <div className={`${prefix}__header`}>
        <div onClick={back} className={`${prefix}__back`}>
          <LeftOutlined color="#43A2FF" />
          <span className={`${prefix}__bac-text`}>{title}分析</span>
        </div>
      </div>
      <div className={`${prefix}__content`}>
        <div className={`${prefix}__left`}>
          <img src={getImageUrl('../image/left.png')} />
        </div>
        <div className={`${prefix}__main`}>
          <div className={`${prefix}__item`}>
            {x.map((item) => {
              return <Tag>{item}</Tag>
            })}
          </div>
          <div className={`${prefix}__item`}>
            {y.map((item) => {
              return <Tag>{item}</Tag>
            })}
          </div>
          <div className={`${prefix}__chart`}>
            <Column {...config} autoFit />
          </div>
        </div>
        <div className={`${prefix}__right`}>
          <img src={getImageUrl('../image/right.png')} />
        </div>
      </div>
    </div>
  )
}
export default ChartEdit
