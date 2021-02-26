import React from 'react'

interface ServiceProps{
    icon : React.ReactNode,
    title : string,
    description: string
}

export default function Service(service: ServiceProps) {
  return (
    <div className='card'>
      <div className='card-header'>
        {service.icon}
        <h3>{service.title}</h3>
      </div>
      <p>{service.description}</p>
    </div>
  )
}
