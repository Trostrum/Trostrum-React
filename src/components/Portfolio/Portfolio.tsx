import { useState } from 'react'
import PortfolioCard from './PortfolioCard'
import Container from './../Container/Container'
import Heading from './../Heading/Heading'
import './Portfolio.scss'

export default function Portfolio() {
  // state for portfolio items
  const [tag, setTag] = useState('all')

  // update tag state
  const onTabClick = (id:string) => {
    setTag(id)
  }

  const portfolioItems = [
    {
      title: 'project',
      img: 'https://taggbox.com/blog/wp-content/uploads/2020/03/2020-03-04.jpg',
      link: '',
      tag: 'marketing'
    },
    {
      title: 'project',
      img: 'https://v5q9w3t5.rocketcdn.me/wp-content/uploads/2018/08/blog-webdesigntrends-2019.jpg',
      link: '',
      tag: 'design'
    },
    {
      title: 'project',
      img: 'https://elearningindustry.com/wp-content/uploads/2020/01/estimate-your-elearning-content-development-costs.png',
      link: '',
      tag: 'development'
    },
    {
      title: 'project',
      img: 'https://s27389.pcdn.co/wp-content/uploads/2019/01/digital-marketing-transformation-e1547115439468-759x440.jpeg',
      link: '',
      tag: 'marketing'
    },
    {
      title: 'project',
      img: 'https://apluscourses.com/wp-content/uploads/2020/06/The-Evolution-Of-Web-Development.jpg',
      link: '',
      tag: 'development'
    },
    {
      title: 'project',
      img: 'https://w3-lab.com/wp-content/uploads/2019/12/Get-the-Most-Fancied-Web-Development-Services-min-scaled.jpg',
      link: '',
      tag: 'design'
    },
  ]

  const mappedData = portfolioItems.map((project, index:number) => {
    if(project.tag === tag){
      return <PortfolioCard key={index} title={project.title} img={project.img} link={project.link} />
    }else if(tag === 'all'){
      return <PortfolioCard key={index} title={project.title} img={project.img} link={project.link} />
    }else{
      return <></>
    }
  })
  return (
    <div className='portfolio-wrapper' id='portfolio'>
      <Container>
        <Heading heading='Portfolio' subHeading='We see what others don’t see'/>
        <div className='portfolio-tabs'>
          <p onClick={() => {onTabClick('all')}}>All</p>
          <p onClick={() => {onTabClick('marketing')}}>Marketing</p>
          <p onClick={() => {onTabClick('design')}}>Design</p>
          <p onClick={() => {onTabClick('development')}}>Development</p>
        </div>
        <div className='portfolio-items'>
          {mappedData}
        </div>
      </Container>
    </div>
  )
}
