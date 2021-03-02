import Container from './../Container/Container'
import Heading from './../Heading/Heading'
import Price from './Price'
import './Pricing.scss'

const pricing = [
  {
    service: 'Single',
    title : 'Free',
    details: [
      '30 days free trial',
      'Basic Support',
      '1GB attachment',
      'Basic support',
      '1 GB attachment',
    ],
    link: ''
  },
  {
    service: 'Single',
    title : '45',
    details: [
      '30 days free trial',
      'Basic Support',
      '1GB attachment',
      'Basic support',
      '1 GB attachment',
    ],
    link: ''
  },
  {
    service: 'Single',
    title : '65',
    details: [
      '30 days free trial',
      'Basic Support',
      '1GB attachment',
      'Basic support',
      '1 GB attachment',
    ],
    link: ''
  },

]

export default function Pricing() {
  const mappedPrice = pricing.map((price, index: number) => {
    return <Price key={index} service={price.service} title={price.title} details={price.details} link={price.link} />
  })
  return (
    <div className='pricing-wrapper'>
      <Container>
        <Heading heading="Pricing" subHeading="Choose your perfect plan" />
        <div className='price-wrapper'>
          {mappedPrice}
        </div>
      </Container>
    </div>
  )
}
