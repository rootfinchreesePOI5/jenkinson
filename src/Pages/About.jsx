import React from 'react'
import { box } from '../assets/images'

const About = () => {
  return (
    <div className='about'>
      <div className="about-heading">
        <h1>About Us</h1>
        <p>"Protecting Our Oceans, Inspiring Change – One Wave at a Time." 🌊💙.</p>
      </div>
      <div className="aboutpage-container">
        <img src={box} alt="" />
        <div className='about-text'>
            <p>
              <span>Welcome to Jenkinson Sea Life:</span>
              <span>This a one-of-a-kind marine sanctuary located on the boardwalk in Point Pleasant Beach, Singapore.</span>
            </p>

            <p>
              <span>Our mission:</span>
              <span>To educate, inspire, and foster a deep appreciation for marine life through immersive experiences, interactive exhibits, and conservation efforts.</span>
            </p>

            <blockquote>
              <p>Dr.Pavel Miriad</p>
              <q>The ocean is a world of endless wonder, and every creature plays a vital role in maintaining its delicate balance. Through education and conservation, we strive to inspire a deeper connection between people and marine life—because protecting our oceans means securing our future.</q>
            </blockquote>
          </div>
      </div>
    </div>
  )
}

export default About
