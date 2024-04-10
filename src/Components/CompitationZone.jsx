import indiaGlobe from '../Images/CompitationZone/Mask group.png'
import CompitationZone_flag from '../Images/CompitationZone/Frame 1405.png'
import stadium from '../Images/CompitationZone/Rectangle 4577.png'
import venus from '../Images/CompitationZone/Frame 1339.png'
import Dropdown from './Dropdown';

function CompitationZone() {
    return (
        <div className="CompitationZone">
            <div className="social">
                <div className="social_left compitation_left_EX">
                    <div className="CompitationZone_heading">
                        <h1 className='compitationZone'>COMPETITION ZONE</h1>
                        {/* <img src={CompitationZone_heading} alt="" /> */}
                    </div>
                    <div className="stadium">
                        <div className="stadium_img"><img src={stadium} alt="" width="100%" /></div>
                        <div className="stadium_intro">
                            <h4>Delhi</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quae id expedita perspiciatis repellendus vitae? Eius soluta officiis iure exercitationem asperiores tempore iusto sequi rem inventore dolore atque..</p>
                            <div className="stadium_footer">
                                <button className='explore_stadium'>Explore</button>
                                <img src={venus} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social_right">
                    <div className="dropdown_compitation_component">
                        <Dropdown dropdownName="Select a Country" />
                    </div>
                    <img src={CompitationZone_flag} alt="" className='flag' />
                    <img src={indiaGlobe} alt="" width="100%" />
                </div>
            </div>
        </div>
    )
}

export default CompitationZone