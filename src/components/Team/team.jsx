import React from 'react'
import './team.css'
import member1 from '../../assets/member1.jpg'
import member2 from '../../assets/member2.jpg'
import member3 from '../../assets/member3.jpg'

const Team = () => {
  return (
    <div className='team'>
        <div className="member">
            <img src={member1} alt="" />
            <div className="caption">
                <h4>Mr. David Anderson</h4>
                <p><em>CEO</em></p>
            </div>
        </div>
        <div className="member">
            <img src={member2} alt="" />
            <div className="caption">
                <h4>Mr. Dave Johnson</h4>
                <p> President</p>
            </div>
        </div>
        <div className="member">
            <img src={member3} alt="" />
            <div className="caption">
                <h4>Mr. John Lee</h4>
                <p> President</p>
            </div>
        </div>
    </div>
  )
}

export default Team