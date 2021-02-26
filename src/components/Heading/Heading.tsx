import './Heading.scss'

interface HeadingInterface {
    heading: string,
    subHeading: string
}
export default function Heading(props: HeadingInterface) {
  return (
    <div className='about-heading-wrapper'>
      <div className='line' />
      <div className='title'>
        <h1>{props.heading}</h1>
        <p>{props.subHeading}</p>
      </div>
    </div>
  )
}
