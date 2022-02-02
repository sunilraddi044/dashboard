import "./SideBarMenu.css";
import { menu } from "../../Data/data";
import { useState } from "react";
import { Link } from "react-router-dom";

function SideBarMenu() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  function activeMenuHandler(e) {
    setActiveItem(e.target.id);
  }
  return (
    <div className="row ">
      <div className="col-12 " onClick={activeMenuHandler}>
        <ul className="d-flex gap-2 flex-column align-items-start justify-content-start">
          {menu.map((data) => (
            <Link key={data.id} className="router-links" to={`/${data.title}`}>
              <li
                className={`d-flex   ${
                  activeItem === data.title ? "active-menu-item" : ""
                }`}
                key={data.id}
                id={data.title}
              >
                {data.icon}
                <h5 className="menu-title mt-2  fs-6" id={data.title}>
                  {data.title}
                </h5>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBarMenu;
