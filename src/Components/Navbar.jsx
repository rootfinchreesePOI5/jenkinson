import React, { useEffect, useState } from 'react'
import { logo, menuIcon, pin, x } from '../assets/images.js'
import { NavLink, useNavigate } from 'react-router-dom'
import { links } from '../assets/assets.js'

function Navbar({ menu, setMenu }) {
  const [count, setCount] = useState(() => {
    return localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 1;
  });

  const switchMenu = () => {
    setMenu((prev) => !prev); // Toggle menu state
  };

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        localStorage.setItem('count', newCount);
        return newCount;
      });
    }, 10000);

    return () => {
      clearInterval(interval);
      localStorage.removeItem('count');
    };
  }, []);

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
              <p>Online Visitors:</p>
              <span>{count}</span>
            </div>
          </div>
          <p onClick={() => { navigate('/Contact'); scrollTo(0, 0) }} className='txt'>
            Find Us <img src={pin} alt="Location" />
          </p>
        </div>
      </nav>

      {/* Menu Toggle Button */}
      <img className='menu-toogle' onClick={switchMenu} src={menu ? x : menuIcon} alt="Menu Toggle" />
    </div>
  );
}

export default Navbar;
