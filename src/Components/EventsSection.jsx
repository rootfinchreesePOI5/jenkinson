import React from 'react'
import { events } from '../assets/assets'
import { Link } from 'react-router-dom'

function EventsSection() {
    return (
        <div className='EventsSection'>
            <div className="events-heading">
                <h1>Upcoming Events</h1>
                <p>You can relay on our amazing staff who promise a great experience without a doubt</p>
            </div>
            <div className="events-container">
                <div className='event-item'>
                    {
                        events.slice(0, 1).map((item, index) => {
                            return <Link key={index} className='event' to={`/Events/${item.name}`}>
                                <div className="event-text">
                                    <img src={item.image} alt="" />
                                    <h1>{item.name}</h1>
                                    <p>{item.description}</p>
                                </div>
                            </Link>
                        })
                    }
                </div>
                <div className='event-item'>
                    {
                        events.slice(1, 2).map((item, index) => {
                            return <Link key={index} className='event' to={`/Events/${item.name}`}>
                                <div className="event-text">
                                    <img src={item.image} alt="" />
                                    <h1>{item.name}</h1>
                                    <p>{item.description}</p>
                                </div>
                            </Link>
                        })
                    }
                </div>
                <div className='event-item'>
                    {
                        events.slice(2, 3).map((item, index) => {
                            return <Link key={index} className='event' to={`/Events/${item.name}`}>
                                <div className="event-text">
                                    <img src={item.image} alt="" />
                                    <h1>{item.name}</h1>
                                    <p>{item.description}</p>
                                </div>
                            </Link>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default EventsSection
