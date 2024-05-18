import { FC, useState } from 'react'
import { Modal, Form, Input } from 'antd'
import SvgIcon from '@/components/SvgIcon'
import DashTypeSelect from './components/DashTypeSelect'
const FormItem = Form.Item
import './index.less'
const prefix = 'db-dashboard-home'
const Home: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  return (
    <div className={prefix}>
      <div className={`${prefix}__content`}>
        <div className={`${prefix}__item`} onClick={showModal}>
          <div className={`${prefix}__item-top ${prefix}__add`}>
            <SvgIcon name="add" size={24} />
          </div>
          <div className={`${prefix}__title`}>新增仪表盘</div>
        </div>
        {new Array(10).fill('1').map((_item, index) => {
          return (
            <div className={`${prefix}__item`} key={index}>
              <div className={`${prefix}__item-top ${prefix}__thumb`}></div>
              <div className={`${prefix}__title`}>门户大屏</div>
            </div>
          )
        })}
      </div>
      {/* 新增弹窗 */}
      <Modal title="创建仪表盘" width={500} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form labelAlign="left" labelCol={{ span: 3 }}>
          <div className={`${prefix}__dash-type`}>
            <FormItem noStyle>
              <DashTypeSelect />
            </FormItem>
          </div>
          <FormItem label="标题" required>
            <Input placeholder="请输入标题" />
          </FormItem>
          <FormItem label="备注">
            <Input.TextArea rows={5} />
          </FormItem>
        </Form>
      </Modal>
    </div>
  )
}
export default Home
