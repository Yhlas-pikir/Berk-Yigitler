import welImg from "../../assets/images/intro.jpg";
import css from "../Welcome/css.index.css";
import config from "../../config.json";

function Welcome({ data, currentLanguage }) {
  return (
    <div className="welcome_wrapper_b">
      <div className="welcome_wrapper" style={{}}>
        <div className="welcome_image" style={{flexDirection:1}} >
          <img
            src={`${config.serverIP}:${config.serverPort}/${
              data && data.image
            }`}
            style={{aspectRatio:'17/9'}}
            // width={"70%"}
            alt=""
          />
        </div>
        <div className="welcome_text" style={{flexDirection:1}}>
          {/* <p className="welcomTo">WELCOME TO</p> */}
          <p className="berkyigitler">BERK</p>{" "}
          <p className="berkyigitler"> ÝIGITLER</p>
          <div className="dividerW"></div>
          <p className="des_txt">{data && data.description[currentLanguage]}</p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
