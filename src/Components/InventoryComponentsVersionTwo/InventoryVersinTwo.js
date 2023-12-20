import React from "react";
import ReportCard from "./ReportCard";
import TopItems from "./TopItems";
import ProfitLossChart from "./ProfitLossChart";
import StockAnalysis from "./StockAnalysis";
import "./InventoryVersionTwo.css";
import PieChart from "./PieChart";
import InventoryProduct from "./InventoryProduct";

const InventoryVersinTwo = () => {
  let report = [
    {
      id: 1,
      name: "Total Expense",
      number: "$54,543",
    },
    {
      id: 2,
      name: "Gross Profit",
      number: "$244,543",
    },
    {
      id: 3,
      name: "Closing Stock",
      number: "4,543 p",
    },
    {
      id: 4,
      name: "Sale Return",
      number: "$43,643",
    },
    {
      id: 5,
      name: "Purchase Return",
      number: "$8,434",
    },
  ];

  let topItems = [
    { id: 1, name: "t-shirt", amount: "65" },
    { id: 2, name: "pants", amount: "56" },
    { id: 3, name: "shoes", amount: "49" },
    { id: 4, name: "socks", amount: "45" },
    { id: 5, name: "hats", amount: "32" },
  ];

  return (
    <div className="inventory-content">
      <div className="inventory-heading">
        <h3>DashBoard</h3>
        <div className="inventory-subheading">
          Welcome to your inventory Record Pablo
        </div>
      </div>
      <div className="inventory-container">
        <div className="inventory-container-left">
          <div className="inventory-section-base-report">
            {report.map((content) => {
              return (
                <div
                  className="inventory-section-base-report-card"
                  key={content.id}
                >
                  <ReportCard data={content} />
                </div>
              );
            })}
          </div>
          <div className="inventory-section-base-profit-loss">
            <ProfitLossChart />
          </div>
          <div className="inventory-section-base-stock-analysis">
            <StockAnalysis />
          </div>
        </div>
        <div className="inventory-container-right">
          <div className="inventory-section-report-pie">
            <PieChart />
          </div>
          <div className="inventory-section-top-items">
            <TopItems content={topItems} />
          </div>
          <div className="inventory-section-team"></div>
        </div>
      </div>
      <div className="inventory-product-container">
        <InventoryProduct />
      </div>
    </div>
  );
};

export default InventoryVersinTwo;
