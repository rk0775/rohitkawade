import React from 'react'
import './Common.css'
export default function Common({title,subtitle,id}) {
  return (
    <div className='common-container'>
        <div className='common-parrent' id={id}>
            <h3>{title}</h3>
            <h6>{subtitle}</h6>
            <div className='divider'></div>
        </div>
      
    </div>
  )
}
