import Navbar from "./components/Navbar/Navbar";
import call from "./assets/images//call.png";
import whatsapp from "./assets/images/whatsapp.webp";
import Aboutus from "./components/Aboutus/Aboutus";
import { useNavigate, useParams } from "react-router-dom";
import config from "./config.json";
import React, { useEffect, useState } from "react";
function ItemPage() {
  const { id } = useParams();

  const [data, SetData] = useState({});
  
  const [image, SetImage] = useState();
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
        console.log("-------------------------",response);
        SetImage(response.image)
        
        console.log("-------------------------asd",image);
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
      <div className="obshiy" style={{width:"100%", display:"flex",justifyContent:"center"}}>
        <div className="itemImageWrapepr">
            
            <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              textAlign: "center",
              marginTop: "20px",
            }}
            className="itemText"
          >
            <h2 style={{ textAlign: "center", marginBottom: 10 }}>
              {data && data.name}
            </h2>
            {data.products &&
              data.products.map((product) => (
                <p style={{ fontSize: 20 }}>{product.name}</p>
              ))}
          </div>
          <img className="itemImage" src={`${config.serverIP}:${config.serverPort}/${image}`} alt="" />

        </div>
      </div>
      <Aboutus />
      <a href="tel:+99365644141">
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
      <a href="https://wa.me/99365644141">
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
