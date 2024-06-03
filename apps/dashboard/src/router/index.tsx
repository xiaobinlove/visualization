import { createBrowserRouter } from 'react-router-dom'
import Design from '@/pages/Design'
import Dash from '@/pages/Dash'
import Demo from '@/pages/Demo'
import Demo2 from '@/pages/Demo2'
import Chat from '@/components/ChatBi'
import Home from '@/pages/Home'
import BusinessDashboard from '@/pages/BusinessDashboard'
import DslDemo from '@/pages/DslDemo'
import HncDashboard from '@/pages/HncDashboard'
const router = createBrowserRouter([
  {
    path: '/',
    Component: Design
  },
  {
    path: '/demo',
    Component: Demo
  },
  {
    path: '/dash',
    Component: Dash
  },
  {
    path: '/demo2',
    Component: Demo2
  },
  {
    path: '/chat',
    Component: Chat
  },
  {
    path: '/business-dashboard',
    Component: BusinessDashboard
  },
  {
    path: '/home',
    Component: Home
  },
  {
    path: '/dsl-demo',
    Component: DslDemo
  },
  {
    path: '/hnc-dashboard',
    Component: HncDashboard
  }
])
export default router
