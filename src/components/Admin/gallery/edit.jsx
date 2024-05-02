import { useNavigate, useParams } from "react-router-dom";
import config from "../../../config.json";
import { useEffect, useState } from "react";
import Loading from "../loading";

const Edit = () => {
  const redirect = useNavigate();
  const params = useParams();
  const id = params.id;
  const [data, setData] = useState({});
  let [loading, setLoading] = useState(false);

  const GetData = () => {
    fetch(`${config.serverIP}/gallery/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData(response);
      });
  };

  useEffect(() => {
    GetData();
  }, []);

  const SendFrom = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    fetch(`${config.serverIP}/gallery/${id}`, {
      method: "PUT",
      body: data,
    })
      .then((response) => {
        response.json();
      })
      .then((response) => {
        redirect("/admin/gallery");
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  

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

  return (
    <div className="container">
      <Loading value={loading} />

      <form onSubmit={SendFrom}>
        {lang &&
          lang.map((l,i) => (
            <div
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "2px",
                borderRadius: "5Fpx",
              }}
              key={i}
            >
              <h3>{l.name}</h3>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="fname">Name</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="fname"
                    defaultValue={data && data?.name[l.code]}
                    name={l.id + "_name"}
                  />
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
              accept="image/*"
              id="limage"
              multiple
              name="image"
              
            />
          </div>
        </div>

        <div className="row">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Edit;
