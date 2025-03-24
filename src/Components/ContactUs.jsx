import React, { useState } from 'react'
import GoogleMapComponent from './GoogleMapComponent'
import { location, phone, time } from '../assets/images'
import { toast } from 'sonner';

function ContactUs() {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "e9909238-8860-4ddd-82f6-f1722546689a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            toast.success('Welcome to Jenkinson Sea Life')
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div className='ContactUs'>
            <div className="events-heading">
                <h1>You Have Found Us</h1>
                <p>Don't give up now Contact-Us and participate in our events</p>
            </div>
            <div className="contact-container">
                <div className='contact-item'>
                    <GoogleMapComponent />
                </div>
                <div className='contact-item2'>
                    <h1>Contact Us</h1>
                    <form onSubmit={onSubmit}>
                        <div className="label">
                            <label>Name*</label>
                            <input type="text" placeholder='Enter Your Name' required/>
                        </div>
                        <div className="label">
                            <label>Email*</label>
                            <input type="email" placeholder='Enter Your Email'required/>
                        </div>
                        <button type='submit'>Join Us</button>
                    </form>
                    <div className="phone">
                        <img src={phone} alt="" />
                        <p>
                            <span>
                                Customer Service:
                            </span>
                            <span>
                                +65 81-54-63-35
                            </span>
                        </p>
                    </div>
                    <div className="address">
                        <img src={location} alt="" />
                        <div>
                            <span>
                                Windsor Park Road, Singapore, 574177
                            </span>
                            <span>
                                Bishan Singapore Singapore
                            </span>
                        </div>
                    </div>
                    <div className="time">
                        <img src={time} alt="" />
                        <div>
                            <span>
                                Opening: 8.00am
                            </span>
                            <span>
                                Closing: 5.30pm
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
