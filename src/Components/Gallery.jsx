import galler_head from "../Images/Gallery/Photo Gallery.png"
import left_button from "../Images/Gallery/Ellipse 10.png"
import right_button from "../Images/Gallery/Group 1451.png"
import swati_gold_medalist from "../Images/Gallery/swati_gold_medalist.png"
import swati_gold_medalist2 from "../Images/Gallery/Mask group.png"
import swati_gold_medalist3 from "../Images/Gallery/Mask group (1).png"
import swati_gold_medalist4 from "../Images/Gallery/Mask group (2).png"
import WestIcon from '@mui/icons-material/West';
function Gallery() {
    return (
        <div className="gallery_container">
            <div className="gallery_heading">
                <img src={galler_head} alt="" className="gallery_headingImg" />
                <div className="buttons_gallery">
                    <button className="left_button_g"><img src={left_button} alt="" /><WestIcon className="westIconClass" /></button>
                    <button className="right_button_g"><img src={right_button} alt="" /></button>
                </div>
            </div>

            <div className="gallery_crousal">
                <div className="boxs_gallery">
                    <div className="img_cover_gallery">
                        <img src={swati_gold_medalist} alt="" />
                    </div>
                    <div className="cover_intro_p">
                        <p>Swati Singh's gold powers odisha past 50 medals</p>
                    </div>
                </div>
                <div className="boxs_gallery">
                    <div className="img_cover_gallery">
                        <img src={swati_gold_medalist2} alt="" />
                    </div>
                    <div className="cover_intro_p">
                        <p>Swati Singh's gold powers odisha past 50 medals</p>
                    </div>
                </div>
                <div className="boxs_gallery">
                    <div className="img_cover_gallery">
                        <img src={swati_gold_medalist3} alt="" />
                    </div>
                    <div className="cover_intro_p">
                        <p>Swati Singh's gold powers odisha past 50 medals</p>
                    </div>
                </div>
                <div className="boxs_gallery">
                    <div className="img_cover_gallery">
                        <img src={swati_gold_medalist4} alt="" />
                    </div>
                    <div className="cover_intro_p">
                        <p>Swati Singh's gold powers odisha past 50 medals</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery