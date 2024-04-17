import React from 'react'
import './mission.css'
import mission_img from '../../assets/mission-img.avif'

const Mission = () => {
  return (
    <div className='mission'>
        <div className="mission-img">
            <img src={mission_img} alt=""/>
        </div>
        <div className="mission-detail">
            <h3>Our Mission</h3>
            <h2>Dedication to innovation</h2>
            <p>We believe that every project is an opportunity to create something remarkable – a chance to push boundaries, challenge norms, and exceed expectations. We approach each endeavor with curiosity and creativity, striving to craft solutions that not only meet your needs but also propel you ahead of the curve.</p>
        </div>
    </div>
  )
}

export default Mission