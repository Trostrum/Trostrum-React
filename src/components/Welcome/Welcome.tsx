import './Welcome.scss'
import { useEffect, useState } from 'react'

const TEXTS = [
  'Creative Agency',
  'Beautiful Design'
]


export default function Welcome() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1), 3000 // every 3 seconds
    )
    return () => clearTimeout(intervalId)
  }, [])

  return (
    <div className='welcome-wrapper' id='home'>
      <div className='welcome-text-wrapper'>
        <p>Trostrum</p>
        {/* <h1>Creative Agency</h1> */}
        <h1> </h1>
        <p className='description'>Sed ut perspic iatis unde omnis iste natus error sit volup tatem accusa ntium dolore mque laudantium, totam rem aperiameaque ipsa quae ab illo invent ore ab</p>
        <div className='btn-wrapper'>
          <a href='/#services' className='link' style={{ textDecoration: 'none' }}><button className='btn about'>About us</button></a>
          <a href='/' className='link' style={{ textDecoration: 'none' }}><button className='btn'>Get Started</button></a>
        </div>
      </div>
    </div>
  )
}
