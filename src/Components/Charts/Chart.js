import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      //   display: true,
      //   text: "Chart.js Bar Chart",
    },
  },
};

// const labels = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// export const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: labels.map(() => 20 + Math.floor(Math.random() * (100 - 0 + 1))),
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//     // {
//     //   label: "Dataset 2",
//     //   data: labels.map(() => 20 + Math.floor(Math.random() * (100 - 0 + 1))),
//     //   backgroundColor: "rgba(53, 162, 235, 0.5)",
//     // },
//   ],
// };

export const Chart = (props) => {
  return (
    <div className="chart">
      {/* <h2>Business Analytics</h2> */}
      <div className="barchart">
        <div className="barchart-graph">
          <Bar options={options} data={props.data} />
        </div>
        {/* <div className="barchart-results">
          <div className="results-data">
            <div className="busy">
              <h5>Busy Time: Monday</h5>
              <h6>Average Customer: 20</h6>
            </div>

            <div className="less">
              <h5>Least Busy: Tuesday</h5>
              <h6>Average Customer: 10</h6>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
