import logo2 from "../../assets/images/logo2.png";
import "./css.index.css";
import mail from "../../assets/images/mail.png";

import loc from "../../assets/images/loc.png";

import call from "../../assets/images/call.png";
import whatsUpIcon from "../../assets/svg/whatsapp-glyph-black-logo-svgrepo-com.svg";
import telegram from "../../assets/svg/telegram.png";
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
    fetch(`${config.serverIP}/main`, {
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
            <p style={{ color: "gray" }}>: {data && data?.mail?.undefined}</p>
          </div>
          <div>
            <img
              src={call}
              width={25}
              style={{ marginRight: 4, filter: "invert(0.4)" }}
              height={25}
              alt=""
            />
            <p style={{ color: "gray" }}>: {data && data?.phone?.undefined}</p>
          </div>
          
          <div>
            <img
              src={whatsUpIcon}
              width={25}
              style={{ marginRight: 4, filter: "invert(0.4)" }}
              height={25}
              alt=""
            />
            <p style={{ color: "gray" }}>
              <a
                style={{ color: "inherit" }}
                href={data && data?.whatsUp?.undefined}
              >
                : +{data && data?.whatsUp?.undefined?.split("/").pop()}
              </a>
            </p>
          </div>
          <div>
            <img
              src={telegram}
              width={25}
              style={{ marginRight: 4, filter: "invert(0.4)" }}
              height={25}
              alt=""
            />
            <p style={{ color: "gray" }}>
              <a
                style={{ color: "inherit" }}
                href={'https://t.me/'+(data && data?.whatsUp?.undefined?.split("/").pop())}
              >
                : +{data && data?.whatsUp?.undefined?.split("/").pop()}
              </a>
            </p>
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
          {data && data?.mail?.undefined}
        </p>
        <p style={{ color: "#216FB4", marginTop: "20px" }}>PHONE</p>
        <p style={{ color: "gray", textAlign: "center" }}>
          {data?.phone?.undefined}
        </p>
        {/* telegram */}
        <div style={{display:"flex", alignItems:"center",marginTop:"15px"}}>
            <img
              src={telegram}
              width={25}
              style={{ marginRight: 4, filter: "invert(0.4)" }}
              height={25}
              alt=""
            />
            <p style={{ color: "gray" }}>
              <a
                style={{ color: "inherit",textAlign:"center" }}
                href={'https://t.me/'+(data && data?.whatsUp?.undefined?.split("/").pop())}
              >
                : +{data && data?.whatsUp?.undefined?.split("/").pop()}
              </a>
            </p>
          </div>
        <p style={{ color: "#E93E3A", marginTop: "20px" }}>ADDRESS</p>
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
