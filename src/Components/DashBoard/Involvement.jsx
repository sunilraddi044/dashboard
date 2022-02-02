import React from "react";
import { Line } from "react-chartjs-2";
import "./Involvement.css";
function Involvement() {
  return (
    <div className="mb-3 ">
      <div className="d-flex align-items-center  justify-content-between">
        <h5>Inolvement</h5>
        <i class="bi  bi-exclamation-circle"></i>
      </div>
      <hr />
      <div className="involve-line">
        <Line
          data={{
            datasets: [
              {
                label: "All time",
                data: [8, 13, 17, 17, 12, 7],
                backgroundColor: "white",
                borderColor: "rgba(116, 116, 196, 0.63)",
                borderWidth: 4,
              },
              {
                label: "This year",
                data: [18, 15, 11, 14, 16, 19],
                backgroundColor: "white",
                borderColor: "rgba(12, 12, 75, 0.473)",
                borderWidth: 4,
              },
            ],
          }}
          height="30px"
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              xAxes: [
                {
                  gridLines: {
                    display: false,
                    drawBorder: false,
                  },
                },
              ],
              yAxes: [
                {
                  gridLines: {
                    display: false,
                    drawBorder: false,
                  },
                },
              ],
            },
          }}
        ></Line>
      </div>
    </div>
  );
}

export default Involvement;
