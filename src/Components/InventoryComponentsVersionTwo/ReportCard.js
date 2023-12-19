import React from "react";
import snow from "../../images/snow.jpg";
import "./ReportCard.css";

const ReportCard = (props) => {
  return (
    <div className="report-card-container">
      <div className="report-card-img">
        <img src={snow} alt="stock based example" />
      </div>
      <div className="report-card-title">{props.data.name}</div>
      <div className="report-card-number">{props.data.number}</div>
    </div>
  );
};

export default ReportCard;
