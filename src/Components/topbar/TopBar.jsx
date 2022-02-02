import React from "react";
import "./TopBar.css";

/**
 * below function is for Logo and top bar icons
 */
function TopBar() {
  return (
    <div className="topbar">
      <nav class="navbar  navbar-expand-lg navbar-light ">
        <div class="container pt-3 mt-5  gap-3">
          <a
            class="navbar-brand me-auto me-auto text-white bg-primary ps-3 rounded-pill pe-3"
            href="./"
          >
            Miro
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-lg-auto gap-3 ms-sm-5 me-5 mb-2 mb-lg-0">
              <li class="nav-item ">
                <i class="bi nav-item bi-search "></i>
              </li>
              <li class="nav-item ">
                <i class="bi nav-item p-2 bi-bell position-relative ">
                  <span class="position-absolute   translate-middle badge bg-danger border border-light rounded-circle">
                    <span class="visually-hidden">New alerts</span>
                  </span>
                </i>
              </li>
              <li class="nav-item ">
                <i class="bi nav-item bi-person"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default TopBar;
