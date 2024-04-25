import { Outlet } from "react-router-dom";
import SideBar from "./components/Admin/SideBar";
import { createContext, useContext, useEffect } from "react";
import Loading from "./components/Admin/loading";

const Admin = () => {
  return (
    <div>
      <SideBar />
      <Loading value={false} />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
