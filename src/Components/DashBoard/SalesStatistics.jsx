import React from "react";

import LineChart from "./LineChart";

function SalesStatistics() {
  return (
    <div className="col-lg-7 mb-md-2 shadow  flex-wrap rounded me-auto top-left-col  bg-light">
      <div className="d-flex align-items-center justify-content-between">
        <h5>Sale Statistics</h5>
        <i class="bi bi-exclamation-circle bg-light"></i>
      </div>
      <hr />
      <LineChart />
    </div>
  );
}

export default SalesStatistics;
