import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <main className='h-screen w-screen bg-neutral-900 p-20 text-white'>
      <Outlet />
    </main>
  )
}

export default AppLayout
