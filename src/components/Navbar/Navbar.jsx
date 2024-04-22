
import logo from "../../assets/images/logo.png";
import "./css.index.css";

import { Link } from "react-router-dom"
function Navbar(){
    return(
        <div className="navbar_wrapper">
            <div className="navbar_logo"><img src={logo} height={"80px"} alt="" /></div>
            <div className="navbar_options">
            <Link to={"/home"} style={{color: "black"}}><div className="option">Home</div> </Link>
        <Link to={"/products"} style={{color: "black"}}> <div className="option" >Products</div></Link>
        <div className="option" >Gallery</div>
        <div className="option" >Contact us</div>
      </div>
        </div>  
    );
}


export default Navbar