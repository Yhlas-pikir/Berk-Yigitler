import { useNavigate } from "react-router-dom";
import adhs from "../../assets/images/adhesives.jpg";
import logo2 from "../../assets/images/logo2.png";
import "./css.index.css";
import config from "../../config.json";

import React, { useEffect, useRef, useState } from "react";
function All() {
  const [data, SetData] = useState([]);
  const redirect = useNavigate();

  const GetData = () => {
    fetch(`${config.serverIP}:${config.serverPort}/category?all=true`, {
      method: "GET",
    })
      .then(async (response) => {
        return await response.json();
      })
      .then((response) => {
        const temp = [];
        console.log(position);
        response.forEach((data, index) => {
          position.current[index] = null;
          temp.push({
            ref: index,
            scrollToDiv: () =>
              position.current[index].current.scrollIntoView({
                behavior: "smooth",
              }),
            ...data,
          });
        });
        SetData(temp);
      });
  };

  useEffect(() => {
    GetData();
  }, []);

  console.log(data);

  const position = useRef([]);

  const adhvs = useRef(null);
  const paints = useRef(null);
  const texChem = useRef(null);
  const epox = useRef(null);
  const syndye = useRef(null);
  const laund = useRef(null);
  const enzyme = useRef(null);

  const scrollToDivAD = () =>
    adhvs.current.scrollIntoView({ behavior: "smooth" });
  const scrollToDivPA = () =>
    paints.current.scrollIntoView({ behavior: "smooth" });
  const scrollToDivTX = () =>
    texChem.current.scrollIntoView({ behavior: "smooth" });
  const scrollToDivEP = () =>
    epox.current.scrollIntoView({ behavior: "smooth" });
  const scrollToDivSD = () =>
    syndye.current.scrollIntoView({ behavior: "smooth" });
  const scrollToDivLC = () =>
    laund.current.scrollIntoView({ behavior: "smooth" });
  const scrollToDivEN = () =>
    enzyme.current.scrollIntoView({ behavior: "smooth" });
  return (
    <>
      <div
        ref={adhvs}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          padding: 10,
          backgroundColor: "#f8f8f8",
        }}
      >
        <div className="all_wrapper">
          {data.map((d, i) => (
            <div onClick={() => position.current[d.ref]}>{d.name}</div>
          ))}
        </div>
      </div>
      {data.map((d, index) => (
        <>
          <p
            style={{
              textAlign: "center",
              fontSize: 40,
              marginTop: 20,
              fontWeight: "bold",
            }}
          >
            {d.name}
          </p>
          <div
            className="product_wrapper"
            style={
              index % 2 == 1
                ? { flexDirection: "row-reverse" }
                : { flexDirection: "row" }
            }
          >
            <div className="product_image">
              <img
                src={`${config.serverIP}:${config.serverPort}/${d.image}`}
                width={"100%"}
                alt=""
              />
            </div>
            <div className="product_about">
              {d.products.map((product) => (
                <div>{product.name}</div>
              ))}
              <div ref={position.current[d.ref]}></div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default All;
