import { FormEventHandler, useState } from 'react'
import { AppLink, Modal, FormInput, Button } from '@/components'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    console.log(name, email, password)
  }

  return (
    <Modal>
      <div className='flex flex-col gap-6'>
        <h2 className='mb-8 text-2xl'>Create new account</h2>
        <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
          <FormInput
            id='name'
            label='Name'
            placeholder='Name'
            onChange={value => setName(value)}
          />
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
          <Button text='Register' />
        </form>
        <p>
          already have an account?{' '}
          <AppLink to='/login' text='Login' from='register' />
        </p>
      </div>
    </Modal>
  )
}

export default Register
