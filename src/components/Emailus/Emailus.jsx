import welImg from "../../assets/images/emailPart.png";
import "./css.index.css";
import config from "../../config.json";
import locales from "../../locales.json"

function Emailus({ data,currentLanguage }) {
  const SendMail = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    let data = {};
    formData.forEach((value, key) => (data[key] = value));


    fetch(`${config.serverIP}/mail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        alert("Message sent to r.meredov@inbox.ru");
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{width:"100%",maxWidth:'100vw', display:"flex", justifyContent:"center"}}>
    <div className="emailus_wrapper">
      <div className="emailus_image">
        <img
          src={`${config.serverIP}/${data && data.image}`}
          
          alt=""
        />
      </div>
      <div className="email">
        <div>
            {locales&&locales[currentLanguage || "tm"]["Bizimle iletisme gecin"] ||
              "Bizimle iletisme gecin"}</div>
        <form className="form" data-form-title="Form Name" onSubmit={SendMail}>
          <input
            type="text"
            className="input_place"
            name="username"
            placeholder={
              locales[currentLanguage || "tm"]["Your Name"] || "Your Name"
            }
          />
          <div className="dividerE"></div>
          <input
            type="text"
            className="input_place"
            name="email"
            placeholder={
              locales[currentLanguage || "tm"]["Your Email"] || "Your Email"
            }
          />
          <div className="dividerE"></div>
          <input
            type="phone"
            className="input_place"
            name="phone"
            placeholder={
              locales[currentLanguage || "tm"]["Phone Number"] || "Phone Number"
            }
          />
          <div className="dividerE"></div>
          <textarea
            className="text_area"
            name="text"
            placeholder={
              locales[currentLanguage || "tm"]["Your message"] || "Your message"
            }
          ></textarea>
          <div className="submit_button_div">
            <button type="submit" className="submit_button">
              
              {
              locales[currentLanguage || "tm"]["Send Message"] || "Send Message"

              }
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Emailus;
