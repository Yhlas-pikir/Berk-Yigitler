import { useEffect, useState } from "react";
import config from "../../../config.json";
import { Link, useNavigate } from "react-router-dom";

const List = () => {
  const [data, SetData] = useState([]);
  const redirect = useNavigate();

  const GetData = () => {
    fetch(`${config.serverIP}:${config.serverPort}/gallery`, {
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

  return (
    <div>
      <Link to={"/admin/gallery/create"}>Create</Link>
      <table id="customers">
        <tbody>
          <tr>
            {!!data &&
              !!data[0] &&
              Object.keys(data[0]).map((key) => <th>{key}</th>)}
            <th></th>
          </tr>
          {!!data &&
            data.map((row) => (
              <tr>
                {Object.keys(row).map((col) => {
                  if (col === "galleries") {
                    return (
                      <td style={{ overflow: "auto" }}>
                        {row[col].map((value) => (
                          <img
                            height={"60px"}
                            src={`${config.serverIP}:${config.serverPort}/${value.image}`}
                            alt=""
                          />
                        ))}
                      </td>
                    );
                  } else {
                    return <td>{row[col]}</td>;
                  }
                })}
                <td style={{ cursor: "pointer" }}>
                  <button
                    onClick={() => {
                      fetch(
                        `${config.serverIP}:${config.serverPort}/gallery/${row.id}`,
                        {
                          method: "DELETE",
                        }
                      );
                      window.location.reload();
                    }}
                    type="button"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      redirect(`/admin/gallery/${row.id}`);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
