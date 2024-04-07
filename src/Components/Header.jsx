import menu from "../Images/Frame 1356.png";
import company_logo from "../Images/white 1.png";
import tab_india from "../Images/Frame 1361.png";
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
                    <img src={tab_india} width="40%" alt="" />
                </div>
                <div className="head_mid">
                    <div className="right">
                        <img src={Heading} width="80%" alt="" />
                        {/* <h1>The 38th National <br /> Games, U</h1> */}
                    </div>
                    <div className="left">
                        <div className="inner_content">
                            <div className="btn_live_registration"><button type="submit">Live Registration</button></div>
                            <div className="left_content_header">
                                <h3>The Game Live Registration</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maiores corrupti repellendus, nesciunt asperiores architecto totam accusantium ut quidem at numquam laborum neque nihil similique provident sapiente temporibus nemo possimus minima illo. Quos placeat corrupti eligendi eaque? Cumque, mollitia atque?</p>
                            </div>
                        </div>
                        <div className="inner_content">
                            <div className="btn_live_registration"><button type="submit">Live Accredation</button></div>
                            <div className="left_content_header">
                                <h3>The Game Live Accredation</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maiores corrupti repellendus, nesciunt asperiores architecto totam accusantium ut quidem at numquam laborum neque nihil similique provident sapiente temporibus nemo possimus minima illo. Quos placeat corrupti eligendi eaque? Cumque, mollitia atque?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
