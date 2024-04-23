import "./css.index.css";
import back_glue from "../../assets/images/glue.webp";
import back_paint from "../../assets/images/paints.jpg";
import back_syndyes from "../../assets/images/synDyes.jpg";
import back_epoxy from "../../assets/images/epoxy.jpg";
import back_enz from "../../assets/images/enzyme.webp";
import back_soft from "../../assets/images/softeners.jpg";
import back_chem from "../../assets/images/chemicals.jpg";
import back_clean from "../../assets/images/clean.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import config from "../../config.json";
function Markets() {
  const [data, SetData] = useState([]);

  const GetData = () => {
    fetch(`${config.serverIP}:${config.serverPort}/category?size:8`, {
      method: "GET",
    })
      .then(async (response) => {
        return await response.json();
      })
      .then((response) => {
        SetData(response);
      });
  };

  useEffect(() => {
    GetData();
  }, []);

  function rotate(id) {
    if (window.screen.width < 768) {
      console.log("smaller");
      document.getElementById(id).classList.toggle("rotated");
    } else console.log("larger");
  }
  return (
    <div className="markets_wrapper">
      <div className="cell1">
        <div className="cell1_txt">
          <p
            style={{
              color: "#009A4E",
              lineHeight: 0.8,
              marginBottom: 0,
              fontSize: "37px",
            }}
          >
            OUR MARKETS
          </p>
          <div className="divider1"></div>
          <p style={{ color: "#fff" }}>
            At Berk Ýigitler we cater to a diverse range of industries and
            sectors worldwide. From household and personal care products to
            industrial manufacturing and water treatment, our innovative
            chemical solutions are tailored to meet the unique needs of each
            market we serve. With a commitment to quality, sustainability, and
            customer satisfaction, we continuously strive to deliver
            cutting-edge products and services that drive success for our
            clients across the globe.
          </p>
        </div>
      </div>
      {data.map((d) => (
        <div className="cell2 flip-card" onClick={() => rotate("1")}>
          <div className="flip-card-inner original" id="1">
            <div className="flip-card-front" style={{ overflow: "hidden" }}>
              <img
                width={"100%"}
                src={`${config.serverIP}:${config.serverPort}/${d.image}`}
                alt=""
              />
              <div>{d.name}</div>
            </div>
            <div className="flip-card-back">
              <h3> {d.name}</h3>
              <p>{d.description}</p>
              <div className="buttons">
                <Link to={"/products"} style={{ color: "#fff" }}>
                  {" "}
                  Learn More &#x25B6;
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Markets;
