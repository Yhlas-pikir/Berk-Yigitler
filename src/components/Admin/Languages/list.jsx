import { useEffect, useState } from "react";
import config from "../../../config.json";

const List = () => {
  const [data, SetData] = useState();

  const GetData = async () => {
    await fetch(`${config.serverIP}:${config.serverPort}/category`, {
      method: "GET",
    })
      .then((response) => {
        response.json();
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
      <table id="customers">
        <tbody>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default List;
