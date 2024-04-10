import React from 'react';
import img1 from '../Images/Schedule/games/image 6.png';
import img2 from '../Images/Schedule/games/image 7.png';
import img3 from '../Images/Schedule/games/image 8.png';
import Dropdown from './Dropdown';

const eventData = [
    {
        time: '08:30:00',
        sport: 'Golf',
        event: "Men's Individual",
        round: 'Round 3',
        venue: 'Indira Gandhi International Sports Stadium',
        image: img1 // Assigning img1 to the first event
    },
    {
        time: '09:15:00',
        sport: 'Football',
        event: "Men's Team",
        round: 'League',
        venue: 'Haldwani Sports Stadium',
        image: img2 // Assigning img1 to the first event
    },
    {
        time: '10:30:00',
        sport: 'Judo',
        event: "Women's 48 Kg",
        round: 'Elimination',
        venue: 'Indira Gandhi International Sports Stadium',
        image: img3 // Assigning img1 to the first event
    },
    {
        time: '07:00:00',
        sport: 'Golf',
        event: "Women's 48 Kg",
        round: 'Elimination',
        venue: 'Haldwani Sports Stadium',
        image: img1 // Assigning img1 to the first event
    },
    {
        time: '11:45:00',
        sport: 'Basketball',
        event: "Men's Team",
        round: 'Quarterfinals',
        venue: 'National Basketball Arena',
        image: img1 // Assigning img1 to the first event
    },
    {
        time: '13:30:00',
        sport: 'Swimming',
        event: "Men's 200m Freestyle",
        round: 'Final',
        venue: 'City Aquatic Center',
        image: img1 // Assigning img1 to the first event
    },
    // Add more events as needed
];


export default function Schedule_container() {
    return (
        <div className='schedule_image'>
            <div className="inner_schedule">
                <div className="schedule_head">
                    <h1 className='schedule_heading'>SCHEDULE</h1>
                    {/* <span><img src={schedule_heading} width="55%" alt="" /></span> */}
                    <div className="dropdown_btns">
                        <Dropdown dropdownName="Select Date" />
                        <Dropdown dropdownName="All Games" />
                    </div>
                </div>
                <div className='s_table'>
                    <table className="schedule_table">
                        <thead>
                            <tr style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                                <th></th>
                                <th>Time</th>
                                <th>Sports</th>
                                <th>Events</th>
                                <th>Round/Pool</th>
                                <th>Venue</th>
                            </tr>
                        </thead>
                        <tbody>
                            {eventData.map((event, index) => (
                                <tr key={index}>
                                    <td><img src={event.image} alt="" /></td>
                                    <td>{event.time}</td>
                                    <td>{event.sport}</td>
                                    <td>{event.event}</td>
                                    <td>{event.round}</td>
                                    <td className='venues'>{event.venue}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* <img src={schedule_table} width="100%" alt="" /> */}
                </div>
            </div>
        </div>
    );
}
