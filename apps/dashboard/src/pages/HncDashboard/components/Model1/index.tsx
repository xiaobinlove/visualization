import { Modal, ModalProps, Popover, Button } from 'antd'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MockType } from '../../mock'
import { EyeOutlined } from '@ant-design/icons'
import styles from './index.module.less'
import './chat-modal.less'
import { Column, DualAxes } from '@ant-design/plots'
function getImageUrl(path: string) {
  return new URL(path, import.meta.url).href
}
const prefix = 'hnc-chat-modal'
const list = [
  {
    name: '70次查看',
    users: ['李', '林', '王', '范'],
    colors: ['#4B6EEF', '#00CAAA', '#6E48F7', '#8F8FFF']
  },
  {
    name: '23次转发',
    users: ['李', '林', '王', '范'],
    colors: ['#4B6EEF', '#00CAAA', '#6E48F7', '#8F8FFF']
  },
  {
    name: '50次收藏',
    users: ['李', '林', '王', '范'],
    colors: ['#4B6EEF', '#00CAAA', '#6E48F7', '#8F8FFF']
  }
]
interface Props extends ModalProps {
  type: MockType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config: any
  value: number
  title: string
  changeType?: (type: MockType) => void
}
const Modal1: FC<Props> = ({ config = {}, type, title, value, changeType, ...res }) => {
  const Chart = type === MockType.yszkzzl ? DualAxes : Column
  const [chatOpen, setChatOpen] = useState(false)
  const [popOpen, setPopOpen] = useState(false)
  const navigate = useNavigate()
  const goToAtlas = () => {
    navigate(`/hnc1?type=${type}`)
  }
  const goToChartEdit = () => {
    navigate(`/chart-edit?type=${type}`)
  }
  const handleClick = () => {
    changeType?.(MockType.dyzyywsr)
    setPopOpen(false)
  }
  const handleOpenChange = (visible: boolean) => {
    setPopOpen(visible)
  }
  const render = () => {
    return (
      <div style={{ color: '#595959', fontSize: '14px', position: 'relative' }}>
        <img src={getImageUrl('../../image/zhibiao-pop.png')} />
        {type === MockType.dyyysr ? (
          <>
            <div style={{ left: '31px', top: '117px', position: 'absolute' }}>当月营业收入</div>
            <Button type="link" style={{ left: '179px', top: '80px', position: 'absolute' }} onClick={handleClick}>
              当月主营业务收入
            </Button>
            <Button type="link" style={{ left: '179px', top: '146px', position: 'absolute' }}>
              当月其他业务收入
            </Button>
          </>
        ) : (
          <>
            <div style={{ left: '31px', top: '117px', position: 'absolute' }}>逾期应收款</div>
            <Button type="link" style={{ left: '179px', top: '80px', position: 'absolute' }} onClick={handleClick}>
              应收账款总额
            </Button>
            <Button type="link" style={{ left: '179px', top: '146px', position: 'absolute' }}>
              未收回应收账款
            </Button>
          </>
        )}

        <div className={`${prefix}__atlas`} onClick={goToAtlas}>
          点击进入
        </div>
      </div>
    )
  }
  return (
    <>
      <Modal {...res} title={title} width={816} footer={null}>
        <div className={styles.container2}>
          <img className={styles.divider} src={getImageUrl('./images/img_2.png')} />
          <div className={styles.wrapper4}>
            <span className={styles.title1}>{value}</span>
            <span className={styles.meta}>最近更新时间：2024-02-02 12:00:00</span>
          </div>
          <div className={styles.wrapper5}>
            <span className={styles.word2}>排列方式</span>
            <div className={styles.group2}>
              <span className={styles.tag9}>月排列</span>
              <img className={styles.iconDown} src={getImageUrl('./images/img_3.png')} />
            </div>
            <span className={styles.word3}>时间</span>
            <div className={styles.group3}>
              <img className={styles.iconCalendar} src={getImageUrl('./images/img_4.png')} />
              <img className={styles.iconDown1} src={getImageUrl('./images/img_5.png')} />
            </div>
          </div>
          <div className={styles.wrapper6} onClick={goToChartEdit}>
            <Chart {...config} width={700} />
          </div>
          <div className={`${prefix}__table`}>
            <table>
              <tr className={`${prefix}__row1`}>
                <td>
                  <div style={{ display: 'flex' }}>
                    <div className={`${prefix}__cycle1`}>李</div>
                    <div>
                      <div>所有者</div>
                      <div>集团生产部</div>
                    </div>
                  </div>
                </td>
                {list.map((item) => {
                  return (
                    <td>
                      <div className={`${prefix}__wrapper2`}>
                        <div>{item.name}</div>
                        <div className={`${prefix}__cycle-wrapper`}>
                          {item.users.map((item2, index) => {
                            return (
                              <div className={`${prefix}__cycle2`} style={{ backgroundColor: item.colors[index] }}>
                                {item2}
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </td>
                  )
                })}
              </tr>
              <tr style={{ height: '45px' }}>
                <td>
                  <div style={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
                    <div className={`${prefix}__gaojing`}></div>
                    报警数 <span style={{ fontWeight: 'bold' }}>3</span>
                  </div>
                </td>
                <td style={{ padding: '0 10px' }}>当前未触发</td>
                <td colSpan={2}>上次触发事件：2023-08-08 12:00:00</td>
              </tr>
              <tr style={{ height: '60px' }}>
                <td colSpan={2}>
                  <span style={{ fontWeight: 'bold', margin: '0 10px' }}>讨论日志</span>
                  <Button
                    type="link"
                    onClick={() => {
                      setChatOpen(true)
                    }}
                  >
                    6.4日市场细分讨论
                  </Button>
                </td>
                <td>
                  <span style={{ fontWeight: 'bold', margin: '0 10px' }}>发起者</span> 集体生产部
                </td>
                <td>
                  <span style={{ fontWeight: 'bold', margin: '0 10px' }}>参与者</span>：李先生 王先生
                </td>
              </tr>
              <tr style={{ height: '60px' }}>
                <td>
                  <span style={{ fontWeight: 'bold' }}>数据源：Set01</span>
                </td>
                <td colSpan={3}>
                  <div>
                    <Button style={{ margin: '0 30px' }}>指标说明</Button>
                    <Popover content={render} title={null} trigger="click" open={popOpen} onOpenChange={handleOpenChange}>
                      <Button style={{ margin: '0 30px' }}>关联指标</Button>
                    </Popover>
                    <Button style={{ margin: '0 30px' }}>关联文件</Button>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </Modal>
      <Modal
        width={500}
        style={{ right: '20px', position: 'fixed', margin: '0' }}
        title="市场细分变化讨论"
        open={chatOpen}
        mask={false}
        onCancel={() => {
          setChatOpen(false)
        }}
        footer={null}
      >
        <div className="hnc-chat-modal">
          <img src={getImageUrl('../../image/chat-modal.png')} />
        </div>
      </Modal>
    </>
  )
}
export default Modal1
