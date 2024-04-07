import medal_guy from "../Images/medals/Rectangle 4591.png";
import medal_table from "../Images/medals/Frame 1432.png";
function Medals() {
    return (
        <>
            <div className="container_medals">
                <div className="inner_medals_container">
                    <div className="medals_left">
                        <img src={medal_table} alt="" />
                        <div className="btns_m">
                            <button className="medal_btns">REFRESH</button>
                            <button className="medal_btns">VIEW MORE</button>
                        </div>
                        {/* <div className="medals_head">
                            <span className="logo_medal"><img src="" alt="" /></span>
                            <div className="h1">Medal Tally</div>
                        </div>
                        <div className="medal_table"></div> */}
                    </div>
                    <div className="medals_right">
                        <img src={medal_guy} alt="" width="100%" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Medals