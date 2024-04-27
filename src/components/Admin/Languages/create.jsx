import { useNavigate } from "react-router-dom";
import config from "../../../config.json";
import { useEffect, useState } from "react";
import Loading from "../loading";

const Create = () => {
  const redirect = useNavigate();

  let [loading, setLoading] = useState(false);

  const SendFrom = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.target);

    fetch(`${config.serverIP}:${config.serverPort}/language`, {
      method: "POST",
      body: data,
    })
      .then((response) => {
        response.json();
      })
      .then((response) => {
        redirect("/admin/language");
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  return (
    <div className="container">
      <Loading value={loading} />
      <form onSubmit={SendFrom}>
        <div className="row">
          <div className="col-25">
            <label htmlFor="fname">Name</label>
          </div>
          <div className="col-75">
            <input type="text" className="adtext" id="fname" name="name" />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="fname">Code</label>
          </div>
          <div className="col-75">
            <input type="text" className="adtext" id="fname" name="code" />
          </div>
        </div>
        <br />
        <div className="row">
          <input type="submit" className="adsub" />
        </div>
      </form>
    </div>
  );
};

export default Create;
