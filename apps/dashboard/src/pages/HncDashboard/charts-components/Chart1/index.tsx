import { FC, useState, useMemo } from 'react'
import Indicator, { IndicatorProps } from '../../components/Indicator'
import { mockMap, MockType } from '../../mock'

import Modal1 from '../../components/Model1'
import './index.less'
type Item = IndicatorProps & { id: string }
const prefix = 'hnc-chart1'
const list1: Item[] = [
  {
    name: '营业收入',
    value: 7973832,
    percent: 10,
    yoy: 'up',
    id: '1'
  },
  {
    name: '利润总额',
    value: 105100,
    percent: 7,
    yoy: 'up',
    id: '2'
  },
  {
    name: '逾期应收款',
    value: 9973832,
    percent: 15,
    yoy: 'up',
    id: '3'
  },
  {
    name: '年度营收红线',
    value: 8273832,
    percent: 10.4,
    yoy: 'down',
    id: '4'
  }
]
const list2: Item[] = [
  {
    name: '当月产量',
    value: 63526,
    yoy: 'down',
    unit: false,
    id: '5'
  },
  {
    name: '成本',
    value: 1234324,
    percent: 10.41,
    yoy: 'up',
    id: '6'
  },
  {
    name: '回款',
    value: 243424,
    percent: 15,
    yoy: 'up',
    id: '7'
  },
  {
    name: '应收账款',
    value: 33236765,
    yoy: 'down',
    id: '8'
  },
  {
    name: '应付账款',
    value: 8273832,
    yoy: 'down',
    id: '9'
  }
]
const Chart1: FC = () => {
  const [open, setOpen] = useState(false)
  const [curModal, setCurModal] = useState<MockType>(MockType.dyyysr)
  const handleClick = (id: string) => {
    // 营业收入
    if (id === '1') {
      setCurModal(MockType.dyyysr)
      setOpen(true)
    }
    // 逾期应收款
    if (id === '3') {
      setCurModal(MockType.yqysk)
      setOpen(true)
    }
    // 当月产量
    if (id === '5') {
      setCurModal(MockType.dycl)
      setOpen(true)
    }
  }
  const obj = useMemo(() => {
    const { config, value, title, type } = mockMap[curModal]
    return {
      config,
      value,
      title,
      type
    }
  }, [curModal])
  const changeType = (type: MockType) => {
    setCurModal(type)
  }
  return (
    <div className={prefix}>
      <div className={`${prefix}__line1`}>
        {list1.map(({ name, percent, value, yoy, id }) => {
          return (
            <Indicator
              name={name}
              percent={percent}
              value={value}
              yoy={yoy}
              key={id}
              onClick={() => {
                handleClick(id)
              }}
            />
          )
        })}
      </div>
      <div className={`${prefix}__line2`}>
        {list2.map(({ name, percent, value, yoy, id }) => {
          return (
            <Indicator
              name={name}
              percent={percent}
              value={value}
              yoy={yoy}
              key={id}
              onClick={() => {
                handleClick(id)
              }}
            />
          )
        })}
      </div>
      <Modal1
        changeType={changeType}
        {...obj}
        open={open}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </div>
  )
}
export default Chart1
