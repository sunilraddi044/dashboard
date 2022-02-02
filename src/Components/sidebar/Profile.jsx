import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="d-flex justify-content-center align-items-center align-items-start profile d-flex">
      <h2>
        <i
          class="bi profile-avatar  btn-secondary fs-2 bi-person-circle"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Sunil Raddi 4.50"
        ></i>
      </h2>
      <h5 className="profile-name ps-2">Sunil Raddi</h5>
      <h6 className="rating ms-auto bg-primary py-1 rounded-pill text-light ps-2 pe-2">
        4.50
      </h6>
    </div>
  );
}

export default Profile;
