import Games_partners from "../Images/Partners/Frame 1313.png"
import Games_partners2 from "../Images/Partners/secondSection/Frame 1314.png"
import Games_partners3 from "../Images/Partners/ThirdSection/Frame 1319.png"
import Games_partners4 from "../Images/Partners/ThirdSection/Frame 1319.png"
import Games_partners5 from "../Images/Partners/FifthSection/Frame 1332.png"
import Game from "../Images/Partners/Frame 1312.png"
import Game2 from "../Images/Partners/Frame 1311.png"
import Game3 from "../Images/Partners/Frame 1310.png"
import Game4 from "../Images/Partners/Frame 1309.png"
// Second 
import Game5 from "../Images/Partners/secondSection/Frame 1315.png"
import Game6 from "../Images/Partners/secondSection/Frame 1316.png"
import Game7 from "../Images/Partners/secondSection/Frame 1317.png"
// Third
import Game8 from "../Images/Partners/ThirdSection/Frame 1320.png"
import Game9 from "../Images/Partners/ThirdSection/Frame 1321.png"
import Game10 from "../Images/Partners/ThirdSection/Frame 1322.png"
import Game11 from "../Images/Partners/ThirdSection/Frame 1323.png"
// Fourth
import Game13 from "../Images/Partners/FouthSection/Frame 1327.png"
import Game14 from "../Images/Partners/FouthSection/Frame 1329.png"
import Game15 from "../Images/Partners/FouthSection/Frame 1330.png"
import Game16 from "../Images/Partners/FouthSection/Frame 1331.png"
// Fifith
import Game17 from "../Images/Partners/FifthSection/Frame 1315.png"
import Game18 from "../Images/Partners/FifthSection/Frame 1316.png"
import GamersPartners from "./GamersPartners"

function Partners() {
    return (
        <div className="partners">
            <div className="partners_container">
                <div className="top_partners">
                    <div className="headP">
                        {/* <img src={Games_partners} alt="" /> */}
                        <GamersPartners props="GAMES PARTNERS" />
                    </div>
                    <div className="games_partners_box">
                        <img src={Game} alt="" />
                        <img src={Game2} alt="" />
                        <img src={Game3} alt="" />
                        <img src={Game4} alt="" />
                    </div>
                </div>
                <div className="top_partners" style={{ marginTop: "50px" }}>
                    <div className="headP">
                        <GamersPartners props="SUPPORTED BY" />
                        {/* <img src={Games_partners2} alt="" /> */}
                    </div>
                    <div className="games_partners_box">
                        <img src={Game5} alt="" />
                        <img src={Game6} alt="" />
                        <img src={Game7} alt="" />
                    </div>
                </div>
                <div className="top_partners" style={{ marginTop: "50px" }}>
                    <div className="headP">
                        <GamersPartners props="ASSOCIATE SPONSORS" />
                        {/* <img src={Games_partners3} alt="" /> */}
                    </div>
                    <div className="games_partners_box">
                        <img src={Game8} alt="" />
                        <img src={Game9} alt="" />
                        <img src={Game10} alt="" />
                        <img src={Game11} alt="" />
                    </div>
                </div>
                <div className="top_partners" style={{ marginTop: "50px" }}>
                    <div className="headP">
                        <GamersPartners props="PARTNERS" />
                        {/* <img src={Games_partners4} alt="" /> */}
                    </div>
                    <div className="games_partners_box">
                        <img src={Game13} alt="" />
                        <img src={Game14} alt="" />
                        <img src={Game15} alt="" />
                        <img src={Game16} alt="" />
                    </div>
                </div>
                <div className="top_partners" style={{ marginTop: "50px" }}>
                    <div className="headP">
                        <GamersPartners props="BROADCAST PARTNERS" />
                        {/* <img src={Games_partners5} alt="" /> */}
                    </div>
                    <div className="games_partners_box">
                        <img src={Game17} alt="" />
                        <img src={Game18} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners