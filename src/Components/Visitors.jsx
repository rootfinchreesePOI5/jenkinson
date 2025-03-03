import React from 'react'
import { Review } from '../assets/assets'

function Visitors() {
    return (
        <div className='Visitors'>
            <div className="visitors-heading">
                <h1>WHAT OUR VISITORS HAVE TO SAY</h1>
                <p>Hear What Our Happy Clients Have to Say About Their Unforgettable Experiences and Seamless Journey With Us.</p>
            </div>
            <div className="visitors-container">
                {
                    Review.map((item, index) => {
                        return <div key={index} className='visitor-review'>
                            <span>⭐⭐⭐⭐⭐</span>
                            <p>{item.comment}</p>
                            <div className='visitor'>
                                <img src={item.img} alt="" />
                                <p>
                                    <span>{item.name}</span>
                                    <span>{item.destination}</span>
                                </p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Visitors
