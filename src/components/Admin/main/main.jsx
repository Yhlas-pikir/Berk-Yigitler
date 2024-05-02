import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../loading";
import config from "../../../config.json";

const List = () => {
  const [data, SetData] = useState({});
  const redirect = useNavigate();
  let [loading, setLoading] = useState(false);
  let [category, setCategory] = useState("");

  const GetData = () => {
    fetch(`${config.serverIP}/main`, {
      method: "GET",
    })
      .then(async (response) => {
        return await response.json();
      })
      .then((response) => {
        SetData(response);
        setCategory(Object.keys(response).shift());
      });
  };

  useEffect(() => {
    GetData();
  }, []);

  console.log(category);

  const SendFrom = (e) => {
    e.preventDefault();

    setLoading(true);
    const data = new FormData(e.target);
    data.append("type", e.target.action.split("/").pop());

    fetch(`${config.serverIP}/main`, {
      method: "POST",
      body: data,
    })
      .then((response) => {
        response.json();
      })
      .then((response) => {
        alert("Text is updated");
        redirect("/admin/main");
      })
      .catch((err) => {
        alert("Text is not updated");
        console.log(err);
      });

    setLoading(false);
  };

  console.log();

  return (
    <>
      <div>
        <Loading value={loading} />
      </div>
      <div className="adminMainContent">
        <div className="adminCategory">
          {Object.keys(data).map((d) => (
            <button
              onClick={() => {
                setCategory(d);
              }}
              className="adminCategoryButton"
              style={
                d == category
                  ? {
                      backgroundColor: "#1a9b94",
                      
                    }
                  : {}
              }
            >
              {d}
            </button>
          ))}
        </div>
        {Object.keys(data).map((d) => (
          <div className={`container ${d == category ? "" : "hidden"}`}>
            <h1>{d}</h1>
            <form action={d} onSubmit={SendFrom}>
              {Object.keys(data[d]).map((d2) => (
                <>
                  <div className="row">
                    <div className="col-25">{d2}</div>
                    <div className="col-75">
                      {d2 === "description" || d2 === "phones" ? (
                        typeof data[d][d2] == "object" ? (
                          Object.keys(data[d][d2]).map((key) => (
                            <div>
                              <div>{key}</div>
                              <textarea
                                id="subject"
                                name={`${d2}_${key}`}
                                style={{ height: "200px" }}
                                defaultValue={data[d][d2][key]}
                              ></textarea>
                            </div>
                          ))
                        ) : (
                          <textarea
                            id="subject"
                            name={`${d2}`}
                            style={{ height: "200px" }}
                            defaultValue={data[d][d2]}
                          ></textarea>
                        )
                      ) : d2 === "image" ? (
                        <input
                          type="file"
                          accept="image/*"
                          id="limage"
                          name="image"
                        />
                      ) : typeof data[d][d2] == "object" ? (
                        Object.keys(data[d][d2]).map((key) => (
                          <div>
                            <div>{key}</div>
                            <textarea
                              id="subject"
                              name={`${d2}_${key}`}
                              style={{ height: "100px" }}
                              defaultValue={data[d][d2][key]}
                            ></textarea>
                          </div>
                        ))
                      ) : (
                        <input
                          type="text"
                          id="fname"
                          name={`${d2}`}
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
      </div>
    </>
  );
};

export default List;
