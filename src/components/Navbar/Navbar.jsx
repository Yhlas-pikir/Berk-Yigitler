
import { useEffect } from "react";
import logo from "../../assets/images/logo.png";
import "./css.index.css";
import { useLocation } from 'react-router-dom';

import { Link } from "react-router-dom"
function Navbar(){
    const location = useLocation();
     console.log(location.pathname.startsWith("/products"));
    return(
        <div className="navbar_wrapper">
            <div className="navbar_logo"><img src={logo} height={"80px"} alt="" /></div>
            <div className="navbar_options">
                <Link to={"/"} style={{color: "black"}}><div className={location.pathname === "/" ? "option underlined" : "option"} id="/home">Home</div> </Link>
                <Link to={"/products"} style={{color: "black"}}> <div className={location.pathname === "/products" || location.pathname.startsWith("/products") ? "option underlined" : "option"} id="/products" >Products</div></Link>
                <Link to={"/gallery"} style={{color: "black"}}> <div className={location.pathname === "/gallery" ? "option underlined" : "option"} id="/gallery" >Gallery</div></Link>
                <Link to={"/contact"} style={{color: "black"}}> <div className={location.pathname === "/contact" ? "option underlined" : "option"} id="/contact" >Contact us</div></Link>
            </div>
        </div>  
    );
}


export default Navbar