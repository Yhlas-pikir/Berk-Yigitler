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
        <div className="row">
          <div className="col-25">
            <label htmlFor="fname">Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="fname"
              defaultValue={data.name}
              name="name"
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
              name="description"
              style={{ height: "200px" }}
              defaultValue={data.description}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="limage">Image</label>
          </div>
          <div className="col-75">
            <input type="file" id="limage" name="image" accept="" />
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

export default Edit;
