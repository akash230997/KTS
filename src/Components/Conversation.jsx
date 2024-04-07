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
                    <div className="para"><img src={para} alt="" /></div>
                    <div className="conversation_heading"><img src={conversation_heading} alt="" /></div>
                    <div className="uttrakhand_games"><img src={uttrakhand_games} alt="" /></div>
                    <div className="unique_table">
                        <img src={unique_table} alt="" />
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