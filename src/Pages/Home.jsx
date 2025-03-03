import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import AboutSection from '../Components/AboutSection'
import Categories from '../Components/Categories'
import EventsSection from '../Components/EventsSection'
import Visitors from '../Components/Visitors'
import ContactUs from '../Components/ContactUs'

function Home() {
  return (
    <div className=''>
      <Hero/>
      <div className='home-body'>
      <AboutSection/>
      <Categories/>
      <EventsSection/>
      <Visitors/>
      <ContactUs/>
      </div>
    </div>
  )
}

export default Home
