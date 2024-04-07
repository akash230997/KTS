import Year from "../Images/Footer/Group 1393.png";
import guy_btn from "../Images/Footer/Group 1379.png";
import apple_app from "../Images/Footer/app-store 1.png";
import android_app from "../Images/Footer/google-play 1.png";
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {
    return (
        <>
            <div className='Footer'>
                <div className="footer_container">
                    <div className="secA">
                        <div className="social_media">
                            <img src={Year} alt="" />
                            <h2 style={{ color: "#fff" }}>DOWNLOAD THE APP</h2>
                            <ul>
                                <li><XIcon style={{ color: "#fff" }} /></li>
                                <li><FacebookIcon style={{ color: "#fff" }} /></li>
                                <li><InstagramIcon style={{ color: "#fff" }} /></li>
                                <li><LinkedInIcon style={{ color: "#fff" }} /></li>
                            </ul>
                        </div>
                        <div className="helpline">
                            <img src={guy_btn} alt="" />
                            <button className="hlp_btn">Helpline</button>
                        </div>
                    </div>
                    <div className="secA">
                        <div className="blockA">
                            <h2>NATIONAL GAMES 2024</h2>
                            <ul>
                                <li>Home</li>
                                <li>Schedule and Result</li>
                                <li>Medal Tally</li>
                                <li>Media</li>
                                <li>Visit</li>
                                <li>Teams</li>
                                <li>Milestones</li>
                                <li>Games Culture</li>
                            </ul>
                        </div>
                    </div>
                    <div className="secA">
                        <div className="blockA games_2024">
                            <h2>NATIONAL GAMES 2024</h2>
                            <div className="columns">
                                <ul className="column">
                                    <li>Aquatics</li>
                                    <li>Swimming</li>
                                    <li>Diving</li>
                                    <li>Water Polo</li>
                                    <li>Archery</li>
                                    <li>Athletics</li>
                                    <li>Badminton</li>
                                    <li>Basketball</li>
                                    <li>Boxing</li>
                                    <li>Canoeing</li>
                                    <li>Canoe - Sprint</li>
                                    <li>Canoe - Slalom</li>
                                    <li>Kayaking</li>
                                    <li>Rowing</li>
                                    <li>Cycling</li>
                                    <li>BMX</li>
                                    <li>Road Racing</li>
                                </ul>
                                <ul className="column">
                                    <li>Track Racing</li>
                                    <li>Equestrien</li>
                                    <li>Fencing</li>
                                    <li>Football</li>
                                    <li>Gymnastics</li>
                                    <li>Golf</li>
                                    <li>Handball</li>
                                    <li>Beach Handball</li>
                                    <li>Hockey</li>
                                    <li>judo</li>
                                    <li>Kabaddi</li>
                                    <li>Karate-Do</li>
                                    <li>Kho-Kho</li>
                                    <li>Test Sports</li>
                                    <li>Netball</li>
                                    <li>Rugby Sevens</li>
                                    <li>Saling</li>
                                </ul>
                                <ul className="column">
                                    <li>Sepaktakraw</li>
                                    <li>Shooting</li>
                                    <li>Shooting Rifle</li>
                                    <li>Shooting Piston</li>
                                    <li>Shooting Shotgun</li>
                                    <li>Squash</li>
                                    <li>Taekwondo</li>
                                    <li>Tennis</li>
                                    <li>Table Tennis</li>
                                    <li>Traithlon</li>
                                    <li>Vollyball</li>
                                    <li>Beach Vollyball</li>
                                    <li>Weightlifting</li>
                                    <li>Wrestling</li>
                                    <li>Wushu</li>
                                    <li>Synchronized Swimming</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="secA">
                        <div className="blockA">
                            <h2>UKGOC INFO</h2>
                            <ul>
                                <li>Director Sports</li>
                                <li>Sports and Directrate, Uttarakhand</li>
                                <li>Maharana Pratap Sports Collage Campus, Raipur, Dehradhun</li>
                                <li>pin - 248008</li>
                                <li>Ph - 0135-2781414</li>
                                <li>Email - directorsports@gmail.com</li>
                            </ul>
                            <h2>DOWNLOAD THEAPP</h2>
                            <div className="apps">
                                <img src={apple_app} alt="" />
                                <img src={android_app} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy">
                <div className="copy_container">
                    <div className="copyright">COPYRIGHT ©️ UTTARAKHAND NATIONAL GAMES ORGANIZATION COMMITTEE</div>
                    <div className="visitors"><span>VISITORS : 5553232</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>PRIVACY</span></div>
                </div>
            </div>
        </>

    )
}

export default Footer