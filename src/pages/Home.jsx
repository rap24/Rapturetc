import React from 'react'
import NavBar from './NavBar'
import Carousel from './carousel'
import About from './About'
import Services from './Services'
import WhyChoose from './WhyChoose'
import WhatisOcc from './WhatisOcc'
import MeetandGreet from './MeetandGreet'
import Specialized from './Specialized'
import Footer from './Footer'
import GMap from './GMap'
import ApntButton from './ApntButton'
import ContactForm from './ContactForm'



const Home = () => {
  return (
    <>
    <ApntButton />
      <NavBar />
      <Carousel />
      <Services/>
      <WhyChoose />
      <WhatisOcc />
      <MeetandGreet />
      <Specialized />
      <About />
      <ContactForm />
      <GMap />
      <Footer />
    
    </>
  )
}

export default Home
