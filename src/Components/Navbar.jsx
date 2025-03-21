import React, { useEffect, useState } from 'react'
import { logo, menuIcon, pin, whiteloc, x } from '../assets/images.js'
import { NavLink, useNavigate } from 'react-router-dom'
import { links } from '../assets/assets.js'

function Navbar({ menu, setMenu }) {

  const switchMenu = () => {
    setMenu((prev) => !prev); // Toggle menu state
  };

  const navigate = useNavigate();


  const [count, setCount] = useState(() => {
    return localStorage.getItem("count") ? parseInt(localStorage.getItem("count")) : 1;
  });

  useEffect(() => {
    const newCount = count + 1; // Increment count
    setCount(newCount);
    localStorage.setItem("count", newCount);
  }, []); // Run only once on mount (refresh)


  return (
    <div className='header'>
      <div className='logo'>
        <img onClick={() => { navigate('/'); scrollTo(0, 0) }} className='logoImg' src={logo} alt="Logo" />
      </div>

      {/* Mobile Navbar */}
      <nav className='mobile-navbar' style={menu === false ? {transform:'translateX(-100%)'} : {transform:'translateX(0%)'}} >
        <div className='mobile-links'>
          {links.map((item, index) => (
            <NavLink onClick={switchMenu} key={index} to={item.link}>
              <p>{item.name}</p>
              <hr />
            </NavLink>
          ))}
        </div>
        <div className='explore'>
          <div className='count'>
            <p className='dot'></p>
            <div className="number">
              <p>Online Visitors:</p>
              <span>{count}</span>
            </div>
          </div>
          <p onClick={() => { navigate('/Contact'); scrollTo(0, 0) }} className='txt'>
            Find Us <img src={pin} alt="Location" />
          </p>
        </div>
      </nav>

      {/* Desktop Navbar */}
      <nav className='navbar'>
        <div className='navlinks'>
          {links.map((item, index) => (
            <NavLink  key={index} to={item.link}>
              <p>{item.name}</p>
              <hr />
            </NavLink>
          ))}
        </div>
        <div className='explore'>
          <div className='count'>
            <p className='dot'></p>
            <div className="number">
              <p>Visitor Count:</p>
              <span>{count}</span>
            </div>
          </div>
          <p onClick={() => { navigate('/Contact'); scrollTo(0, 0) }} className='txt'>
            Find Us <img src={whiteloc} alt="Location" />
          </p>
        </div>
      </nav>

      {/* Menu Toggle Button */}
      <img className='menu-toogle' onClick={switchMenu} src={menu ? x : menuIcon} alt="Menu Toggle" />
    </div>
  );
}

export default Navbar;
