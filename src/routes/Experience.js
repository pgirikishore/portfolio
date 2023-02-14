import React from 'react'

import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'
import Timeline from '../components/Timeline'


const Experience = () => {
  return (
    <div>
        <Navbar />
        <HeroImg2 heading="EXPERIENCE." text="Take a look at my work experiences" />
        <Timeline />
        <Footer />
    </div>
  )
}

export default Experience