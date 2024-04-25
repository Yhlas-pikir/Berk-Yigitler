import Navbar from "./components/Navbar/Navbar";
import call from "./assets/images//call.png";
import whatsapp from "./assets/images/whatsapp.webp";
import Adhesives from "./components_products/Adhesives/Adhesives";
import Paints from "./components_products/Paints/Paints";
import TextileChem from "./components_products/TextileChem/TextileChem";
import Epoxy from "./components_products/Epoxy/Epoxy";
import SynDyes from "./components_products/SynDyes/SynDyes";
import Clean from "./components_products/Clean/Clean";
import Enzyme from "./components_products/Enzyme/Enzyme";
import Aboutus from "./components/Aboutus/Aboutus";
import All from "./components_products/All/All";
import { useNavigate, useParams } from "react-router-dom";
import config from "./config.json";
import React, { useEffect, useState } from "react";
function ItemPage() {
  const { id } = useParams();

  const [data, SetData] = useState({});
  const redirect = useNavigate();

  const GetData = () => {
    fetch(
      `${config.serverIP}:${config.serverPort}/category/${id}?products=true`,
      {
        method: "GET",
      }
    )
      .then(async (response) => {
        return await response.json();
      })
      .then((response) => {
        SetData(response);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    GetData();
  }, []);


  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          alignSelf: "center",
          marginTop: "20px",
          marginBottom: "40px",
        }}
      >
        <h2 style={{ textAlign: "left", marginBottom: 10 }}>
          {data && data.name}
        </h2>
        {data.products &&
          data.products.map((product) => (
            <p style={{ fontSize: 20 }}>{product.name}</p>
          ))}
      </div>
      <Aboutus />
      <a href="tel:+99361471919">
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
      <a href="https://wa.me/99361471919">
        <img
          style={{
            height: 65,
            width: 65,
            position: "fixed",
            bottom: 24,
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

export default ItemPage;
