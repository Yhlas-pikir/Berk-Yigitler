import { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import "./css.index.css";
import { useLocation } from "react-router-dom";
import tm from "../../assets/images/tm_lang.png";
import ru from "../../assets/images/rus_lang.png";
import en from "../../assets/images/en_lang.png";
import tr from "../../assets/images/tr_lang.png";
import choose from "../../assets/images/choose.png";
import { Link } from "react-router-dom";
import locales from "../../locales.json"
function Navbar({ currentLanguage, setCurrentLanguage }) {
  
  // setCurrentLanguage("tr");

  const [is, setIs] = useState(true);
  function ToggleHidden() {
    
    is === true
      ? document.getElementById("hiddenmi").classList.add("show")
      : document.getElementById("hiddenmi").classList.remove("show");
    setIs(!is);
  }
  function ToggleHiddenM() {
    
    is === true
      ? document.getElementById("hiddenmiM").classList.add("show")
      : document.getElementById("hiddenmiM").classList.remove("show");
    setIs(!is);
  }
  const location = useLocation();
  
  return (
    <div className="navbar_wrapper">
      <div className="navbar_logo">
        <img src={logo} height={"80px"} alt="" />
      </div>
      <div className="navbar_options">
        <Link to={"/"} style={{ color: "black" }}>
          <div
            className={
              location.pathname === "/" ? "option underlined" : "option"
            }
            id="/home"
          >
            {locales[currentLanguage||'tm']['Home']||'Home'}
          </div>{" "}
        </Link>
        <Link to={"/products"} style={{ color: "black" }}>
          {" "}
          <div
            className={
              location.pathname === "/products" ||
              location.pathname.startsWith("/products")
                ? "option underlined"
                : "option"
            }
            id="/products"
          >
            {locales[currentLanguage||'tm']['Products']||'Products'}
          
          </div>
        </Link>
        <Link to={"/gallery"} style={{ color: "black" }}>
          {" "}
          <div
            className={
              location.pathname === "/gallery" ? "option underlined" : "option"
            }
            id="/gallery"
          >
            
            {locales[currentLanguage||'tm']['Gallery']||'Gallery'}

          </div>
        </Link>
        <Link to={"/contact"} style={{ color: "black" }}>
          {" "}
          <div
            className={
              location.pathname === "/contact" ? "option underlined" : "option"
            }
            id="/contact"
          >
            {locales[currentLanguage||'tm']['Contact us']||'Contact us'}
          </div>
        </Link>
        <div className="choose_mobile" onClick={() => ToggleHiddenM()}>
          <img src={choose} alt="" />
          <div className="navbar_lang_mobile" id="hiddenmiM">
            <img
              src={tm}
              onClick={() => {
                ToggleHiddenM();
                setCurrentLanguage("tm");
              }}
              alt=""
            />
            <img
              src={tr}
              onClick={() => {
                ToggleHiddenM();
                setCurrentLanguage("tr");
              }}
              alt=""
            />
            <img
              src={ru}
              onClick={() => {
                ToggleHiddenM();
                setCurrentLanguage("ru");
              }}
              alt=""
            />
            <img
              src={en}
              onClick={() => {
                ToggleHiddenM();
                setCurrentLanguage("en");
              }}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="choose_desk" onClick={() => ToggleHidden()}>
        <img src={choose} alt="" />
        <div className="navbar_lang_desk" id="hiddenmi">
          <img
            src={tm}
            onClick={() => {
              ToggleHidden();
              setCurrentLanguage("tm");
            }}
            alt=""
          />
          <img
            src={tr}
            onClick={() => {
              ToggleHidden();
              setCurrentLanguage("tr");
            }}
            alt=""
          />
          <img
            src={ru}
            onClick={() => {
              ToggleHidden();
              setCurrentLanguage("ru");
            }}
            alt=""
          />
          <img
            src={en}
            onClick={() => {
              ToggleHidden();
              setCurrentLanguage("en");
            }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
