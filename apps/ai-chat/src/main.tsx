import { RouterProvider } from 'react-router-dom'
import { App, ConfigProvider } from 'antd'
import router from './router'
import { createRoot } from 'react-dom/client'
import zhCN from 'antd/locale/zh_CN'
import './styles/index.less'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

createRoot(document.getElementById('root')!).render(
  <ConfigProvider theme={{ cssVar: true, hashed: false }} locale={zhCN}>
    <App>
      <RouterProvider router={router} />
    </App>
  </ConfigProvider>
)
