import React, { useState } from 'react'
import Container from './../Container/Container'
import Heading from './../Heading/Heading'
import { LocationCity, Smartphone, Mail } from '@material-ui/icons'
import './Contact.scss'

export default function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [btnState] = useState<boolean>(false)

  const onFormSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  const handleInputChange = (setFunction: Function, value: string) => {
    setFunction(value)
  }
  return (
    <div className='contact-wrapper'>
      <Container>
        <Heading heading="Contact Us" subHeading="Keep in Touch" />
        <div className='contact'>
          <form onSubmit={onFormSubmit}>
            <div className='input-wrapper'>
              <input type='text' placeholder='Name' className='input' />
            </div>
            <div className='input-wrapper'>
              <input type='email' placeholder='Email' className='input' />
            </div>
            <div className='input-wrapper'>
              <textarea placeholder='Message' rows={8} className='input' ></textarea>
            </div>
            <button type='submit' className='submit-btn'>Send Now!</button>
          </form>
          <div className='contact-details'>
            <div className='contact-item'>
              <LocationCity className='icon' />
              <div className='text-wrapper'>
                <p>2651 Main Street, Suit 124</p>
                <p>Seattle, WA, 98101</p>
              </div>
            </div>
            <div className='contact-item'>
              <Smartphone className='icon' />
              <div className='text-wrapper'>
                <p>0123456789</p>
                <p>0345627891</p>
              </div>
            </div>
            <div className='contact-item'>
              <Mail className='icon' />
              <div className='text-wrapper'>
                <p>trostrum@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
