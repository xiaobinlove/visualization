import { createBrowserRouter } from 'react-router-dom'
import Design from '@/pages/Design'
import Dash from '@/pages/Dash'
import Demo from '@/pages/Demo'
import Demo2 from '@/pages/Demo2'
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
  }
])
export default router
