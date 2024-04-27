import { useNavigate, useParams } from "react-router-dom";
import server from "../../../config.json";
import { useEffect, useState } from "react";
import Loading from "../loading";

const Edit = () => {
  const redirect = useNavigate();
  const params = useParams();
  const id = params.id;
  const [data, setData] = useState({});
  let [loading, setLoading] = useState(false);

  const GetData = () => {
    fetch(`${server.serverIP}:${server.serverPort}/category/${id}`)
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
  console.log(data);
  const SendFrom = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    setLoading(true);
    fetch(`${server.serverIP}:${server.serverPort}/category/${id}`, {
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

  return (
    <div className="container">
      <Loading value={loading} />
      <form onSubmit={SendFrom}>
        {data &&
          data.categoryTranslates &&
          data.categoryTranslates.map((d) => (
            <div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="fname">Name</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="fname"
                    defaultValue={d && d.name}
                    // name={`${d.na  me}_name`}
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
                    // name={`${d}_description`}
                    style={{ height: "200px" }}
                    defaultValue={d.description}
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
};

export default Edit;
