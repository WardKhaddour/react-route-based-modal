import { ReactNode } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

type Props = {
  children: ReactNode | ReactNode[]
}

function Modal({ children }: Props) {
  const navigate = useNavigate()
  const location = useLocation()

  if (!location.state?.prevPage) {
    return <Navigate to='../' />
  }

  const handleCloseModal = () => {
    navigate('../')
  }

  return (
    <div
      className='fixed left-0 top-0 z-10 h-screen w-screen bg-gray-400 bg-opacity-60 transition-all duration-500'
      onClick={handleCloseModal}
    >
      <div
        className='absolute left-1/2 top-1/2 z-20 flex h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-xl bg-neutral-600 text-neutral-900  shadow-lg shadow-neutral-900'
        onClick={e => e.stopPropagation()}
      >
        {children}
        <button
          onClick={handleCloseModal}
          className='absolute right-3 top-2 text-2xl'
        >
          &times;
        </button>
      </div>
    </div>
  )
}

export default Modal
