import welImg from "../../assets/images/emailPart.png";
import "./css.index.css";
import config from "../../config.json";

function Emailus({ data }) {
  const SendMail = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    let data = {};
    formData.forEach((value, key) => (data[key] = value));

    console.log(data);

    fetch(`${config.serverIP}:${config.serverPort}/mail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

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
        <form class="form" data-form-title="Form Name" onSubmit={SendMail}>
          <input
            type="text"
            className="input_place"
            name="username"
            placeholder="Your Name"
          />
          <div className="dividerE"></div>
          <input
            type="text"
            className="input_place"
            name="email"
            placeholder="Your Email"
          />
          <div className="dividerE"></div>
          <input
            type="phone"
            className="input_place"
            name="phone"
            placeholder="Phone Number"
          />
          <div className="dividerE"></div>
          <textarea
            className="text_area"
            name="text"
            placeholder="Your message"
          ></textarea>
          <div className="submit_button_div">
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
