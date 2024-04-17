import React from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'
import Team from './components/Team/team'
import Title from './components/Title/title'
import Mission from './components/Mission/mission'
import Testimonials from './components/Testimonials/testimonials'
import Footer from './components/Footer/footer'
import Copyright from './components/Copyright/copyright'
import Approach from './components/Approach/approach'
import Foundation from './components/Foundation/foundation'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subtitle='OUR APPROACH' title='WHERE VISION MEETS EXECUTION' />
        <Approach />
      </div>
      <div className='container'>
        <Title subtitle='OUR FOUNDATION' title='BRIDGING FUTURE SINCE 2023' />
        <Foundation />
      </div>
      <Mission />
      <div>
        <Title subtitle='OUR TEAM MEMBERS' title='The Genius of the Tech World' />
        <Team />
      </div>
      <div class="container">
        <Title subtitle='OUR TESTIMONIALS' title='What our customers have to say' />
        <Testimonials />
      </div>
      <Footer />
      <Copyright />
    </div>
  )
}

export default App