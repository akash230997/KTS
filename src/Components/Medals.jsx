import React from "react";
import medal_guy from "../Images/medals/Rectangle 4591.png";
import medal from "../Images/medals/Medal/medal-gold-belt 2.png";
import medal_two from "../Images/medals/Medal/Image 129.png";
import medal_three from "../Images/medals/Medal/Image 130.png";
import medal_four from "../Images/medals/Medal/Image 131.png";

function Medals() {
    // Define medal data as an array of objects
    const medalData = [
        { rank: 1, state: "Maharastra", gold: 80, silver: 69, bronze: 79, total: 228 },
        { rank: 2, state: "Services Sports Control Board", gold: 66, silver: 27, bronze: 33, total: 126 },
        { rank: 3, state: "Haryana", gold: 66, silver: 55, bronze: 75, total: 192 },
        { rank: 4, state: "Madhya Pradesh", gold: 37, silver: 36, bronze: 69, total: 112 },
        { rank: 5, state: "Kerala", gold: 555, silver: 546, bronze: 779, total: 1880 }
    ];

    // Calculate total medals for the last row
    const totalMedals = medalData.reduce((acc, medal) => {
        acc.gold += medal.gold;
        acc.silver += medal.silver;
        acc.bronze += medal.bronze;
        acc.total += medal.total;
        return acc;
    }, { gold: 0, silver: 0, bronze: 0, total: 0 });

    return (
        <>
            <div className="container_medals">
                <div className="inner_medals_container">
                    <div className="medals_left">
                        <div className="medal_tally">
                            <div className="medal_header">
                                <div className="medal_img"><img src={medal} alt="" /></div>
                                <h1>Medal Tally</h1>
                            </div>
                            <div className="medal_body">
                                <div className="medal_table">
                                    <div className="multiple_medals">
                                        <div className="left_table"></div>
                                        <div className="right_table">
                                            <img src={medal_two} alt="" />
                                            <img src={medal_three} alt="" />
                                            <img src={medal_four} alt="" />
                                        </div>
                                    </div>
                                    <table>
                                        <tbody>
                                            {medalData.map((medal, index) => (
                                                <tr key={index} style={{ backgroundColor: index === 0 ? '#F5F5F5' : index % 2 === 1 ? '#FFF' : '#F5F5F5' }} className="rows">
                                                    <td>{medal.rank}</td>
                                                    <td className="unique_d"><span style={{ zIndex: "11", position: 'relative' }}>{medal.state}</span></td>
                                                    <td>{medal.gold}</td>
                                                    <td>{medal.silver}</td>
                                                    <td>{medal.bronze}</td>
                                                    <td>{medal.total}</td>
                                                </tr>
                                            ))}
                                            <tr style={{ backgroundColor: '#FFF' }}>
                                                <td colSpan="2" className="grandTotal">GRAND TOTAL</td>
                                                <td className="grandTotal">{totalMedals.gold}</td>
                                                <td className="grandTotal">{totalMedals.silver}</td>
                                                <td className="grandTotal">{totalMedals.bronze}</td>
                                                <td className="grandTotal">{totalMedals.total}</td>
                                            </tr>
                                            <div className="overlap_table"></div>
                                        </tbody>
                                    </table>
                                    <div className="btns_m">
                                        <button className="medal_btns">REFRESH</button>
                                        <button className="medal_btns">VIEW MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="medals_right">
                        <img src={medal_guy} alt="" width="100%" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Medals;
