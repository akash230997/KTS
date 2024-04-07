import soccer from '../Images/Social/Rectangle 4601.png';
import followUs from '../Images/Social/FOLLOW US.png';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import uttrakhand_social from '../Images/Social/#uttrakhandgames2024 (1).png';
function Social() {
    return (
        <div className="social">
            <div className="social_left">
                <div className="followUs">
                    <img src={followUs} alt="" />
                </div>
                <div className="social_media">
                    <ul>
                        <li><XIcon /></li>
                        <li><FacebookIcon /></li>
                        <li><InstagramIcon /></li>
                        <li><LinkedInIcon /></li>
                    </ul>
                </div>
                <div className="uttrakhand_social">
                    <img src={uttrakhand_social} alt="" />
                </div>
            </div>
            <div className="social_right">
                <img src={soccer} alt="" />
            </div>
        </div>
    )
}

export default Social