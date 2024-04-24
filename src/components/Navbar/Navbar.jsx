
import { useEffect } from "react";
import logo from "../../assets/images/logo.png";
import "./css.index.css";
import { useLocation } from 'react-router-dom';

import { Link } from "react-router-dom"
function Navbar(){
    const location = useLocation();
     
    return(
        <div className="navbar_wrapper">
            <div className="navbar_logo"><img src={logo} height={"80px"} alt="" /></div>
            <div className="navbar_options">
<<<<<<< HEAD
                <Link to={"/home"} style={{color: "black"}}><div className={location.pathname === "/" ? "option underlined" : "option"} id="/">Home</div> </Link>
=======
                <Link to={"/"} style={{color: "black"}}><div className={location.pathname === "/home" ? "option underlined" : "option"} id="/home">Home</div> </Link>
>>>>>>> 7516c7baf3a265c1c0c88c70fbf2e50d8af77a18
                <Link to={"/products"} style={{color: "black"}}> <div className={location.pathname === "/products" ? "option underlined" : "option"} id="/products" >Products</div></Link>
                <Link to={"/gallery"} style={{color: "black"}}> <div className={location.pathname === "/gallery" ? "option underlined" : "option"} id="/gallery" >Gallery</div></Link>
                <Link to={"/contact"} style={{color: "black"}}> <div className={location.pathname === "/contact" ? "option underlined" : "option"} id="/contact" >Contact us</div></Link>
            </div>
        </div>  
    );
}


export default Navbar