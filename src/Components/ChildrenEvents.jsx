import React from 'react'
import { childrenEvents, teamMembers } from '../assets/assets'
import { Link } from 'react-router-dom'

function ChildrenEvents() {
  return (
    <div className='children-page'>
      <div className="eventsPage-heading">
        <h1>Exiciting Events For Children</h1>
        <p>"Fun, Learning, and Adventure – Magical Moments for Young Explorers!" 🌟🐠🎈</p>
      </div>

      <div className="eventsPage-container">
        {
          childrenEvents.map((item, index) => {
            return <Link to={`/Events/children/${item.name}`} key={index} className='event-description'>
              <div className='event-description-text'>
                <p className='text1'>
                  <div className="event-name">
                    <span className="id">{item.id}</span>
                    <span className='name'>{item.name}</span>
                  </div>
                  <span className='description'>{item.description}</span>
                </p>
                <h5 className='location'>{item.location}</h5>
                <p>
                  <span className='title'>Date</span>
                  <span>{item.date}</span>
                </p>
                <p>
                  <span className='title'>Activities</span>
                  {
                    item.activities.map((item, index) => (
                      <ul key={index}>
                        <li>{item.name}</li>
                      </ul>
                    ))
                  }
                </p>
                <p>
                  <span className='title'>Fees</span>
                  <ul>
                    <li>Entry Fees:{item.cost.entryFee}$</li>
                    <li>Activity Fees:{item.cost.activitiesFee}$</li>
                    <li>Total:{item.cost.total}$</li>
                  </ul>
                </p>
              </div>
              <div className='event-description-img' >
                <img src={item.image2} alt="" />
              </div>
            </Link>
          })
        }
      </div>
    </div>
  )
}

export default ChildrenEvents
