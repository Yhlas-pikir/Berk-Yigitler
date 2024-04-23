import welImg from "../../assets/images/emailPart.png";
import "./css.index.css";
import config from "../../config.json";

function Emailus({ data }) {
  return (
    <div className="emailus_wrapper">
      <div className="emailus_image">
        <img
          src={`${config.serverIP}:${config.serverPort}/${data && data.image}`}
          width={"98%"}
          alt=""
        />
      </div>
      <div className="email">
        <div>r.meredov@inbox.ru</div>
        <form method="POST" class="form" data-form-title="Form Name">
          <input
            type="text"
            className="input_place"
            name="Name"
            placeholder="Your Name"
          />
          <div className="dividerE"></div>
          <input
            type="text"
            className="input_place"
            name="Name"
            placeholder="Your Email"
          />
          <div className="dividerE"></div>
          <input
            type="text"
            className="input_place"
            name="Name"
            placeholder="Phone Number"
          />
          <div className="dividerE"></div>
          <textarea className="text_area" placeholder="Your message"></textarea>
          <div class="submit_button_div">
            <button type="submit" class="submit_button">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Emailus;
