import React from "react";
import Chart from "react-apexcharts";
import "./StockAnalysis.css";

const StockAnalysis = () => {
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
    <div className="stock-analysis-container">
      <div>
        <h4>Stock OverView</h4>
      </div>
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={testObject.options}
            series={testObject.series}
            type="bar"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default StockAnalysis;
