import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { events, teamMembers } from '../assets/assets';
import ChildrenEvents from '../Components/ChildrenEvents';

const Events = () => {
  return (
    <div className='EventsPage'>
      <div className="eventsPage-heading">
        <h1>Participate in our Exiciting Events</h1>
        <p>"Explore, Engage, and Make Waves – Unforgettable Events Await!" 🌊🎉</p>
      </div>

      <div className="eventsPage-container">
        {
          events.map((item, index) => {
            return <Link to={`/Events/${item.name}`} key={index} className='event-description'>
              <div className='event-description-text'>
                <p className='text1'>
                  <span className='name'>{item.name}</span>
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

      {/* children events */}
      <div>
        <ChildrenEvents/>
      </div>

      {/* team */}
      <div className='Team'>
        <div className="about-heading">
          <h1>MEET THE TEAM</h1>
          <p>"United by Passion, Driven by Purpose – Meet the Team Behind the Mission!" 🚀🤝🌍</p>
        </div>
        <div className='team-container'>
          {
            teamMembers.slice(0, 3).map((item, index) => (
              <div className='teammember'>
                <img src={item.image} alt="" />
                <p>{item.role}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Events
