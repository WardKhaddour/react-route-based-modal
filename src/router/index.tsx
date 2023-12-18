import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '@/layout/AppLayout'
import AppLayoutRoutes from '@/layout/AppLayout/routes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: AppLayoutRoutes,
  },
])

export default router
