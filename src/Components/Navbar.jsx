import React, { useEffect, useState } from 'react'
import { logo, pin } from '../assets/images.js'
import { NavLink, useNavigate } from 'react-router-dom'
import { links } from '../assets/assets.js'

function Navbar() {
  const [count, setCount] = useState(() => {
    return localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 1;
  });

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        localStorage.setItem('count', newCount);
        return newCount;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      localStorage.removeItem('count');
    };
  }, []);

  return (
    <div className='header'>
      <div className='logo'>
        <img onClick={() => { navigate('/'), scrollTo(0, 0) }} className='logoImg' src={logo} alt="" />
        {/* <p>Jenkinson Sea Life</p> */}
      </div>
      <nav className='navbar'>
        <div className='navlinks'>
          {
            links.map((item, index) => {
              return <NavLink key={index} to={`${item.link}`}>
                <p>{item.name}</p>
                <hr />
              </NavLink>
            })
          }
        </div>
        <div className='explore'>
          <div className='count'>
            <p className='dot'></p>
            <div className="number">
              <p>Online Visitors:</p>
              <span>{count}</span>
            </div>
          </div>
          <p onClick={() =>{navigate('/Contact'), scrollTo(0 , 0)}} className='txt'>Find Us <img src={pin} alt="" /></p>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
