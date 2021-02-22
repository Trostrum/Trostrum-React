import './Navbar.scss'

import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function HomeNav() {

  // state for responsive navbar
  const [isResponsive, setIsResponsive] = useState<boolean>(false)

  const toggleResponsive = () => {
    setIsResponsive(!isResponsive)
  }

  return (
    <>
      <div className='upper-nav-wrapper'>
        <div className='upper-nav'>
          <div className='left'>
            <div className='left-item'>
              <p>trostrum@gmail.com</p>
            </div>
          </div>
          <div className='right'>
            <Link className='link' to=''>Contact Us</Link>
            <Link className='link' to=''>Terms & Conditions</Link>
          </div>
        </div>
      </div>
      <nav className='navbar-wrapper'>
        <div className='navbar'>
          <div className='nav-brand'>
            <h2>Logo</h2>
          </div>
          <div className={`nav-list ${isResponsive ? 'responsive' : ''}`}>
            <Link to='/' className='nav-item' onClick={toggleResponsive}>Home</Link>
            <a href='/#about' className='nav-item' onClick={toggleResponsive}>About</a>
            <a href='/#services' className='nav-item' onClick={toggleResponsive}>Services</a>
            <Link to='/products' className='nav-item' onClick={toggleResponsive}>Products</Link>
            <a href='/#contact' className='nav-item' onClick={toggleResponsive}>Contact</a>
          </div>
          <div className={`hamburger ${isResponsive ? 'open' : ''}`} onClick={toggleResponsive}>
            <div className='div1'></div>
            <div className='div2'></div>
            <div className='div3'></div>
          </div>
        </div>
      </nav>
    </>
  )
}
