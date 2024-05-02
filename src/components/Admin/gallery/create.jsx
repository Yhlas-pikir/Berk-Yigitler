import { useNavigate } from "react-router-dom";
import config from "../../../config.json";
import Loading from "../loading";
import { useEffect, useState } from "react";

const Create = () => {
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
    fetch(`${config.serverIP}/gallery`, {
      method: "POST",
      body: data,
    })
      .then((response) => {
        response.json();
      })
      .then((response) => {
        setLoading(false);
        redirect("/admin/gallery");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <Loading value={loading} />
      <form onSubmit={SendFrom}>
        {lang.map((l,i) => (
          <div key={i} className="row">
            <h1>{l.name}</h1>
            <div className="col-25">
              <label htmlFor="fname">Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                className="adtext"
                id="fname"
                name={l.id + "_name"}
              />
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
              id="limage"
              multiple
              name="image"
              accept="image/*"
            />
          </div>
        </div>

        <br />
        <div className="row">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Create;
