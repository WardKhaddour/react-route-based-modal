import { ChangeEventHandler } from 'react'

type Props = {
  id: string
  label: string
  placeholder?: string
  type?: 'text' | 'email' | 'password'
  onChange: (value: string) => void
}

function FormInput({
  id,
  label,
  type = 'text',
  placeholder = '',
  onChange,
}: Props) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    onChange(e.target.value)
  }

  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={id}>{label}</label>
      <input
        className='rounded-md border-2 border-neutral-900 px-2 py-1'
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  )
}

export default FormInput
