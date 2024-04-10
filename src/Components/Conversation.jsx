import cricket from '../Images/Conversation/Rectangle 4591.png'
import para from '../Images/Conversation/Join the.png'
import conversation_heading from '../Images/Conversation/Conversation.png'
import uttrakhand_games from '../Images/Conversation/#uttrakhandgames2024.png'
import unique_table from '../Images/Conversation/unique_table2.png'

function Conversation() {
    return (
        <div className="mascot_container">
            <div className="conversation">
                <div className="left_conversation">
                    <div className="para">Join the</div>
                    <div className="conversation_heading"><h1 className='Conversation_headin'>Conversation</h1></div>
                    <div className="uttrakhand_games"><p className='uttrakhand_games'>#UTTRAKHANDGAMES2024</p></div>
                    <div className="unique_table">
                        <div className="unique_box">
                            <div className="upContainer">
                                <div className="boxx">
                                    <p>ALL TOGEATHER</p>
                                    <div className="box_inner">
                                        <h1>28</h1>
                                        <p>State</p>
                                    </div>
                                </div>
                                <div className="boxx brs">
                                    <p>COLLECTIVELY</p>
                                    <div className="box_inner">
                                        <h1>8 + 1</h1>
                                        <p>UNION TERRITORY & CONTROL BOARD</p>
                                    </div>
                                </div>
                                <div className="boxx">
                                    <p>WE ARE UNIFIED</p>
                                    <div className="box_inner">
                                        <h1>8000+</h1>
                                        <p>ATHLETES</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bottomContainer">
                                <div className="boxx">
                                    <p>COMPETETION</p>
                                    <div className="box_inner">
                                        <h1>22</h1>
                                        <p>DAYS</p>
                                    </div>
                                </div>
                                <div className="boxx brs2">
                                    <p>SERVICES</p>
                                    <div className="box_inner">
                                        <h1>4000</h1>
                                        <p>VOLENTEERS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <img src={unique_table} alt="" /> */}
                    </div>
                </div>
                <div className="right_conversation">
                    <img src={cricket} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Conversation