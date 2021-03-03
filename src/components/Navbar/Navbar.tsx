import './Navbar.scss'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import navBrand from '../../images/navbrand.webp'

export default function HomeNav() {

  // state for responsive navbar
  const [isResponsive, setIsResponsive] = useState<boolean>(false)

  useEffect(() => {
    if (isResponsive) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }, [isResponsive])

  const closeResponsive = () => {
    if (isResponsive) {
      setIsResponsive(!isResponsive)
    }
  }

  const toggleResponsive = () => {
    setIsResponsive(!isResponsive)
  }

  return (
    <div className={'full-navbar-wrapper'}>
      <div className='upper-nav-wrapper'>
        <div className='upper-nav'>
          <div className='left'>
            <div className='left-item'>
              <p>contact@trostrum.com</p>
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
            <img src={navBrand} alt={'trostrum'} />
          </div>
          <div className={`nav-list ${isResponsive ? 'responsive' : ''}`}>
            <a href='/#home' className='nav-item' onClick={closeResponsive}>Home</a>
            <a href='/#about' className='nav-item' onClick={closeResponsive}>About</a>
            <a href='/#services' className='nav-item' onClick={closeResponsive}>Services</a>
            <a href='/#portfolio' className='nav-item' onClick={closeResponsive}>Portfolio</a>
            <a href='/#testimonials' className='nav-item' onClick={closeResponsive}>Testimonials</a>
            <a href='/#teams' className='nav-item' onClick={closeResponsive}>Teams</a>
            <a href='/#price' className='nav-item' onClick={closeResponsive}>Price</a>
            <a href='/#blog' className='nav-item' onClick={closeResponsive}>Blog</a>
            <a href='/#contact' className='nav-item' onClick={closeResponsive}>Contact</a>
          </div>
          <div className={`hamburger ${isResponsive ? 'open' : ''}`} onClick={toggleResponsive}>
            <div className='div1' />
            <div className='div2' />
            <div className='div3' />
          </div>
        </div>
      </nav>
    </div>
  )
}
