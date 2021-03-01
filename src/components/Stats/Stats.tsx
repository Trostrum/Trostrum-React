import Container from './../Container/Container'
import { Cloud, Headset, Public, Person } from '@material-ui/icons'
import './Stats.scss'

export default function Stats() {
  const items = [
    {
      icon: <Cloud className='icon' />,
      heading: '765',
      subHeading: 'Elegant Design'
    },
    {
      icon: <Headset className='icon' />,
      heading: '0',
      subHeading: 'Elegant Design'
    },
    {
      icon: <Public className='icon' />,
      heading: '10',
      subHeading: 'Elegant Design'
    },
    {
      icon: <Person className='icon' />,
      heading: '5',
      subHeading: 'Elegant Design'
    },
  ]

  const mappedItems = items.map((item: any, index: number) => {
    return (
      <div className='stats' key={index}>
        {item.icon}
        <h3>{item.heading}</h3>
        <p>{item.subHeading}</p>
      </div>
    )
  })
  return (
    <div className='stats-wrapper'>
      <Container>
        <div className='stats-container'>
          {mappedItems}
        </div>
      </Container>
    </div>
  )
}
