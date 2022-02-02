import "./SideBar.css";
import SideBarMenu from "./SideBarMenu";

import Profile from "./Profile";
import LogOut from "./LogOut";

/**
 * it contains profile name sidebar menus and logout section. For medium size screens side bar menu titles wont be displayed
 */
function SideBar() {
  return (
    <div className="col-3 p-2 side-bar me-auto rounded shadow  bg-light">
      <Profile />
      <hr />
      <SideBarMenu />
      <hr />
      <LogOut />
    </div>
  );
}

export default SideBar;
