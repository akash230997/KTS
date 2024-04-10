import news1 from "../Images/News_Latest/Rectangle 4542.png";
import news2 from "../Images/News_Latest/Rectangle 4542 (5).png";
import news3 from "../Images/News_Latest/Rectangle 4542 (4).png";
import news4 from "../Images/News_Latest/Rectangle 4542 (3).png";
import news5 from "../Images/News_Latest/Rectangle 4542 (2).png";
import news6 from "../Images/News_Latest/Rectangle 4542 (1).png";
function LatestNews() {
    return (
        <>
            <div className="container_latest_news">
                <h2 style={{ color: '#81378F' }}>Latest News</h2>
                <div className="news">
                    <div className="news_box">
                        <div className="img"><img src={news1} alt="" /></div>
                        <div className="news_content">
                            <h3>Swasti Singh's gold powers Odisha Past 50 medals</h3>
                            <p>Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skills of swasti Singh.</p>
                        </div>
                    </div>
                    <div className="news_box">
                        <div className="img"><img src={news2} alt="" /></div>
                        <div className="news_content">
                            <h3>Swasti Singh's gold powers Odisha Past 50 medals</h3>
                            <p>Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skills of swasti Singh.</p>
                        </div>
                    </div>
                    <div className="news_box">
                        <div className="img"><img src={news3} alt="" /></div>
                        <div className="news_content">
                            <h3>Swasti Singh's gold powers Odisha Past 50 medals</h3>
                            <p>Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skills of swasti Singh.</p>
                        </div>
                    </div>
                    <div className="news_box">
                        <div className="img"><img src={news4} alt="" /></div>
                        <div className="news_content">
                            <h3>Swasti Singh's gold powers Odisha Past 50 medals</h3>
                            <p>Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skills of swasti Singh.</p>
                        </div>
                    </div>
                    <div className="news_box">
                        <div className="img"><img src={news5} alt="" /></div>
                        <div className="news_content">
                            <h3>Swasti Singh's gold powers Odisha Past 50 medals</h3>
                            <p>Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skills of swasti Singh.</p>
                        </div>
                    </div>
                    <div className="news_box">
                        <div className="img"><img src={news6} alt="" /></div>
                        <div className="news_content">
                            <h3>Swasti Singh's gold powers Odisha Past 50 medals</h3>
                            <p>Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skills of swasti Singh.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default LatestNews