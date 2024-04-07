import news1 from "../Images/latest news/Frame 1417.png";
import news2 from "../Images/latest news/Frame 1419.png";
import news3 from "../Images/latest news/Frame 1421.png";
import news4 from "../Images/latest news/Frame 1418.png";
import news5 from "../Images/latest news/Frame 1420.png";
import news6 from "../Images/latest news/Frame 1422.png";
function LatestNews() {
    return (
        <>
            <div className="container_latest_news">
                <h2 style={{ color: '#81378F' }}>Latest News</h2>
                <div className="news">
                    <div className="news_box">
                        <img src={news1} alt="" width="70%" />
                    </div>
                    <div className="news_box">
                        <img src={news2} alt="" width="70%" />
                    </div>
                    <div className="news_box">
                        <img src={news3} alt="" width="70%" />
                    </div>
                    <div className="news_box">
                        <img src={news4} alt="" width="70%" />
                    </div>
                    <div className="news_box">
                        <img src={news5} alt="" width="70%" />
                    </div>
                    <div className="news_box">
                        <img src={news6} alt="" width="70%" />
                    </div>
                </div>
            </div>
        </>

    )
}

export default LatestNews