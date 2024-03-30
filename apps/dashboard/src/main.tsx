import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ConfigProvider, App } from 'antd'
import router from './router'
import { registerChartsTheme } from './framework/theme/register'
registerChartsTheme()
import 'virtual:svg-icons-register'
import 'antd/dist/reset.css'
import '@/styles/index.less'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={{ cssVar: true, hashed: false }}>
      <App className="theme-1">
        <RouterProvider router={router} />
      </App>
    </ConfigProvider>
  </React.StrictMode>
)
