import { createBrowserRouter } from 'react-router-dom'
import BoardEditor from '@/pages/BoardEditor'
const router = createBrowserRouter([
  {
    path: '/',
    Component: BoardEditor
  }
])
export default router
