import { createBrowserRouter } from 'react-router-dom'
import BoardEditor from '@/pages/BoardEditor'
import Dash from '@/pages/Dash'
import Demo from '@/pages/Demo'
import Demo2 from '@/pages/Demo2'
const router = createBrowserRouter([
  {
    path: '/',
    Component: BoardEditor
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
