import { Outlet } from "react-router-dom";
import SideBar from "./components/Admin/SideBar";

const Admin = () => {
  return (
    <div>
      <SideBar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
