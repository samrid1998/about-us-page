import React from 'react'
import './approach.css'
import approachimg1 from '../../assets/approach-img1.avif'
import approachimg2 from '../../assets/approach-img2.avif'

const Approach = () => {
  return (
    <div className="approach">
        <div className='approach-description'>
            <p>At Metalogic, we navigate the digital landscape with innovation, collaboration, and a dedicated focus on client success. Rooted in a commitment to pioneering solutions and anticipating future needs, our client relationships go beyond transactions. Understanding unique challenges, we craft solutions that align effortlessly with business objectives. With a user-centric design philosophy, agile methodologies, and a commitment to continuous learning, we promise transformative success at Metalogic Software Pvt. Ltd.</p>
        </div>
        <div className='approach-img'>
            <img src={approachimg1} />
            <img src={approachimg2} />
        </div>
    </div>
  )
}

export default Approach