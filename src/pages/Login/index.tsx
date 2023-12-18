import { FormEventHandler, useState } from 'react'
import { AppLink, Modal, FormInput, Button } from '@/components'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <Modal>
      <div className='flex flex-col gap-6'>
        <h2 className='mb-8 text-2xl'>Login to your account</h2>
        <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
          <FormInput
            id='email'
            label='Email'
            placeholder='Email'
            onChange={value => setEmail(value)}
          />

          <FormInput
            id='password'
            label='Password'
            placeholder='Password'
            type='password'
            onChange={value => setPassword(value)}
          />
          <Button text='Login' />
        </form>
        <p>
          doesn't have an account?{' '}
          <AppLink to='/register' text='Join now' from='login' />
        </p>
      </div>
    </Modal>
  )
}

export default Login
