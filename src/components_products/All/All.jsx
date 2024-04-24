import { useNavigate } from "react-router-dom";
import adhs from "../../assets/images/adhesives.jpg";
import logo2 from "../../assets/images/logo2.png";
import "./css.index.css";
import config from "../../config.json";

import React, { useEffect, useRef, useState } from "react";
function All() {
    return(
      <>
        <h1 style={{textAlign:"center", marginTop:20}}>Our Products</h1>
        <div className="all_wrapper">
          <div className="all_element">
            <p>Name</p>
            <img src={adhs} alt="" /> 
          </div>
          <div className="all_element">
            <p>Name</p>
            <img src={adhs} alt="" /> 
          </div>
          <div className="all_element">
            <p>Name</p>
            <img src={adhs} alt="" /> 
          </div>
          <div className="all_element">
            <p>Name</p>
            <img src={adhs} alt="" /> 
          </div>
        </div>
      </>
    );
}

export default All;
