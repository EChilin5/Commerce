import React from "react";
import Table from "react-bootstrap/Table";
import "./TopItems.css";

const TopItems = (props) => {
  const getCurrentMonth = () => {
    let today = new Date();
    let date = today.getMonth() + 1;
    const month = today.toLocaleString("default", { month: "short" });
    return month;
  };

  return (
    <div className="top-items-container">
      <div className="top-items-header">
        <h5>Top Selling Items ({getCurrentMonth()})</h5>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {props.content.map((info) => {
            return (
              <tr>
                <td>{info.id}</td>
                <td>{info.name}</td>
                <td>{info.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TopItems;
