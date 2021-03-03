import Navbar from '../Navbar/Navbar'
import Welcome from './../Welcome/Welcome'
import About from './../About/About'
import Services from './../Services/Services'
import Portfolio from './../Portfolio/Portfolio'
import Stats from './../Stats/Stats'
import Contact from './../Contact/Contact'
import Pricing from './../Pricing/Pricing'
import Testimonials from './../Testimonials/Testimonials'
import Team from './../Team/Team'
import Footer from './../Footer/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Welcome />
      <About />
      <Services />
      <Portfolio />
      <Stats />
      <Testimonials />
      <Team />
      <Pricing />
      <Contact />
      <Footer />
    </>
  )
}
