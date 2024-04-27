import React from "react";
import "./css.index.css";
import config from "../../config.json";
import locales from "../../locales.json";

function MapEmail({ currentLanguage }) {
  const SendMail = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    let data = {};
    formData.forEach((value, key) => (data[key] = value));

    fetch(`${config.serverIP}:${config.serverPort}/mail`, {
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
    <div>
      <div className="wrapperC">
        <div className="locationC">
          <p>
            {locales[currentLanguage || "tm"][
              "We're here to help! Whether you have a question, need support, or want to provide feedback, we'd love to hear from you."
            ] ||
              "We're here to help! Whether you have a question, need support, or want to provide feedback, we'd love to hear from you."}
          </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d787.1226024205682!2d58.37207101265656!3d37.895598446608055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffd7fce0e0049%3A0x2f5c389e27643b5d!2z0JHQuNC30L3QtdGBLdGG0LXQvdGC0YAgItCh0L_QvtGA0YIi!5e0!3m2!1sru!2s!4v1711371481898!5m2!1sru!2s"></iframe>
        </div>

        <form className="form" onSubmit={SendMail} data-form-title="Form Name">
          <p>
            {locales[currentLanguage || "tm"]["Bizimle iletisme gecin"] ||
              "Bizimle iletisme gecin"}
          </p>
          <input
            type="text"
            className="input_placeC"
            name="username"
            placeholder={
              locales[currentLanguage || "tm"]["Your Name"] || "Your Name"
            }
          />
          <div className="dividerE"></div>
          <input
            type="email"
            className="input_placeC"
            name="email"
            placeholder={
              locales[currentLanguage || "tm"]["Your Email"] || "Your Email"
            }
          />
          <div className="dividerE"></div>
          <input
            type="tel"
            className="input_placeC"
            name="phone"
            placeholder={
              locales[currentLanguage || "tm"]["Phone Number"] || "Phone Number"
            }
          />
          <div className="dividerE"></div>
          <textarea
            className="text_areaC"
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
  );
}

export default MapEmail;
