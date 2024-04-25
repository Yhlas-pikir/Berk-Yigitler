import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../../config.json";

const List = () => {
  const [data, SetData] = useState({});
  const redirect = useNavigate();

  const GetData = () => {
    fetch(`${config.serverIP}:${config.serverPort}/main`, {
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

    const data = new FormData(e.target);
    data.append("type", e.target.action.split("/").pop());

    fetch(`${config.serverIP}:${config.serverPort}/main`, {
      method: "POST",
      body: data,
    })
      .then((response) => {
        response.json();
      })
      .then((response) => {
        redirect("/admin/main");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {Object.keys(data).map((d) => (
        <div className="container">
          <h1>{d}</h1>
          <form action={d} onSubmit={SendFrom}>
            {Object.keys(data[d]).map((d2) => (
              <>
                <div className="row">
                  <div className="col-25">{d2}</div>
                  <div className="col-75">
                    {d2 === "description" ? (
                      <textarea
                        id="subject"
                        name="description"
                        style={{ height: "200px" }}
                        defaultValue={data[d][d2]}
                      ></textarea>
                    ) : d2 === "image" ? (
                      <input type="file" accept="image/*" id="limage" name="image" accept="" />
                    ) : (
                      <input
                        type="text"
                        id="fname"
                        name="name"
                        defaultValue={data[d][d2]}
                      />
                    )}
                  </div>
                </div>
                <br />
              </>
            ))}
            <div className="row">
              <input type="submit" />
            </div>
          </form>
        </div>
      ))}
      {/* {Object.keys(data).map((key) => (
        <div>{data[key]}</div>
      ))} */}
    </>
  );
};

export default List;
