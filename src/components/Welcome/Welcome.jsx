import welImg from "../../assets/images/intro.jpg";
import css from "../Welcome/css.index.css";
import config from "../../config.json";

function Welcome({ data }) {
  console.log("welocome", data);
  return (
    <div className="welcome_wrapper">
      <div className="welcome_image">
        <img
          src={`${config.serverIP}:${config.serverPort}/${data && data.image}`}
          width={"98%"}
          alt=""
        />
      </div>
      <div className="welcome_text">
        <p className="welcomTo">WELCOME TO</p>
        <p className="berkyigitler">BERK</p>{" "}
        <p className="berkyigitler"> ÝIGITLER</p>
        <div className="dividerW"></div>
        <p className="des_txt">{data && data.description}</p>
      </div>
    </div>
  );
}

export default Welcome;
