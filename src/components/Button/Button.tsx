type Props = {
  text: string
  type?: 'button' | 'submit'
}

function Button({ text, type = 'submit' }: Props) {
  return (
    <button
      className='rounded-md bg-neutral-900 p-3 text-white transition-opacity hover:opacity-75'
      type={type}
    >
      {text}
    </button>
  )
}

export default Button
