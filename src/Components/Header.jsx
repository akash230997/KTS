import menu from "../Images/Frame 1356.png";
import company_logo from "../Images/white 1.png";
// import tab_india from "../Images/Frame 1361.png";
import tab_india1 from "../Images/Timer/Seal_of_Uttarakhand 1.png";
import tab_india2 from "../Images/Timer/sport_2 1.png";
import tab_india3 from "../Images/Timer/Ministry_of_Youth_Affairs_and_Sports 2.png";
import tab_india4 from "../Images/Timer/Copy of IOA_-_Institutional_Logo_PNG (1) 1.png";
import tab_india5 from "../Images/Timer/medal-gold-belt 1.png";
import Heading from "../Images/Heading.png";
import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: "30px",
    border: "1px solid #fff",
    padding: "5px",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
    // display: "flex",
    // alignItems: "center"
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function Header() {
    const [timer, setTimer] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
        ampm: 'AM' // initial AM/PM value
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            let hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            let ampm = 'AM';

            // Convert to 12-hour format
            if (hours > 12) {
                hours -= 12;
                ampm = 'PM';
            }

            // Handle midnight
            if (hours === 0) {
                hours = 12;
            }

            // Prepend '0' if hours less than 10
            hours = hours < 10 ? `0${hours}` : hours;

            setTimer({ hours, minutes, seconds, ampm });
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    console.log("timer", timer);
    return (
        <>
            <div className="Head">
                <div className="top_head">
                    <div className="menu">
                        <img src={menu} alt="" />
                    </div>
                    <div className="company_logo">
                        <img src={company_logo} width="80%" alt="" />
                    </div>
                    <div className="navbar">
                        <nav>
                            <ul>
                                <li><span></span>Ticketing</li>
                                <li><span></span>Shop</li>
                                <li><span></span>Login</li>
                                <li>
                                    <Search>
                                        <div className="search">
                                            <SearchIconWrapper>
                                                <SearchIcon />
                                            </SearchIconWrapper>
                                            <StyledInputBase
                                                placeholder="Search…"
                                                inputProps={{ 'aria-label': 'search' }}
                                            />
                                        </div>
                                    </Search>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="tab_india">
                    <div className="tab_india_block">
                        <div className="images_tabIndia">
                            <img src={tab_india1} alt="" />
                            <img src={tab_india2} alt="" />
                            <img src={tab_india3} alt="" />
                            <img src={tab_india4} alt="" />
                            <img src={tab_india5} alt="" />
                        </div>
                        <div className="days_hrs">
                            <div className="days">
                                <h1>179</h1>
                                <p>Days</p>
                            </div>
                            <div className="timer">
                                <div className="hrsT">
                                    <h1>{timer.hours}</h1>
                                    <p>HOURS</p>
                                </div>
                                <div className="hrsT">
                                    <h1>{timer.minutes}</h1>
                                    <p>MINS</p>
                                </div>
                                <div className="hrsT">
                                    <h1>{timer.seconds}</h1>
                                    <p>SEC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <img src={tab_india} width="40%" alt="" /> */}
                </div>
                <div className="head_mid">
                    <div className="right">
                        <h1 style={{ color: "#fff" }}>The 3<sup style={{ position: 'relative', top: '15px', fontSize: '4rem' }}>8</sup>th National Games, Uttrakhand 2024</h1>
                        <p style={{ color: "#fff" }}>Where fervour Converges with brillience! Immerse yourself in the exhilarating spectacle as atheletics gailing from every corner of uttrakhand view of victory in a dazzling display of skill and camaradise. Come togeather to commenmorate our abundant sporting legacy and kindle the flame of togeatherness. Brace yourself for an Indelible odyssey towards sporting eminence. Prepare to dive into the excitement and witness the enchancment of the National Games hosted in Uttrakhand!</p>

                        {/* <img src={Heading} width="80%" alt="" /> */}
                        {/* <h1>The 38th National <br /> Games, U</h1> */}
                    </div>
                    <div className="left">
                        <div className="inner_content">
                            <div className="btn_live_registration"><button type="submit">Live Registration</button></div>
                            <div className="left_content_header">
                                <h3>The Game Live Registration</h3>
                                <p style={{ color: "#fff" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maiores corrupti repellendus, nesciunt asperiores architecto totam accusantium ut quidem at numquam laborum neque nihil similique provident sapiente temporibus nemo possimus minima illo. Quos placeat corrupti eligendi eaque? Cumque, mollitia atque?</p>
                            </div>
                        </div>
                        <div className="inner_content">
                            <div className="btn_live_registration"><button type="submit">Live Accredation</button></div>
                            <div className="left_content_header">
                                <h3>The Game Live Accredation</h3>
                                <p style={{ color: "#fff" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maiores corrupti repellendus, nesciunt asperiores architecto totam accusantium ut quidem at numquam laborum neque nihil similique provident sapiente temporibus nemo possimus minima illo. Quos placeat corrupti eligendi eaque? Cumque, mollitia atque?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
