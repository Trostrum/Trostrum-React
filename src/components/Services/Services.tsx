import Service from './Service'
import Heading from './../Heading/Heading'
import { Settings, Crop, Block, PieChart, Code, BarChart } from '@material-ui/icons'
import './Service.scss'
import Container from '../Container/Container'

const services = [
  {
    id: 1,
    icon: <Settings className='icon' />,
    title: 'Responsive',
    description: 'Your website works on any device: desktop, tablet or mobile and any device'
  },
  {
    id: 2,
    icon: <Crop className='icon' />,
    title: 'Customizable',
    description: 'Your website works on any device: desktop, tablet or mobile and any device'
  },
  {
    id: 3,
    icon: <Block className='icon' />,
    title: 'UI Kit',
    description: 'Your website works on any device: desktop, tablet or mobile and any device'
  },
  {
    id: 4,
    icon: <PieChart className='icon' />,
    title: 'Lego Base',
    description: 'Your website works on any device: desktop, tablet or mobile and any device'
  },
  {
    id: 5,
    icon: <Code className='icon' />,
    title: 'Clean Code',
    description: 'Your website works on any device: desktop, tablet or mobile and any device'
  },
  {
    id: 6,
    icon: <BarChart className='icon' />,
    title: 'Support',
    description: 'Your website works on any device: desktop, tablet or mobile and any device'
  }
]

const mappedData = services.map(service => {
  return <Service key={service.id} icon={service.icon} title={service.title} description={service.description} />
})

export default function Services() {
  return (
    <section className='services-wrapper' id='services'>
      <Container>
        <Heading heading='OUR SERVICES' subHeading='We see what others don’t see' />
        <div className='services'>
          {mappedData}
        </div>
      </Container>
    </section>
  )
}
