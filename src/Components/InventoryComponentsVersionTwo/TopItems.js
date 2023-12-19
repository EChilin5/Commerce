import React from "react";

const TopItems = (props) => {
  return (
    <div>
      <table>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Quantity</th>
        </tr>
        {props.content.map((info) => {
          return (
            <div>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
            </div>
          );
        })}
      </table>
    </div>
  );
};

export default TopItems;
