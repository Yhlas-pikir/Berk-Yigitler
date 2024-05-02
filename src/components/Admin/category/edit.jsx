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

  const GetData = () => {
    fetch(`${config.serverIP}/category/${id}`)
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
    setLoading(true);
    fetch(`${config.serverIP}/category/${id}`, {
      method: "PUT",
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
    setLoading(true);
  };

  

  if (Object.keys(data).length) {
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
                      defaultValue={data && data.name[l.code]}
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
                      defaultValue={data && data?.description[l.code]}
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
              <input type="file" accept="image/*" id="limage" name="image" />
            </div>
          </div>
          <br />
          <div className="row">
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
};

export default Edit;
