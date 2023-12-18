import { Outlet } from 'react-router-dom'
import { AppLink } from '@/components'

function Home() {
  return (
    <>
      <section className='flex flex-col gap-8'>
        <h2 className='text-center text-4xl font-bold'>Welcome!</h2>
        <p className='text-2xl'>It seems you are not authenticated</p>

        <p>Create new account or login to your existing account</p>

        <div className='flex gap-5'>
          <AppLink to='login' text='Login' from='/' />
          <AppLink to='register' text='Sign up' from='/' />
        </div>
      </section>
      <Outlet />
    </>
  )
}

export default Home
