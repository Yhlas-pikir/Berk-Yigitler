import welImg from "../../assets/images/mapPart.png";
import logo2 from "../../assets/images/logo2.png";
import "./css.index.css";
import config from "../../config.json";

function MapPart({ data }) {
  return (
    <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
    <div className="map_wrapper">
      <div className="location">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d787.1226024205682!2d58.37207101265656!3d37.895598446608055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffd7fce0e0049%3A0x2f5c389e27643b5d!2z0JHQuNC30L3QtdGBLdGG0LXQvdGC0YAgItCh0L_QvtGA0YIi!5e0!3m2!1sru!2s!4v1711371481898!5m2!1sru!2s"></iframe>
      </div>
      <div className="map_image">
        <img src={`${config.serverIP}/${data && data.image}`} alt="" />
      </div>
    </div>
    </div>
  );
}

export default MapPart;
