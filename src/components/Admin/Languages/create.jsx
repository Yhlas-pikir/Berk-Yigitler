import { useNavigate } from "react-router-dom";
import server from "../../../config.json";

const Create = () => {
  const link = useNavigate();

  const SendFrom = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    fetch(`${server.serverIP}:${server.serverPort}/language`, {
      method: "POST",
      body: data,
    })
      .then((response) => {
        response.json();
      })
      .then((response) => {
        link("/admin/language");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <form onSubmit={SendFrom}>
        <div className="row">
          <div className="col-25">
            <label htmlFor="fname">Name</label>
          </div>
          <div className="col-75">
            <input type="text" id="fname" name="name" />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="lname">Code</label>
          </div>
          <div className="col-75">
            <input type="text" id="lname" name="code" />
          </div>
        </div>
        {/* <div className="row">
          <div className="col-25">
            <label htmlFor="country">Country</label>
          </div>
          <div className="col-75">
            <select id="country" name="country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="subject">Subject</label>
          </div>
          <div className="col-75">
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: "200px" }}
            ></textarea>
          </div>
        </div> */}
        <br />
        <div className="row">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Create;
