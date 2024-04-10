import the_mascot from '../Images/Mascot/Mascot.png'
import Rectangle from '../Images/Mascot/Rectangle 4598.png'
import inner_frame from '../Images/Mascot/Frame 1442.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Mascot() {
    return (
        <div className="mascot_container">
            <div className="mascot_inner_container">
                <div className="mascot_left">
                    <div className="mascor_head">
                        {/* <img src={the_mascot} alt="" /> */}
                        <div className="mascot_heading">
                            <p>Hi! I AM</p>
                            <h1>THE <br /> MASCOT</h1>
                        </div>
                        <p className='moscat_p'>Meet Himalayan Monal, The Mascot for the 38th National Games Uttarakhand 2024.known as the Impeyan Monal. This bird is also the state bird of uttarkhand.</p>
                        <button className='mascot_btn'>MEET MASCOT </button>
                    </div>
                </div>
                <div className="mascot_right">
                    <div className="outer_image">
                        <img src={Rectangle} alt="" width="100%" style={{ zIndex: '0' }} />
                        <img src={inner_frame} alt="" width="60%" className='inner_image_moscat' style={{ zIndex: '1' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mascot