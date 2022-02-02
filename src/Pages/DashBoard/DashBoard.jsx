import React from "react";
import Involvement from "../../Components/DashBoard/Involvement";

import Referals from "../../Components/DashBoard/Referals";
import SalesStatistics from "../../Components/DashBoard/SalesStatistics";
import Traffic from "../../Components/DashBoard/Traffic";
import TrafficSource from "../../Components/DashBoard/TrafficSource";
import "./DashBoard.css";

function DashBoard() {
  return (
    <div className="col-9 dashbord-content p-2 me-auto">
      <div class="container-fluid">
        <div className="row dashboard-up justify-content-evenly">
          <SalesStatistics />
          <Referals />
        </div>

        <div className="row mt-4 gap-3  ">
          <div className="col-lg mt-2 shadow rounded  botton-col bg-light">
            <Traffic />
          </div>
          <div className="col-lg mt-2 shadow rounded   botton-col bg-light">
            <Involvement />
          </div>
          <div className="col-lg mt-2 shadow rounded  botton-col bg-light">
            <TrafficSource />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
