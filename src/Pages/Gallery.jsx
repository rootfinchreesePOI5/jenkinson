import React from 'react'
import { galleryImages } from '../assets/assets'

function Gallery() {
  return (
    <div className='gallery'>
       <div className="gallery-heading">
        <h1>Our Gallery</h1>
        <p>"Capturing Moments, Preserving Oceans – Dive into Our Story." 🌊📸</p>
      </div>
      <div className="gallery-container">
        {
          galleryImages.map((item , index) => {
            return <div key={index}>
              <img src={item.src} alt="" />
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Gallery
