import Emailus from "./components/Emailus/Emailus";
import MapPart from "./components/MapPart/MapPart";
import Markets from "./components/Markets/Markets";
import Navbar from "./components/Navbar/Navbar";
import SwiperWel from "./components/Swiper/Swiper";
import Welcome from "./components/Welcome/Welcome";
import call from "./assets/images//call.png";
import whatsapp from "./assets/images/whatsapp.webp";
import Aboutus from "./components/Aboutus/Aboutus";
import { useEffect, useState } from "react";
import config from "./config.json";

function Homepage({ currentLanguage, setCurrentLanguage, data }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
      />
      <SwiperWel currentLanguage={currentLanguage} />
      <Welcome data={data.welcome} currentLanguage={currentLanguage} />
      <Markets dataChange={data.market} currentLanguage={currentLanguage} />
      <Emailus data={data.mail} currentLanguage={currentLanguage} />
      <MapPart data={data.map} currentLanguage={currentLanguage} />
      <a href={`tel:${data?.footer && data?.footer?.callPhone?.undefined}`}>
        <div
          className="fixedcall"
          style={{
            backgroundColor: "white",
            height: 50,
            width: 50,
            position: "fixed",
            bottom: 30,
            left: 10,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid black",
            zIndex: 999,
          }}
        >
          <img src={call} width={24} height={24} alt="" />
        </div>
      </a>
      <a href={data?.footer && data?.footer?.whatsUp?.undefined}>
        <img
          style={{
            height: 55,
            width: 55,
            position: "fixed",
            bottom: 32,
            right: 10,
            zIndex: 999,
          }}
          src={whatsapp}
          alt=""
        />
      </a>
      <Aboutus data={data?.footer} currentLanguage={currentLanguage} />
    </div>
  );
}

export default Homepage;
