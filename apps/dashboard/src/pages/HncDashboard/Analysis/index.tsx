import { FC, useState, useMemo } from 'react'
import { LeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import Modal1 from '../components/Model1'
import { mockMap, MockType } from '../mock'
import { getQueryParam } from '@/utils'
import './index.less'
import Footer from './Footer'
const prefix = 'hnc-analysis'
const Analysis: FC = () => {
  const type: MockType = getQueryParam('type') as MockType
  const [curType, setCurType] = useState<MockType>(type)
  const obj = useMemo(() => {
    const { title, value, config, type } = mockMap[curType]
    return { title, value, config, type }
  }, [curType])
  const [open, setOpen] = useState(true)
  const navigate = useNavigate()
  const back = () => {
    navigate(-1)
  }
  const openModal = (type: MockType) => {
    setCurType(type)
    setOpen(true)
  }
  return (
    <div className={prefix}>
      <div className={`${prefix}__header`}>
        <div onClick={back} className={`${prefix}__back`}>
          <LeftOutlined color="#43A2FF" />
          <span className={`${prefix}__bac-text`}>首页</span>
        </div>
      </div>
      <div className={`${prefix}__main`}>
        {type === MockType.dyyysr || MockType.dyzyywsr ? (
          <div className={`${prefix}__lixi`}>
            <div
              style={{ position: 'absolute', left: '360px', bottom: '170px', cursor: 'pointer', height: '48px', width: '160px', opacity: 0 }}
              onClick={() => {
                openModal(MockType.fxjsr)
              }}
            >
              当月非息净收入
            </div>
          </div>
        ) : (
          <div className={`${prefix}__lirun`}>
            <div
              style={{ position: 'absolute', left: '493px', top: '270px', cursor: 'pointer', height: '48px', width: '160px', opacity: 0 }}
              onClick={() => {
                openModal(MockType.yszkzzl)
              }}
            >
              应收账款周转率
            </div>
          </div>
        )}
        <Modal1 open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)} {...obj} />
      </div>
      <Footer />
    </div>
  )
}
export default Analysis
