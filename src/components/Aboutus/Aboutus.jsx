
import logo2 from "../../assets/images/logo2.png"
import "./css.index.css";
import mail from "../../assets/images/mail.png";

import loc from "../../assets/images/loc.png";

import call from "../../assets/images/call.png";
function Aboutus(){
    return(
        <>
            <div className="about_desk">
                <div className="esas">
                    <img src={logo2}height={"60px"} alt="" />
                    <div className="divider"></div>
                    <p style={{color:"gray", width:"85%",textAlign:"center", letterSpacing:"1.3px"}}>Empowering industries worldwide, Berk Ýigitler pioneers innovative chemical solutions. With a commitment to excellence, we drive progress and sustainability. Join us in shaping a brighter future through chemistry.</p>
                </div>
                <div className="divider-ver"></div>
                <div className="about_text">
                    <div>
                        <img src={mail} width={25} style={{marginRight:4, filter: "invert(0.4)"}} height={25} alt="" />
                        <p style={{color:"gray",}}>: r.meredov@inbox.ru</p>
                    </div>
                    <div>
                        <img src={call} width={25} style={{marginRight:4, filter: "invert(0.4)"}} height={25} alt="" />
                        <a href="tel:+99361471919"> <p style={{color:"gray"}}>: +99360186363</p></a>
                    </div>
                    <div>
                        <img src={loc} width={35} style={{marginRight:4, filter: "invert(0.4)"}} height={35} alt="" />
                        <p style={{color:"gray"}}>: Akhal velayat, Bugday etrap, industrial zone of OHJP named after M. Sopyyew</p>
                    </div>
                </div>
            </div>
            <div className="about_mobile">
            <img src={logo2}height={"60px"} alt="" />
            <p style={{color:"gray", width:"85%",textAlign:"center",marginTop:14}}>Empowering industries worldwide, Berk Ýigitler pioneers innovative chemical solutions. With a commitment to excellence, we drive progress and sustainability. Join us in shaping a brighter future through chemistry.</p>
            <div className="divider"></div>
            <p style={{color:"coral"}}>GMAIL</p>
            <p style={{color:"gray", width:"85%",textAlign:"center"}}>r.meredov@inbox.ru</p>
            <p style={{color:"#216FB4", marginTop:"20px"}}>PHONE</p>
            <a href="tel:+99361471919"> <p style={{color:"gray", width:"85%",textAlign:"center"}}>+99360186363</p></a>
            <p style={{color:"#E93E3A", marginTop:"20px"}}>ADRESS</p>
            <p style={{color:"gray", width:"85%",textAlign:"center", marginBottom:"10px"}}>Akhal velayat, Bugday etrap, industrial zone of OHJP named after M. Sopyyew</p>
        </div>
        </>
    );
}


export default Aboutus