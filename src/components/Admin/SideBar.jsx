import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/images/logo.png";

const SideBar = () => {
  const sidebarList = [
    {
      name: "main",
      link: "/admin/main",
    },
    {
      name: "category",
      link: "/admin/category",
    },
    {
      name: "product",
      link: "/admin/product",
    },
    {
      name: "gallery",
      link: "/admin/gallery",
    },
    // {
    //   name: "language",
    //   link: "/admin/language",
    // },
  ];
  return (
    <div className="sidebar">
      <div>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      {sidebarList.map((sidebarListItem, index) => (
        <Link to={sidebarListItem.link} key={index}>
          {sidebarListItem.name}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
