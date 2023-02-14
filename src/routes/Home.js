import React from 'react'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroImg />
        <Skills />
        <Footer />
    </div>
  )
}

export default Home