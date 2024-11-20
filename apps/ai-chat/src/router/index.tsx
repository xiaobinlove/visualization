/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
const Chat = lazy(() => import('@/pages/Chat'))
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={null}>
        <Chat />
      </Suspense>
    )
  }
])
export default router
