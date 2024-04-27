import { useNavigate } from "react-router-dom";
import config from "../../../config.json";
import { useEffect, useState } from "react";
import Loading from "../loading";

const Create = () => {
  const redirect = useNavigate();
  const [data, SetData] = useState([]);

  let [loading, setLoading] = useState(false);

  const GetData = () => {
    fetch(`${config.serverIP}:${config.serverPort}/category`, {
      method: "GET",
    })
      .then(async (response) => {
        return await response.json();
      })
      .then((response) => {
        SetData(response);
      });
  };

  useEffect(() => {
    GetData();
  }, []);

  const SendFrom = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.target);

    fetch(`${config.serverIP}:${config.serverPort}/product`, {
      method: "POST",
      body: data,
    })
      .then((response) => {
        response.json();
      })
      .then((response) => {
        redirect("/admin/product");
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
        {/* <div className="row">
          <div className="col-25">
            <label htmlFor="subject">Description</label>
          </div>
          <div className="col-75">
            <textarea
              id="subject"
              name="description"
              style={{ height: "200px" }}
            ></textarea>
          </div>
        </div> */}
        {/* <div className="row">
          <div className="col-25">
            <label htmlFor="limage">Image</label>
          </div>
          <div className="col-75">
            <input type="file" accept="image/*" id="limage" name="image" accept="" />
          </div>
        </div> */}
        {/* 
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
        <div className="row">
          <div className="col-25">
            <label htmlFor="country">Category</label>
          </div>
          <div className="col-75">
            <select id="country" name="categoryId">
              {data.map((d) => (
                <option value={d.id}>{d.name}</option>
              ))}
            </select>
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
