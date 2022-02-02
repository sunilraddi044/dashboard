import React from "react";
import "./TrafficChart.css";

const TRAFFICDATA = [
  {
    id: "e1",
    count: 834,
    site: "Linkedin",
    percentage: "64%",
    result: "success",
  },
  { id: "e1", count: 234, site: "Behance", percentage: "74%", result: "info" },
  {
    id: "e1",
    count: 345,
    site: "Instagram",
    percentage: "80%",
    result: "warning",
  },
];

function TrafficChart() {
  return (
    <div>
      {TRAFFICDATA.map((data) => (
        <div key={data.id}>
          <div className="d-flex mt-3 align-items-center">
            <h6 className="ms-2">{data.count}</h6>
            <h6 className="ms-2">{data.site}</h6>
            <h6 className="ms-auto me-3">{data.percentage}</h6>
          </div>
          <div class="progress">
            <div
              class={`progress-bar traffic-bar bg-${data.result}`}
              role="progressbar"
              style={{ width: data.percentage }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="10"
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TrafficChart;
