import React from "react";
import Chart from "react-apexcharts";

const PieChart = () => {
  let testObject = {
    series: [44, 55, 13, 43],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C", "Team D"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div>
      <h4>Overall Expense Report</h4>
      <div id="chart">
        <Chart
          options={testObject.options}
          series={testObject.series}
          type="pie"
          width="100%"
        />
      </div>
    </div>
  );
};

export default PieChart;
