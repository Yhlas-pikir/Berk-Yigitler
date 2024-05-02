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
    fetch(`${config.serverIP}/product/${id}?main=true`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData(response);
      });
  };

  const GetData2 = () => {
    fetch(`${config.serverIP}/category`, {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const SendFrom = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    fetch(`${config.serverIP}/product/${id}`, {
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



  if (data && data2) {
    return (
      <div className="container">
        <form onSubmit={SendFrom}>
          {lang &&
            lang.map((l,i) => (
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
                    defaultValue={data.name[l.code]}
                    name={l.id + "_name"}
                  />
                </div>
              </div>
            ))}

          <div className="row">
            <div className="col-25">
              <label htmlFor="country">Category</label>
            </div>
            <div className="col-75">
              <select id="country" name="categoryId">
                {data2 &&
                  data2.map((d, i) => {
                    return (
                      <option key={i} value={d.id}>
                        {Object.values(d.name).shift()}
                      </option>
                    );
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
  }
};

export default Edit;
