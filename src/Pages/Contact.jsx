import React, { useState } from 'react'
import GoogleMapComponent from '../Components/GoogleMapComponent'
import { toast } from 'sonner';

function Contact() {

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
            toast.success(data.message)
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
            toast.error(data.message)
        }
    };
  return (
    <div className='contact'>
      <div className="about-heading">
        <h1>Contact Us</h1>
        <p>"Get in Touch – We're Here to Connect, Support, and Inspire!" 📞✉️🌍</p>
      </div>
      {/* Contact Info Section */}
      <div className="contact-info">
                <div className="info-box">
                    <h2>Our Address</h2>
                    <p>123 Ocean Avenue, Singapore</p>
                </div>
                <div className="info-box">
                    <h2>Email Us</h2>
                    <p>info@jenkinsonsealife.com</p>
                </div>
                <div className="info-box">
                    <h2>Call Us</h2>
                    <p>+65 1234 5678</p>
                </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
                <h2>Send Us a Message</h2>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>

            {/* Google Map Component */}
            <div className="map-container">
                <GoogleMapComponent />
            </div>
    </div>
  )
}

export default Contact
