import logo2 from "../../assets/images/logo2.png";
import "./css.index.css";
import mail from "../../assets/images/mail.png";

import loc from "../../assets/images/loc.png";

import call from "../../assets/images/call.png";
import config from "../../config.json";

import { useEffect, useState } from "react";
function Aboutus({ currentLanguage }) {
  const [data, SetData] = useState({
    description: {
      tm: "",
      en: "",
      tr: "",
      ru: "",
    },
    location: {
      tm: "",
      en: "",
      tr: "",
      ru: "",
    },
    phone: "",
  });

  const GetData = () => {
    fetch(`${config.serverIP}:${config.serverPort}/main`, {
      method: "GET",
    })
      .then(async (response) => {
        return await response.json();
      })
      .then((response) => {
        SetData(response.footer);
      })
      .catch((err) => console.log(err));
  };

  console.log(data);

  useEffect(() => {
    GetData();
  }, []);

  return (
    <>
      <div className="about_desk">
        <div className="esas">
          <img src={logo2} height={"60px"} alt="" />
          <div className="divider"></div>
          <p
            style={{
              color: "gray",
              width: "85%",
              textAlign: "center",
              letterSpacing: "1.3px",
            }}
          >
            {data && data.description[currentLanguage]}
          </p>
        </div>
        <div className="divider-ver"></div>
        <div className="about_text">
          <div>
            <img
              src={mail}
              width={25}
              style={{ marginRight: 4, filter: "invert(0.4)" }}
              height={25}
              alt=""
            />
            <p style={{ color: "gray" }}>: {data && data.mail}</p>
          </div>
          <div>
            <img
              src={call}
              width={25}
              style={{ marginRight: 4, filter: "invert(0.4)" }}
              height={25}
              alt=""
            />
            <p style={{ color: "gray" }}>: {data && data.phone}</p>
          </div>
          <div>
            <img
              src={loc}
              width={35}
              style={{ marginRight: 4, filter: "invert(0.4)" }}
              height={35}
              alt=""
            />
            <p style={{ color: "gray" }}>
              : {data && data.location[currentLanguage]}
            </p>
          </div>
        </div>
      </div>

      <div className="about_mobile">
        <img src={logo2} height={"60px"} alt="" />
        <p
          style={{
            color: "gray",
            width: "85%",
            textAlign: "center",
            marginTop: 14,
          }}
        >
          {data && data.description[currentLanguage]}
        </p>
        <div className="divider"></div>
        <p style={{ color: "coral" }}>GMAIL</p>
        <p style={{ color: "gray", width: "85%", textAlign: "center" }}>
          {data && data.mail}
        </p>
        <p style={{ color: "#216FB4", marginTop: "20px" }}>PHONE</p>
        {data &&
          data.phone.split(", ").map((phone) => (
            <a href={`tel:%${phone}`}>
              <p style={{ color: "gray", textAlign: "center" }}>{phone}</p>
            </a>
          ))}

        <p style={{ color: "#E93E3A", marginTop: "20px" }}>ADRESS</p>
        <p
          style={{
            color: "gray",
            width: "85%",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          {data && data.location[currentLanguage]}
        </p>
      </div>
    </>
  );
}

export default Aboutus;
