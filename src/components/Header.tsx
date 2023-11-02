import { Outlet, Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const generateClass = (link: string) => {
    let className = 'mx-4 text-lg font-bold text-gray-400'

    if ((location.pathname.includes('flashcards') && link === 'flashcards')
    || (location.pathname === '/' && link === '/')) {
      className = `${className} text-orange-500`
    }  else {
      className = `${className} text-gray-400`
    }
    return className
  }
  
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex justify-center bg-brown-700 p-4">
        <Link to="/" className={generateClass('/')}>Home</Link>
        <Link to="/flashcards" className={generateClass('flashcards')}>My flashcards</Link>
      </div>
      <Outlet />
    </div>
  )
}
