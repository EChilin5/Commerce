import React from "react";

const ReportCard = (props) => {
  return (
    <div className="report-card-container">
      <div className="report-card-img">
        <img src="" alt="stock image" />
      </div>
      <div className="report-card-title">{props.data.name}</div>
      <div className="report-card-number">{props.data.number}</div>
    </div>
  );
};

export default ReportCard;
