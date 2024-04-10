import sports_games_Archery from '../Images/Sports/Archery_Pose_lit 1.png';
function Sports() {
    return (
        <div className="sports_container">
            <div className="up_container_sports">
                <h1 className='sports_heading'>SPORTS</h1>
                <button className='sprts_btn'>VIEW MORE</button>
            </div>
            <div className="container_sports">
                <div className="sportsContainer">
                    <div className="boxs_sports">
                        <img src={sports_games_Archery} alt="" width="60%" />
                        <p>ARCHERY</p>
                    </div>
                    <div className="boxs_sports">
                        <img src={sports_games_Archery} alt="" width="60%" />
                        <p>ARCHERY</p>
                    </div>
                    <div className="boxs_sports">
                        {/* <div className="black"></div> */}
                        {/* <img src={sports_games_Archery} alt="" width="60%" /> */}
                        {/* <p>ARCHERY</p> */}
                    </div>
                    <div className="boxs_sports">
                        <img src={sports_games_Archery} alt="" width="60%" />
                        <p>ARCHERY</p>
                    </div>
                    <div className="boxs_sports">
                        <img src={sports_games_Archery} alt="" width="60%" />
                        <p>ARCHERY</p>
                    </div>
                    <div className="boxs_sports">
                        <img src={sports_games_Archery} alt="" width="60%" />
                        <p>ARCHERY</p>
                    </div>
                    <div className="boxs_sports">
                        <img src={sports_games_Archery} alt="" width="60%" />
                        <p>ARCHERY</p>
                    </div>
                    <div className="boxs_sports">
                        <img src={sports_games_Archery} alt="" width="60%" />
                        <p>ARCHERY</p>
                    </div>
                    <div className="boxs_sports">
                        <img src={sports_games_Archery} alt="" width="60%" />
                        <p>ARCHERY</p>
                    </div>
                    <div className="boxs_sports">
                        <img src={sports_games_Archery} alt="" width="60%" />
                        <p>ARCHERY</p>
                    </div>
                    <div className="boxs_sports">
                        <img src={sports_games_Archery} alt="" width="60%" />
                        <p>ARCHERY</p>
                    </div>
                    <div className="boxs_sports">
                        <img src={sports_games_Archery} alt="" width="60%" />
                        <p>ARCHERY</p>
                    </div>
                </div>
                {/* <img src={sports_games} alt="" width="90%" /> */}
            </div>
        </div>
    )
}

export default Sports