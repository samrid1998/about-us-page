import React from 'react'
import './footer.css'
import metalogo from '../../assets/metalogo.png'
import email_icon from '../../assets/email_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import location_icon from '../../assets/location_icon.png'
import viber_icon from '../../assets/viber_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import linkedin_icon from '../../assets/linkedin_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='contact'>
          <div className='brand'>
            <img src={metalogo} alt='' />
            <div class="brand-name">
              <h1>MetaLogic</h1>
              <span>Software Private Limited</span>
            </div>
          </div>
          <div className='contact-info'>
            <ul>
              <li><img src={location_icon} />Saptakhel, Lalitpur (Head office)</li>
              <li><img src={phone_icon} />+ 977 9851353599</li>
              <li><img src={email_icon} />info@metalogic.com.np</li>
            </ul>
          </div>
          <div className='company'>
            <h5>Company</h5>
            <ul>
              <li>Feedback</li>
              <li>Partnership</li>
              <li>Terms and Conditions</li>
          </ul>
        </div>
        </div>
        
        <div className='services'>
          <h5>Services</h5>
          <ul>
            <li>Custom Software Development</li>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Cloud Computing Services</li>
            <li>Quality Assurance and Testing</li>
            <li>UI/UX Designing</li>
            <li>Maintenance and Support</li>
            <li>Dev Ops</li>
            <li>Blockchain Solutions</li>
          </ul>
        </div>
        <div>
        <div className='join-company'>
          <h5>Join</h5>
          <ul>
            <li>Careers at MetaLogic</li>
            <li>Internships</li>
          </ul>
        </div>
        <div className='join-social-media'>
          <h5>Join us social media</h5>
          <ul>
            <li><img src={viber_icon} /></li>
            <li><img src={facebook_icon} /></li>
            <li><img src={twitter_icon} /></li>
            <li><img src={linkedin_icon} /></li>
          </ul>
        </div>
        </div>
        
    </div>
  )
}

export default Footer