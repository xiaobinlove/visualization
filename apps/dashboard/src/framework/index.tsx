import { FC, useState, useRef } from 'react'
import './index.less'
import classnames from 'classnames'
import NavigationBar from './NavigationBar'
import Menu from './Menu'
import HeaderToolBar from './HeaderToolBar'
import DashCanvas from './DashCanvas'
import SettingPanel from './SettingPanel'
import { useStore, isEditModeSelector } from '@/store'
import { useClickAway } from 'ahooks'
import html2canvas from 'html2canvas'
const prefix = 'db-board-framework'
const Framework: FC = () => {
  const [menuExpand, setExpandMenu] = useState<boolean>(false)
  const isEdit = useStore(isEditModeSelector)
  const menuRef = useRef<HTMLDivElement>(null)
  const toolBarRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLDivElement | null>(null)
  useClickAway(() => {
    setExpandMenu(false)
  }, [menuRef, toolBarRef])

  const captureAndUpload = async () => {
    if (canvasRef.current) {
      try {
        // 捕获截图
        const canvas = await html2canvas(canvasRef.current)

        // 将 canvas 转换为 Blob 对象
        canvas.toBlob(
          async (blob) => {
            // 创建一个 FormData 对象
            const file = new File([blob!], 'myImage.jpg', { type: 'image/jpeg' })
            console.log(file, 'file')
            const formData = new FormData()
            formData.append('screenshot', blob!, 'screenshot.png') // 'screenshot' 是服务器期望的字段名
            console.log(formData, 'formData')
            // 发送 POST 请求到服务器
            // const response = await fetch('/upload-endpoint', {
            //   // 替换为你的上传接口地址
            //   method: 'POST',
            //   body: formData
            // })

            // if (!response.ok) {
            //   throw new Error('Failed to upload screenshot')
            // }

            console.log('Screenshot uploaded successfully')
          },
          'image/jpeg',
          0.8
        ) // 第二个参数是 MIME 类型
      } catch (error) {
        console.error('Error capturing or uploading screenshot:', error)
      }
    }
  }
  return (
    <div className={classnames([prefix, isEdit && `${prefix}--edit`])}>
      {/* 顶部导航栏 */}
      <NavigationBar />
      <div className={`${prefix}__body`}>
        <div className={`${prefix}__main`}>
          {/* 左侧菜单 */}
          {menuExpand && (
            <div className={`${prefix}__menu`} ref={menuRef}>
              <Menu />
            </div>
          )}
          {/* 顶部菜单工具栏 */}
          {isEdit && <HeaderToolBar toggleExpandMenu={setExpandMenu} menuExpand={menuExpand} ref={toolBarRef} />}
          {/* 画布 */}
          <DashCanvas ref={canvasRef} />
        </div>
        {/* 右侧设置器面板 */}
        {isEdit && (
          <div className={`${prefix}__setting`}>
            <SettingPanel />
          </div>
        )}
      </div>
    </div>
  )
}
export default Framework
