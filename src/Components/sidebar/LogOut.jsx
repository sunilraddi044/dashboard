import React from "react";
import "./LogOut.css";

function LogOut() {
  return (
    <div className="d-flex align-items-center">
      <h2>
        <i
          class="bi fs-5 logout-icon bi-box-arrow-left"
          style={{ color: "#555" }}
        ></i>
      </h2>
      <h5 className="logout  ms-2">Logout</h5>
    </div>
  );
}

export default LogOut;
