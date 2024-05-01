import { useNavigate } from "react-router-dom";
import config from "../../../config.json";
import Loading from "../loading";
import { useEffect, useRef, useState } from "react";

const Create = (ddd) => {
  const redirect = useNavigate();
  let [loading, setLoading] = useState(false);

  const [lang, SetLang] = useState([]);

  const GetLanguage = () => {
    fetch(`${config.serverIP}/language`, {
      method: "GET",
    })
      .then(async (response) => {
        return await response.json();
      })
      .then((response) => {
        SetLang(response);
      });
  };

  useEffect(() => {
    GetLanguage();
  }, []);



  const SendFrom = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.target);
    fetch(`${config.serverIP}/category`, {
      method: "POST",
      body: data,
    })
      .then((response) => {
        response.json();
      })
      .then((response) => {
        redirect("/admin/category");
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
        {lang &&
          lang.map((l, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #a1a1a1",
                margin: "1px",
                padding: "5px",
                borderRadius: "2%",
              }}
            >
              <div className="row">
                <h2>{l.name}</h2>
                <div className="col-25">
                  <label htmlFor="fname">Name</label>
                </div>
                <div className="col-75">
                  <input
                    required
                    type="text"
                    id="fname"
                    name={`${l.id}_name`}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="subject">Description</label>
                </div>
                <div className="col-75">
                  <textarea
                    id="subject"
                    required
                    name={`${l.id}_description`}
                    style={{ height: "200px" }}
                  ></textarea>
                </div>
              </div>
            </div>
          ))}

        <div className="row">
          <div className="col-25">
            <label htmlFor="limage">Image</label>
          </div>
          <div className="col-75">
            <input
              type="file"
              required
              accept="image/*"
              id="limage"
              name="image"
            />
          </div>
        </div>
        {/* <div className="row">
          <div className="col-25">
            <label htmlFor="country">Country</label>
          </div>
          <div className="col-75">
            <select id="country" name="country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="subject">Subject</label>
          </div>
          <div className="col-75">
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: "200px" }}
            ></textarea>
          </div>
        </div> */}
        <br />
        <div className="row">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Create;
