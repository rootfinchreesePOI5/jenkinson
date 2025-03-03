import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { childrenEvents, events } from '../assets/assets';

function Event() {
    const [MyEvents, setEvents] = useState([]);
    const navigate = useNavigate()
    const { id: params } = useParams();
    const applyFilter = () => {
        setEvents(events.filter(item => item.name === params))
    }
    useEffect(() => {
        if (params) {
            applyFilter();
        } else {
            setEvents(events)
        }
    }, [params]);
    return (
        <div className='MyEvent'>
            <div className="eventsPage-container">
                {
                    MyEvents.map((item, index) => {
                        return <div>
                            <Link to={`/Events/${item.name}`} key={index} className='event-description'>
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
                            <div className='event-team'>
                                {
                                    item.activities.map((item, index) => (
                                        <div key={index}>
                                            <span className='teammember-heading'>Team Members for: {item.name}</span>
                                            <div className='event-teammember'>
                                                {
                                                    item.team.map((item, index) => (
                                                        <ul key={index}>
                                                            <li>{item.name}</li>
                                                        </ul>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='events-btn'>
                                <button onClick={() => { navigate('/Events'), scrollTo(0, 0) }} >Explore more</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Event
