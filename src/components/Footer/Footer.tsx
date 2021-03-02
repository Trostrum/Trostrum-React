import './Footer.scss'
import { Facebook, Twitter, LinkedIn } from '@material-ui/icons'

export default function Footer() {
  const date = new Date().getFullYear()
  return (
    <footer className='footer-wrapper'>
      <div className='pre-footer'>
        <h3>TROSTRUM</h3>
        <div className='social-wrapper'>
          <Facebook className='icon' />
          <Twitter className='icon' />
          <LinkedIn className='icon' />
        </div>
      </div>
      <div className='footer'>
        <p>© {date} All Rights Reserved By Trostrum</p>
      </div>
    </footer>
  )
}
