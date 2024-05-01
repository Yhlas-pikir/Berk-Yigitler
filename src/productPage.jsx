import Navbar from "./components/Navbar/Navbar";
import call from "./assets/images//call.png";
import whatsapp from "./assets/images/whatsapp.webp";
import Aboutus from "./components/Aboutus/Aboutus";
import All from "./components_products/All/All";
import whatsUp from "./assets/svg/whatsapp-glyph-black-logo-svgrepo-com.svg";
import { useEffect, useState } from "react";
import config from "./config.json";

function ProductPage({ currentLanguage, setCurrentLanguage, data }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
      />
      <All currentLanguage={currentLanguage} />
      <Aboutus data={data.footer} currentLanguage={currentLanguage} />
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
    </div>
  );
}

export default ProductPage;
