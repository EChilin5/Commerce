import React from "react";
import Chart from "react-apexcharts";
import "./ProfitLossChart.css";

const ProfitLossChart = () => {
  let testObject = {
    options: {
      chart: {
        type: "line",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  return (
    <div className="profit-loss-container">
      <div>
        <h4>Profit & Loss OverView</h4>
      </div>
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={testObject.options}
            series={testObject.series}
            type="line"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfitLossChart;
