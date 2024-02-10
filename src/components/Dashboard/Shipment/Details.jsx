import React from 'react'
import './details.css'
import profilepic from '../../../assets/images/icons.png'
const Details = () => {
  return (
    <>
 <section className='details'>
        <div className='topbar d-flex justify-content-between'>
          <h1>SHIPMENT DETAILS</h1>
          <a href=""><img src={profilepic} /></a>
        </div>
      
      </section>

    </>)
}

export default Details