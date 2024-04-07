import schedule_heading from '../Images/Schedule/You Can Help Lots of People by Donating Little.png'
import schedule_table from '../Images/Schedule/Frame 1265.png'
import Dropdown from './Dropdown'



export default function Schedule_container() {
    return (
        <div className='schedule_image'>
            <div className="inner_schedule">
                <div className="schedule_head">
                    <span><img src={schedule_heading} width="55%" alt="" /></span>
                    <div className="dropdown_btns">
                        <Dropdown dropdownName="Select Date" />
                        <Dropdown dropdownName="All Games" />
                    </div>
                </div>
                <div className="schedule_table">
                    <img src={schedule_table} width="100%" alt="" />
                </div>
            </div>
        </div>
    )
}
