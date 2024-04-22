
import welImg from "../../assets/images/mapPart.png";
import logo2 from "../../assets/images/logo2.png"
import "./css.index.css";

function MapPart(){
    return(
        <div className="map_wrapper">
           <div className="location">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d787.1226024205682!2d58.37207101265656!3d37.895598446608055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffd7fce0e0049%3A0x2f5c389e27643b5d!2z0JHQuNC30L3QtdGBLdGG0LXQvdGC0YAgItCh0L_QvtGA0YIi!5e0!3m2!1sru!2s!4v1711371481898!5m2!1sru!2s"></iframe>
            </div>
            <div className="map_image"><img src={welImg}alt="" /></div>
            <div className="about_mobile">
                <img src={logo2}height={"60px"} alt="" />
                <p style={{color:"gray", width:"85%",textAlign:"center",marginTop:14}}>Empowering industries worldwide, Berk Ýigitler pioneers innovative chemical solutions. With a commitment to excellence, we drive progress and sustainability. Join us in shaping a brighter future through chemistry.</p>
                <div className="divider"></div>
                <p style={{color:"coral"}}>GMAIL</p>
                <p style={{color:"gray", width:"85%",textAlign:"center"}}>emailofcompany@gmail.com</p>
                <p style={{color:"#216FB4", marginTop:"20px"}}>PHONE</p>
                <a href="tel:+99361471919"> <p style={{color:"gray", width:"85%",textAlign:"center"}}>+99361471919</p></a>
                <p style={{color:"#E93E3A", marginTop:"20px"}}>ADRESS</p>
                <p style={{color:"gray", width:"85%",textAlign:"center", marginBottom:"10px"}}>Akhal, Gokdepe Region, Block 11/6</p>
            </div>
        </div>  
    );
}


export default MapPart