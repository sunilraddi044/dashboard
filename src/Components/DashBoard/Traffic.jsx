import React from "react";

import TrafficChart from "./TrafficChart";

function Traffic() {
  return (
    <div className="mb-3">
      <div className="d-flex align-items-center  justify-content-between">
        <h5>Traffic</h5>
        <i class="bi  bi-exclamation-circle"></i>
      </div>
      <hr />
      <TrafficChart />
    </div>
  );
}

export default Traffic;
