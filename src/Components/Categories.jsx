import React from 'react'
import { categories } from '../assets/assets'
import { Link } from 'react-router-dom'

function Categories() {
  return (
    <div className='categories'>
      <h1 className="heading">Categories</h1>
      <div className="categories-container">
        <h1 className='categories-heading'>Marine Life Animals</h1>
        <hr  className='categories-arrow' />
        <div className='categories-branches'>
          <hr className='categories-arrow' />
          <hr className='categories-arrow' />
          <hr className='categories-arrow' />
          <hr className='categories-arrow' />
          <hr className='categories-arrow' />
          <hr className='categories-arrow' />
          <hr className='categories-arrow' />
        </div>
        <div className='category-items'>
          {
            categories.map((item, index) => (
              <Link to={`/Categories/${item.name}`} key={index} className='category-item'>
                  <img src={item.image} alt="" />
                  <h5>{item.name}</h5>
                  <p>{item.description}</p>
                  <div className="more">
                    <button>more</button>
                  </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Categories
