import Card from './Card'
import Container from './../Container/Container'
import Heading from './../Heading/Heading'
import './Team.scss'

const members = [
  {
    img: 'https://www.prnewsonline.com/Assets/Image/Lede2_Marty%20Dauer%20-%20Duff%20&%20Phelps_web.jpg',
    name: 'John Doe',
    role: 'Web Designer',
    facebook: '',
    instagram: '',
    linkedIn: '',
    twitter: ''
  },
  {
    img: 'https://www.prnewsonline.com/Assets/Image/Lede2_Marty%20Dauer%20-%20Duff%20&%20Phelps_web.jpg',
    name: 'Ammar Doe',
    role: 'Game Developer',
    facebook: '',
    instagram: '',
    linkedIn: '',
    twitter: ''
  },
  {
    img: 'https://www.prnewsonline.com/Assets/Image/Lede2_Marty%20Dauer%20-%20Duff%20&%20Phelps_web.jpg',
    name: 'Quan Doe',
    role: 'Fullstack Developer',
    facebook: '',
    instagram: '',
    linkedIn: '',
    twitter: ''
  },
]

export default function Team() {
  const mappedSocials = members.map((member, index: number) => {
    return <Card key={index} img={member.img} name={member.name} role={member.role} facebook={member.facebook} instagram={member.instagram} linkedin={member.linkedIn} twitter={member.twitter} />
  })
  return (
    <div className='team-wrapper' id='teams'>
      <Container>
        <Heading heading="OUR TEAM" subHeading="Qualified professionals" />
        <div className='teams'>
          {mappedSocials}
        </div>
      </Container>
    </div>
  )
}
