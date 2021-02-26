import AboutImage from './../../images/about.png'
import './About.scss'
import Container from '../Container/Container'
import Heading from './../Heading/Heading'

export default function About() {
  return (
    <div className='about-wrapper' id='about'>
      <Container>
        <div className={'flex items-center'}>
          <div className='about-details'>
            <Heading heading='ABOUT US' subHeading="We see what others don't see"/>
            <div className='about-description'>
              <p>Keep a personal touch while removing manual tasks from your to-do list. Pre-built marketing automation
                creates room to focus on strategy. Welcome, re-engage, and follow up with the people who matter to you. If
                you're new to marketing automation, get up to speed with one of our nifty guides: What is Marketing
                Automation?</p>
            </div>
            <div className='btn-wrapper'>
              <a href='/#services' className='link' style={{ textDecoration: 'none' }}>
                <button className='btn about'>Our Services</button>
              </a>
              <a href='/#contact' className='link' style={{ textDecoration: 'none' }}>
                <button className='btn'>Contact Us</button>
              </a>
            </div>
          </div>
          <div className='about-image'>
            <img src={AboutImage} alt='' />
          </div>
        </div>
      </Container>
    </div>
  )
}
