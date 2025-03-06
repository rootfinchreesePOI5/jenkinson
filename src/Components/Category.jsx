import React, { useEffect, useState } from 'react'
import { categories } from '../assets/assets';
import { Link, useParams } from 'react-router-dom';

function Category() {
  const [myCategory, setCategory] = useState([]);
  const { id: params } = useParams()
  const applyFilter = () => {
    if (params) {
      setCategory(categories.filter(item => item.name === params))
    }
  }

  useEffect(() => {
    applyFilter();
  }, [params])
  return (
    <div className='category'>
      {
        myCategory.map((item, index) => {
          return <div key={index} className='category-animal'>
            <img src={item.image} alt="" />
            <hr className="categories-arrow" />
            <div className="picked-category">
              <p>{item.name}</p>
              <p>{item.description}</p>
            </div>
            <hr className="categories-arrow" />
            <div className="categories-container">
              <h1 className='categories-heading'>{item.name} Categories</h1>
              <div className='picked-category-items'>
                {
                  item.animals.map((item, index) => (
                    <Link to={`/Categories/${item.name}`} key={index} className='picked-category-item'>
                      <img src={item.image} alt="" />
                      <h5>{item.name}</h5>
                      <p>{item.description}</p>
                    </Link>
                  ))
                }
              </div>
            </div>
            <div className='other-categories'>
              <h1>Other Categories</h1>
              <ul>
                {
                  categories.map((item, index) => {
                    return <Link key={index} to={`/Categories/${item.name}`}>{item.name}</Link>
                  })
                }
              </ul>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Category
