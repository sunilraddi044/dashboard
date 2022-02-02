import React from "react";
import "./Referals.css";
import { messanger_users } from "../../Data/data";

function Referals() {
  return (
    <div className="col-lg-4 mt-md-2 shadow rounded me-auto  bg-light">
      <div className="row">
        <div className="col d-flex align-items-center justify-content-between">
          <h5>Referals</h5>
          <i class="bi bi-exclamation-circle bg-light"></i>
        </div>
      </div>
      <hr />
      <ul class="list-unstyled referals chat-list mt-2 mb-0">
        {messanger_users.map((val) => (
          <li
            key={val.id}
            id={val.id}
            className="d-flex align-items-center gap-3 mb-3 flex-row"
          >
            <img src={val.img} alt="avatar" />
            <div class="about">
              <div class="name">{val.name}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Referals;
