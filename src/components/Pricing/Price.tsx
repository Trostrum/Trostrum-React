import { Link } from 'react-router-dom'

interface PriceInterface {
  service: string,
  title : string,
  details: Array<string>,
  link: string
}
export default function Price(props: PriceInterface) {
  const mappedDetails = props.details.map((detail: string) => {
    return <p>{detail}</p>
  })
  return (
    <div className='price'>
      <div className='service-type'>
        <h3>{props.service}</h3>
      </div>
      <div className='service-details'>
        <h4>$ {props.title}</h4>
        <div className='service-list'>
          {mappedDetails}
        </div>
      </div>
      <Link to={props.link} className='price-btn'>Get Started</Link>
    </div>
  )
}
