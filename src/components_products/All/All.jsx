import { Link, useNavigate } from "react-router-dom";
import adhs from "../../assets/images/adhesives.jpg";
import logo2 from "../../assets/images/logo2.png";
import "./css.index.css";
import config from "../../config.json";
import locales from "../../locales.json"
import React, { useEffect, useState } from "react";
function All({ currentLanguage }) {
  const [data, SetData] = useState([]);
  const redirect = useNavigate();

  const GetData = () => {
    fetch(`${config.serverIP}:${config.serverPort}/category`, {
      method: "GET",
    })
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

  console.log(data);

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: 20 }}>
            {locales[currentLanguage||'tm']['Our Products']||'Our Products'}
        {/* Our Products */}
      
      </h1>
      <div className="all_wrapper">
        {data.map((d) => (
          <Link to={`/products/${d.id}`} style={{ color: "#000" }}>
            <div className="all_element">
              <p style={{marginBottom:'20px'}}>{d && d.name[currentLanguage]}</p>
              <img
                src={`${config.serverIP}:${config.serverPort}/${d.image}`}
                alt=""
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default All;
