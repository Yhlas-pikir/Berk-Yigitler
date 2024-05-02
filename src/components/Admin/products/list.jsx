import { useEffect, useState } from "react";
import config from "../../../config.json";
import { Link, useNavigate } from "react-router-dom";

const List = ({ currentLanguage }) => {
  const [data, SetData] = useState([]);
  const redirect = useNavigate();

  const GetData = () => {
    fetch(`${config.serverIP}/product?main=true`, {
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

  if (data) {
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
                Object.keys(data[0]).map((key, i) => {
                  if (key !== "categoryId") {
                    return <th key={i}>{key}</th>;
                  }
                })}
              <th></th>
            </tr>
            {!!data &&
              data.map((row, i) => (
                <tr key={i}>
                  {Object.keys(row).map((col, i) => {
                    if (col === "category") {
                      return (
                        <td key={i}>
                          {row[col] && row[col].categoryTranslates.shift().name}
                        </td>
                      );
                    } else if (col === "categoryId") {
                    } else if (col === "productTranslates") {
                      return (
                        <td key={i}>
                          {row[col].map((trans, i) => (
                            <div key={i}>{trans.name}</div>
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
                          fetch(`${config.serverIP}/product/${row.id}`, {
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
  }
};

export default List;
