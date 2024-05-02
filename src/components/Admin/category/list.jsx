import { useEffect, useState, useCallback } from "react";
import config from "../../../config.json";
import { Link, useNavigate } from "react-router-dom";

const List = () => {
  const [data, SetData] = useState([]);
  const redirect = useNavigate();

  const GetData = () => {
    fetch(`${config.serverIP}/category`, {
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
              Object.keys(data[0]).map((key, i) => <th key={i}>{key}</th>)}
            <th></th>
          </tr>
          {!!data &&
            data.map((row, i) => (
              <tr key={i}>
                {Object.keys(row).map((col, i) => {
                  if (col === "image") {
                    return (
                      <td key={i}>
                        <img
                          height={"60px"}
                          src={`${config.serverIP}/${row[col]}`}
                          alt=""
                        />
                      </td>
                    );
                  } else if (col == "id") {
                    return <td key={i}>{row[col]}</td>;
                  } else {
                    return (
                      <td key={i}>
                        {Object.keys(row[col]).map((key, i) => (
                          <table key={i}>
                            <tbody>
                              <tr>
                                <td>{key}</td>
                                <td>{row[col][key]}</td>
                              </tr>
                            </tbody>
                          </table>
                        ))}
                      </td>
                    );
                  }
                })}
                <td style={{ cursor: "pointer" }}>
                  <button
                    className="delete-button"
                    onClick={() => {
                      // eslint-disable-next-line no-restricted-globals
                      if (confirm(`You have delete ${row.name}`)) {
                        fetch(`${config.serverIP}/category/${row.id}`, {
                          method: "DELETE",
                        }).then((response) => {
                          window.location.reload();
                        });
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
