import React from "react";
import "./SalesStatistic.css";
import { Line } from "react-chartjs-2";
import "./LineChart.css";

function LineChart() {
  return (
    <div className="linechart">
      <Line
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "All time",
              data: [12, 19, 3, 5, 2, 3],

              borderColor: "blue",
              borderWidth: 4,
            },
            {
              label: "This year",
              data: [20, 35, 6, 19, 20, 31],

              borderColor: "red",
              borderWidth: 4,
            },
          ],
        }}
        height={20}
        width={600}
        options={{ maintainAspectRatio: false }}
      ></Line>
    </div>
  );
}

export default LineChart;
