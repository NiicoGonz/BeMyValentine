import Link from 'next/link';

export default function notFound() {

  return (
    <div className='box'>
      <img alt='capoo tears' className='image' src='/cina-tears.gif' />
     Estás tratando de huir amorcito?
       <div >
        <Link className='yes' href='/'>
          <button>
            Volver
          </button>
        </Link>
        </div>
    </div>
  )
  
}