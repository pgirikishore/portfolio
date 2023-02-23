import React from 'react'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'
import WorkCard from '../components/WorkCard'
import ActivityTimeline from '../components/ActivityTimeline'
import portfolio from '../portfolio';

const Activities = () => {
  return (
    <div>
        <Navbar />
        <HeroImg2 heading="ACTIVITIES." text="Things I do. Things I have done."/>
        <ActivityTimeline />
        <Footer />
    </div>
  )
}

export default Activities