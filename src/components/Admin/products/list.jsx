import { useEffect, useState } from "react";
import config from "../../../config.json";
import { Link, useNavigate } from "react-router-dom";

const List = () => {
  const [data, SetData] = useState([]);
  const redirect = useNavigate();

  const GetData = () => {
    fetch(`${config.serverIP}:${config.serverPort}/product?main=true`, {
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
        <Link className="create-button" to={"/admin/product/create"}>
          Create
        </Link>
      </div>
      <table id="customers">
        <tbody>
          <tr>
            {!!data &&
              !!data[0] &&
              Object.keys(data[0]).map((key) => {
                if (key !== "categoryId") {
                  return <th>{key}</th>;
                }
              })}
            <th></th>
          </tr>
          {!!data &&
            data.map((row) => (
              <tr>
                {Object.keys(row).map((col) => {
                  if (col === "category") {
                    return <td>{row[col] && row[col].name}</td>;
                  } else if (col === "categoryId") {
                  } else {
                    return <td>{row[col]}</td>;
                  }
                })}
                <td style={{ cursor: "pointer" }}>
                  <button
                    className="delete-button"
                    onClick={() => {
                      fetch(
                        `${config.serverIP}:${config.serverPort}/product/${row.id}`,
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
                      redirect(`/admin/product/${row.id}`);
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
