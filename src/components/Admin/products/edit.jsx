import { useNavigate, useParams } from "react-router-dom";
import config from "../../../config.json";
import { useEffect, useState } from "react";

const Edit = () => {
  const redirect = useNavigate();
  const params = useParams();
  const id = params.id;
  const [data, setData] = useState({});
  const [data2, SetData2] = useState([]);

  const GetData = () => {
    fetch(`${config.serverIP}:${config.serverPort}/product/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData(response);
      });
  };

  const GetData2 = () => {
    fetch(`${config.serverIP}:${config.serverPort}/category`, {
      method: "GET",
    })
      .then(async (response) => {
        return await response.json();
      })
      .then((response) => {
        SetData2(response);
      });
  };

  useEffect(() => {
    GetData();
    GetData2();
  }, []);

  const SendFrom = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    fetch(`${config.serverIP}:${config.serverPort}/product/${id}`, {
      method: "PUT",
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
  };

  return (
    <div className="container">
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
              {data2.map((d) => {
                if (d.id === data.categoryId) {
                  return <option value={d.id}>{d.name}</option>;
                } else {
                  return <option value={d.id}>{d.name}</option>;
                }
              })}
            </select>
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
