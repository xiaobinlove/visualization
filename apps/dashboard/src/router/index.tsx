import { createBrowserRouter } from 'react-router-dom'
import BoardEditor from '@/pages/BoardEditor'
import Demo from '@/pages/Demo'
const router = createBrowserRouter([
  {
    path: '/',
    Component: BoardEditor
  },
  {
    path: '/demo',
    Component: Demo
  }
])
export default router
