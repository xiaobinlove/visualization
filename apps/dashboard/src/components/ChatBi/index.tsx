import { FC, useState, useRef, ChangeEventHandler } from 'react'
import SvgIcon from '@/components/SvgIcon'
import { Popover, Button, Input, Modal, Form, App, Spin } from 'antd'
import classnames from 'classnames'
import Collect from './components/Collect'
import { chatMap } from '@/mock/chart-bi'
import { QuestionCircleFilled, MessageFilled } from '@ant-design/icons'
import { componentMap } from './map'
import { AiChat, DashComponentType } from '@/types'
import './index.less'
import Item from 'antd/es/list/Item'
const tabs = [
  {
    label: '智能AI',
    value: '0'
  },
  {
    label: '我的仪表盘',
    value: '1'
  }
]
const { TextArea } = Input
const prefix = 'db-chat-bi'
const guessList = ['应收款前十大客户的销售负责人', '含税总额排名前10的供应商名称']
const ChatBi: FC = () => {
  const { message } = App.useApp()
  const [open, setOpen] = useState(false)
  const [curTab, setCurTab] = useState('0')
  const [chatList, setChatList] = useState<AiChat[]>([])
  const [inputValue, setInputValue] = useState('')
  const curCollectedIdRef = useRef('')
  const [chatLoading, setChatLoading] = useState(false)
  const [isCollectModalOpen, setIsCollectModalOpen] = useState(false)
  const [askAgain, setAskAgain] = useState(false)
  const contentRef = useRef<HTMLDivElement>()
  const handleTabClick = (val: string) => {
    setCurTab(val)
  }
  const onInputChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setInputValue(e.target.value)
  }
  const handleOk = () => {
    setIsCollectModalOpen(false)
    setChatList(
      chatList.map((item) => {
        if (item.id === curCollectedIdRef.current) {
          item.collected = true
        }
        return item
      })
    )
    message.success('收藏成功！')
  }

  const handleCancel = () => {
    setIsCollectModalOpen(false)
  }
  const handleGuessTagClick = (item: string) => {
    send(item)
  }
  const chartList = () => {
    return (
      <div>
        <div className={`${prefix}__chat-list`}>
          <div className={`${prefix}__chat-item`}></div>
          <div className={`${prefix}__chat-item`}></div>
          <div className={`${prefix}__chat-item`}></div>
          <div className={`${prefix}__chat-item`}></div>
          <div className={`${prefix}__chat-item`}></div>
          <div className={`${prefix}__chat-item`}></div>
          <div className={`${prefix}__chat-item`}></div>
          <div className={`${prefix}__chat-item`}></div>
          <div className={`${prefix}__chat-item`}></div>
          <div className={`${prefix}__chat-item`}></div>
          <div className={`${prefix}__chat-item`}></div>
          <div className={`${prefix}__chat-item`}></div>
          <div className={`${prefix}__chat-item`}></div>
          <div className={`${prefix}__chat-item`}></div>
          <div className={`${prefix}__chat-item`}></div>
        </div>
        <div className={`${prefix}__chat-name`}>表格</div>
      </div>
    )
  }
  const handleSendClick = () => {
    send(inputValue)
    setInputValue('')
  }
  const send = (input: string) => {
    setChatLoading(true)
    const user: AiChat = {
      role: 'user',
      input: input
    }
    setChatList([...chatList, user])
    const aiObj = chatMap[input]
    setTimeout(() => {
      contentRef.current!.scrollTo({ behavior: 'smooth', top: 1000000 })
    })
    setTimeout(() => {
      const ai: AiChat = {
        role: 'ai',
        id: new Date().getTime() + '',
        ...aiObj
      }
      setChatList((list) => [...list, ai])
      setChatLoading(false)
    }, 1000)
    setTimeout(() => {
      contentRef.current!.scrollTo({ behavior: 'smooth', top: 1000000 })
    }, 1016)
  }
  const handleCollectClick = (id: string) => {
    setIsCollectModalOpen(true)
    curCollectedIdRef.current = id
  }
  return (
    <div className={prefix}>
      <div className={`${prefix}__tab`}>
        {tabs.map((item) => {
          return (
            <div
              key={item.value}
              onClick={() => {
                handleTabClick(item.value)
              }}
              className={classnames(`${prefix}__tab-item`, { [`${prefix}__tab-item--active`]: item.value === curTab })}
            >
              {item.label}
            </div>
          )
        })}
      </div>
      {/* AiChat  */}
      {curTab === '0' ? (
        <>
          <div className={`${prefix}__content`} ref={contentRef} id="content">
            <div className={`${prefix}__item ${prefix}__answer`}>
              <div className={`${prefix}__avatar`}>
                <div className={`${prefix}__avatar-icon`}></div>
              </div>
              <div className={`${prefix}__hello`}>你好，我是你的海狸数据AI助手</div>
              我可以帮您生成您需要的数据图表，快来试试吧！
            </div>
            {chatList.map((item: AiChat, index: number) => {
              if (item.role === 'user') {
                return (
                  <div className={`${prefix}__item ${prefix}__question`} key={index}>
                    <div className={`${prefix}__avatar`}>
                      <div className={`${prefix}__avatar-icon`}></div>
                    </div>
                    <div>{item.input}</div>
                  </div>
                )
              } else {
                const ChartComponent = componentMap[item.type]
                return (
                  <div className={`${prefix}__item ${prefix}__answer`} key={index}>
                    <div className={`${prefix}__avatar`}>
                      <div className={`${prefix}__avatar-icon`}></div>
                    </div>
                    <>
                      {/* <div className={`${prefix}__source`}>数据源：采购订单</div> */}
                      <div className={`${prefix}__info`}>
                        <SvgIcon name="chat-bi-info" size={20} />
                        <div className={`${prefix}__info-text`}>{item.descript}</div>
                      </div>
                      {/* 图表 */}
                      {item.type === 'text' ? (
                        <ChartComponent {...item.config} />
                      ) : (
                        <div className={`${prefix}__chart`} style={{ ...item.style, ...(item.type === DashComponentType.DATA_TABLE && { border: 'none' }) }}>
                          <ChartComponent {...item.config} />
                        </div>
                      )}
                      <div className={`${prefix}__tools`}>
                        <Popover trigger="click" open={open} onOpenChange={setOpen} content={chartList}>
                          <div className={classnames(`${prefix}__action`, { [`${prefix}__action--active`]: open })}>
                            <SvgIcon name="switch-chat" size={20} />
                          </div>
                        </Popover>
                        <div className={`${prefix}__action`}>
                          <SvgIcon name="share" size={20} />
                        </div>
                        <div className={`${prefix}__action`}>
                          <SvgIcon name="dianzan" size={20} />
                        </div>
                        <div className={`${prefix}__action`}>
                          <SvgIcon name="diancai" size={20} />
                        </div>
                        <div
                          className={classnames(`${prefix}__action`, { [`${prefix}__action--active`]: item.collected })}
                          onClick={() => {
                            handleCollectClick(item.id!)
                          }}
                        >
                          <SvgIcon name={item.collected ? 'shoucang_active' : 'shoucang'} size={20} />
                        </div>
                      </div>
                    </>
                  </div>
                )
              }
            })}
            {chatLoading ? (
              <div className={`${prefix}__item ${prefix}__answer`}>
                <div className={`${prefix}__avatar`}>
                  <div className={`${prefix}__avatar-icon`}></div>
                </div>
                <div className={`${prefix}__loading`}>
                  正在为您分析，请稍后 <Spin size="small" className={`${prefix}__loading-icon`} />
                </div>
              </div>
            ) : (
              <>
                {/* 猜你喜欢 */}
                {chatList[chatList.length - 1]?.guessList && (
                  <div className={`${prefix}__recommend`}>
                    <div className={`${prefix}__recommend-title`}>
                      <SvgIcon name="chat-bi-guess" size={20} className={`${prefix}__guess-icon`} />
                      猜你喜欢
                    </div>
                    <div className={`${prefix}__recommend-tag-wrap`}>
                      {guessList.map((item) => (
                        <div
                          className={`${prefix}__recommend-tag`}
                          onClick={() => {
                            handleGuessTagClick(item)
                          }}
                        >
                          <QuestionCircleFilled className={`${prefix}__question-icon`} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 继续追问 */}
                {chatList.length > 0 &&
                  (!askAgain ? (
                    <div className={`${prefix}__ask-again`} onClick={() => setAskAgain(true)}>
                      <MessageFilled color="#4B6EEF" size={20} className={`${prefix}__message-icon`} />
                      继续追问
                    </div>
                  ) : (
                    <div className={`${prefix}__item ${prefix}__answer`}>
                      <div className={`${prefix}__avatar`}>
                        <div className={`${prefix}__avatar-icon`}></div>
                      </div>
                      <div>
                        当前为多轮对话状态，将自动联系上文为您回答。若回答效果不理想，您可点击
                        <Button type="link" onClick={() => setAskAgain(false)} className={`${prefix}__quit`}>
                          退出追问
                        </Button>
                      </div>
                    </div>
                  ))}
              </>
            )}
          </div>
          <div className={`${prefix}__input-container`}>
            <div className={`${prefix}__chat-input`}>
              <TextArea autoSize={{ minRows: 1, maxRows: 3 }} className={`${prefix}__textarea`} value={inputValue} onChange={onInputChange} />
              <SvgIcon name="chat-bi-send" className={`${prefix}__send-icon`} size={48} onClick={handleSendClick} />
            </div>
          </div>
        </>
      ) : (
        // 我的收藏
        <Collect />
      )}

      <Modal title="收藏到我的仪表盘" open={isCollectModalOpen} onOk={handleOk} width={400} onCancel={handleCancel}>
        <Form.Item label="图表名称">
          <Input placeholder="请输入图表名称" defaultValue={chatList.find((item) => item.id === curCollectedIdRef.current)?.title} />
        </Form.Item>
      </Modal>
    </div>
  )
}
export default ChatBi
