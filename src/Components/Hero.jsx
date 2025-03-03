import React from "react";
import { arrow, heroImg } from "../assets/images";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate()
  return (
    <div className="hero">
      {/* Hero Content */}
      <div className="hero-container">
        <div className="hero-container-item">
          <div className="hero-item1">
            <h5>Explore the deep sea with us , where over <i>Billions</i> of organism life and thrive</h5>
            <button onClick={() => { navigate('/Events'), scrollTo(0, 0) }}>
              <div className="arrow" >
                <img src={arrow} alt="" />
              </div>
              <p>Book An Event Now</p>
            </button>
          </div>

          <div className="hero-item2">
            <div className="hero-text">
              <h1>JENKINSON</h1>
              <p>SEA LIFE</p>
              <h5>EXPLORE THE WONDERS OF THE OCEAN</h5>
            </div>
            <div className="heroImg">
              <img src={heroImg} alt="Sea Life" />
            </div>
          </div>

          <div className="hero-item3">
            <div className="life">
              <h5>Live A Life Of Adventure</h5>
              <button className="cta-btn" onClick={() => {
                document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
              }}>
                Explore Now
              </button>

            </div>
            <div className="experience">
              <p>
                <span>{'10,000+'}</span>
                <span>Visitors</span>
              </p>
              <p>
                <span>5yr</span>
                <span>Aniversory</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Hero;
