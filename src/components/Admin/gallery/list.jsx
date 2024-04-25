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
      <div style={{ display: "flex" }}>
        <Link className="create-button" to={"/admin/gallery/create"}>
          Create
        </Link>
      </div>
      <table id="customers">
        <tbody>
          <tr>
            {!!data &&
              !!data[0] &&
              Object.keys(data[0]).map((Key, i) => <th key={i}>{Key}</th>)}
            <th></th>
          </tr>
          {!!data &&
            data.map((row) => (
              <tr>
                {Object.keys(row).map((col, i) => {
                  if (col === "galleries") {
                    return (
                      <td key={i} style={{ overflow: "auto" }}>
                        {row[col].map((value, i2) => (
                          <img
                            key={i2}
                            height={"60px"}
                            src={`${config.serverIP}:${config.serverPort}/${value.image}`}
                            alt=""
                          />
                        ))}
                      </td>
                    );
                  } else {
                    return <td key={i}>{row[col]}</td>;
                  }
                })}
                <td style={{ cursor: "pointer" }}>
                  <button
                    className="delete-button"
                    onClick={() => {
                      // eslint-disable-next-line no-restricted-globals
                      if (confirm(`You have delete ${row.name}`)) {
                        fetch(
                          `${config.serverIP}:${config.serverPort}/gallery/${row.id}`,
                          {
                            method: "DELETE",
                          }
                        );
                        window.location.reload();
                      }
                    }}
                    type="button"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="edit-button"
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
