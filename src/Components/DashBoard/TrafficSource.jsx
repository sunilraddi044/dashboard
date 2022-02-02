import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./TrafficSource.css";

function TrafficSource() {
  return (
    <div className="mb-3 ">
      <div className="d-flex align-items-center  justify-content-between">
        <h5>Traffic Sources</h5>
        <i class="bi  bi-exclamation-circle"></i>
      </div>
      <hr />
      <div className="doughnut">
        <Doughnut
          data={{
            datasets: [
              {
                label: "All time",
                data: [12, 19, 3, 5],

                backgroundColor: ["red", "green", "blue", "purple"],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          height="20px"
          width={100}
          options={{ maintainAspectRatio: false, cutoutPercentage: 85 }}
        ></Doughnut>
      </div>
    </div>
  );
}

export default TrafficSource;
