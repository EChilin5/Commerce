import React from "react";
import Table from "react-bootstrap/Table";

const TopItems = (props) => {
  return (
    <div>
      <div>
        <h4>Top Selling Items</h4>
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
                <td>0</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TopItems;
