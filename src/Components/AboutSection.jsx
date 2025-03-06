import React, { useState } from 'react'
import { aboutImg , heroVideo, pause, playVid } from '../assets/images'
import { useNavigate } from 'react-router-dom';

function AboutSection() {
  const [play, setPlay] = useState(false);
  const navigate = useNavigate()
  return (
    <div className='about-section' id='about'>
      <h1 className='heading'>About Us:</h1>
      <div className="about-container">
        <div className="about-top">
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
          <div className='about-video'>
            {
              play === false ?
                <div>
                  <img src={aboutImg} alt="" />
                  <button onClick={() => setPlay(true)} className='play'><img src={playVid} alt="" /></button>
                </div> :
                <div>
                  <video autoPlay controls loop playsInline className="video-bg">
                    <source src={heroVideo} type="video/mp4" />
                  </video>
                  <button onClick={() => setPlay(false)} className='pause'><img src={pause} alt="" /></button>
                </div>
            }
          </div>
        </div>
        <div className="about-bottom">
          <button onClick={() =>{navigate('/About'), scrollTo(0 , 0)}}>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
