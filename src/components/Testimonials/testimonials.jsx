import React, { useRef } from 'react'
import './testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'

import customer1 from '../../assets/customer1.jpg'
import customer2 from '../../assets/customer2.jpg'
import customer3 from '../../assets/customer3.jpg'
import customer4 from '../../assets/customer4.jpg'

const Testimonials = () => {
    
    const slider = useRef();
    let tx = 0;

const slideForward = () => {
    if(tx > -75){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = () => {
    if(tx < -0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}



  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="customer">
                            <img src={customer1} alt="" />
                            <div className='customer-info'>
                                <p>"I can't be more happier with the work done by MetaLogic. So satisfied with you!"</p>
                                <h4><em>-James Jones, CEO, Prime Educations</em></h4>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="customer">
                            <img src={customer2} alt="" />
                            <div className='customer-info'>
                                <p>"Really glad how the result turned out. Keep up the good work and Good Luck,MetaLogic!"</p>
                                <h4><em>-Maya Matthews, President , Arizona Traders</em></h4>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="customer">
                            <img src={customer3} alt="" />
                            <div className='customer-info'>
                                <p>"Impressed with the hardwork and teamwork of MetaLogic. Keep going, you guys!"</p>
                                <h4><em>-Albert Bennington</em></h4>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="customer">
                            <img src={customer4} alt="" />
                            <div className='customer-info'>
                                <p>"The service and professinalism was commendable. People at MetaLogic inspired me"</p>
                                <h4><em>-Avery Watkins, CEO, South Carolina Bank</em></h4>
                            </div>
                        </div>
                    </div>
                </li>
                

            </ul>
        </div>
    </div>
  )
}

export default Testimonials