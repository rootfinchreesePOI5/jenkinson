import React, { useState } from 'react'
import { ratingStars, Review } from '../assets/assets'
import { star, starfilled } from '../assets/images'
import {toast } from 'sonner'

function Visitors() {
    const [rating, setRating] = useState(0);
    const [reviwText , setText] = useState('')

    const ratingStars = Array(5)
        .fill(null)
        .map((_, index) => (index < rating ? starfilled : star));

    const submitReviw = (e) => {
        e.preventDefault();
        document.getElementById('text').value = ''
        setRating(0);
        toast.success('Thanks for the review');
    }
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
            <div className="visitor-rating">
                <h1>Rate Us and Review</h1>
                <div>
                    {ratingStars.map((item, index) => (
                        <img
                            className="stars"
                            key={index}
                            src={item}
                            alt={`Star ${index + 1}`}
                            onClick={() => setRating(index + 1)} // Set rating on click
                            style={{ cursor: "pointer" }} // Make it clickable
                        />
                    ))}
                </div>
                <form onSubmit={submitReviw} className="review-container">
                    <input id='text' onChange={(e) => setText(e.target.value)} type="text" required placeholder='Your review' />
                    <button  type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Visitors
