import { Link } from 'react-router-dom'
import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons'

interface CardInterface {
    img: string,
    name: string,
    role: string,
    facebook: string,
    instagram: string,
    linkedin: string,
    twitter: string
}

export default function Card(props: CardInterface) {
  console.log(props.img)
  return (
    <div className='team-card'>
      <img src={props.img} alt='' />
      <div className='team-overlay'>
        <h2>{props.name}</h2>
        <p>{props.role}</p>
        <div className='social-wrapper'>
          <Link className='social-link' to={props.facebook}><Facebook className='icon' /></Link>
          <Link className='social-link' to={props.twitter}><Twitter className='icon' /></Link>
          <Link className='social-link' to={props.linkedin}><LinkedIn className='icon' /></Link>
          <Link className='social-link' to={props.instagram}><Instagram className='icon' /></Link>
        </div>
      </div>
    </div>
  )
}
