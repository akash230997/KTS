import { useEffect, useState } from "react";
import nationalGames from "../Images/Numbers/uttrakhand.png";
function NationalGames() {
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
            <div className="nationalGames">
                <div className="numbers_UI">
                    <div className="row1"><h1>0 1 7 9 <span style={{ color: '#b8b6b6' }}>0 5 5 2 1 8</span></h1></div>
                    <div className="row1"><h1 style={{ color: "#b8b6b6" }}>0 1 8 0 0 6 5 3 <span style={{ color: "#000" }}>1 9</span></h1></div>
                    <div className="row1"><h1 style={{ color: "#b8b6b6" }}>0 1 8 9 <span style={{ color: '#000' }}>0 7</span> 5 4 2 0</h1></div>
                    <div className="row1"><h1 style={{ color: "#b8b6b6" }}>0 1 0 2 0 8 <span style={{ color: "#000" }}>5 5</span> 2 1</h1></div>
                </div>
                <div className="national_Games_board">
                    <div className="innerPs">
                        <img src={nationalGames} alt="" />
                        <p>THE LEFT UNTIL THE NATIONAL GAMES UTTRAKHAND 2024</p>
                        <div className="days_hrs" style={{ width: "100%" }}>
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
                </div>
            </div>
        </>
    )
}

export default NationalGames