import './Testimonials.scss'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import AvatarImage from './../../images/avatar.jpg'

export default function Testimonials() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  }
  return (
    <div className='testimonials-wrapper' id='testimonials'>
      <h2>What customers say about us ?</h2>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
        autoPlay={true}
        autoPlaySpeed={4000}
      >
        <div className='testimonial'>
          <img src={AvatarImage} alt='' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum. Fusce faucibus ligula scelerisque, eleifend turpis in porttitor sapien. Sed sed purus odio.</p>
        </div>
        <div className='testimonial'>
          <img src={AvatarImage} alt='' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum. Fusce faucibus ligula scelerisque, eleifend turpis in porttitor sapien. Sed sed purus odio.</p>
        </div>
        <div className='testimonial'>
          <img src={AvatarImage} alt='' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum. Fusce faucibus ligula scelerisque, eleifend turpis inport titor sapien. Sed sed purus odio.</p>
        </div>
      </Carousel>
    </div>
  )
}
