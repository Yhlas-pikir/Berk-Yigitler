import { useEffect, useState } from "react";
import config from "../../../config.json";
import { Link, useNavigate } from "react-router-dom";

const List = () => {
  const [data, SetData] = useState([]);
  const redirect = useNavigate();

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

  return (
    <div>
      <div style={{ display: "flex" }}>
        <Link className="create-button" to={"/admin/category/create"}>
          Create
        </Link>
      </div>
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
                  if (col === "image") {
                    return (
                      <td>
                        <img
                          height={"60px"}
                          src={`${config.serverIP}:${config.serverPort}/${row[col]}`}
                          alt=""
                        />
                      </td>
                    );
                  } else {
                    return <td>{row[col]}</td>;
                  }
                })}
                <td style={{ cursor: "pointer" }}>
                  <button
                    className="delete-button"

                    onClick={() => {
                      fetch(
                        `${config.serverIP}:${config.serverPort}/category/${row.id}`,
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
                    className="edit-button"
                    onClick={() => {
                      redirect(`/admin/category/${row.id}`);
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
