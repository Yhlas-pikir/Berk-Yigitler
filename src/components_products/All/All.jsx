import { Link, useNavigate } from "react-router-dom";
import adhs from "../../assets/images/adhesives.jpg";
import logo2 from "../../assets/images/logo2.png";
import "./css.index.css";
import config from "../../config.json";
import React, { useEffect, useState } from "react";
function All() {
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

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: 20 }}>Our Products</h1>
      <div className="all_wrapper">
<<<<<<< HEAD
        {data.map((d) => (
          <Link to={`/products/${d.id}`} style={{ color: "#000" }}>
=======
        {data.map((d, index) => (
          <Link key={index} to={`/products/${d.id}`} style={{ color: "#fff" }}>
>>>>>>> 7516c7baf3a265c1c0c88c70fbf2e50d8af77a18
            <div className="all_element">
              <p>{d.name}</p>
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
