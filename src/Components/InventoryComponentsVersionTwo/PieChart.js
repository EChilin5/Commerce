import React from "react";
import Chart from "react-apexcharts";
import "./PieChart.css";

const PieChart = () => {
  let testObject = {
    series: [44, 55, 13, 43],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Purchase", "Sale", "Expense", "Gross Profit"],
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
    <div className="pie-chart-container">
      <h5>Overall Expense Report</h5>
      <div id="chart">
        <Chart
          options={testObject.options}
          series={testObject.series}
          type="pie"
          width="380"
        />
      </div>
    </div>
  );
};

export default PieChart;
