import { Link, To } from 'react-router-dom'

type Props = {
  to: To
  from?: string
  text: string
}

function AppLink({ to, text, from }: Props) {
  return (
    <Link
      to={to}
      className='border-b-2 border-white text-white transition-opacity duration-200 hover:opacity-75'
      state={{ prevPage: from }}
    >
      {text}
    </Link>
  )
}

export default AppLink
