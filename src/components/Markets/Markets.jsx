import "./css.index.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import config from "../../config.json";
import locales from "../../locales.json";
function Markets({ dataChange, currentLanguage }) {
  const [data, SetData] = useState([]);

  const GetData = () => {
    fetch(`${config.serverIP}/category?size=8`, {
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

  console.log(data);

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
            {dataChange && dataChange.name[currentLanguage]}
          </p>
          <div className="divider1"></div>
          <p style={{ color: "#fff" }}>
            {dataChange && dataChange.description[currentLanguage]}
          </p>
        </div>
      </div>
      {data &&
        data.map((d, index) => (
          <div
            className="cell2 flip-card"
            key={index}
            onClick={() => rotate(d.id)}
          >
            <div className="flip-card-inner original" id={d.id}>
              <div className="flip-card-front" style={{ overflow: "hidden" }}>
                <img
                  width={"100%"}
                  src={`${config.serverIP}/${d.image}`}
                  alt=""
                />
                <div>{d && d.name[currentLanguage]}</div>
              </div>
              <div className="flip-card-back">
                <h3> {d && d.name[currentLanguage]}</h3>
                <p>{d.description[currentLanguage]}</p>
                
                <Link className="buttons" to={`/products/${d.id}`} style={{ color: "#fff" }}>
                  {locales[currentLanguage||'tm']['Learn More']||'Learn More'}
                   &#x25B6;
                </Link>
                  
                
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Markets;
