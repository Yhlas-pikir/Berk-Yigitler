
import logo from "../../assets/images/logo.png";
import "./css.index.css";
import { useLocation } from 'react-router-dom';

import { Link } from "react-router-dom"
function Navbar(){
    const location = useLocation();
    console.log("---------------------------",location.pathname);
    return(
        <div className="navbar_wrapper">
            <div className="navbar_logo"><img src={logo} height={"80px"} alt="" /></div>
            <div className="navbar_options">
                <Link to={"/home"} style={{color: "black"}}><div className="option" key="/home" >Home</div> </Link>
                <Link to={"/products"} style={{color: "black"}}> <div className="option" key="/products">Products</div></Link>
                <Link to={"/gallery"} style={{color: "black"}}> <div className="option" key="/home">Gallery</div></Link>
                <Link to={"/contact"} style={{color: "black"}}> <div className="option" key="/home">Contact us</div></Link>
            </div>
        </div>  
    );
}


export default Navbar