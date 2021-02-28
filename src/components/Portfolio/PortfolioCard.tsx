import { Link } from 'react-router-dom'
import { Visibility } from '@material-ui/icons'
interface PortfolioInterface {
  title: string,
  img : string,
  link: string,
}

export default function PortfolioCard(props: PortfolioInterface) {
  return (
    <Link to={props.link} className='portfolio'>
      <div className='overlay'>
        <Visibility className='icon' />
      </div>
      <img src={props.img} alt={props.title} />
    </Link>
  )
}
