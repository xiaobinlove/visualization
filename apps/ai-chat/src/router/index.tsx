/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
const Chat = lazy(() => import('@/pages/Chat'))
const Demo = lazy(() => import('@/pages/Demo'))
const router = createBrowserRouter([
  {
    path: '/chat',
    element: (
      <Suspense fallback={null}>
        <Chat />
      </Suspense>
    )
  },
  {
    path: '/demo',
    element: (
      <Suspense fallback={null}>
        <Demo />
      </Suspense>
    )
  }
])
export default router
