import React from "react";
import "./InventoryItem.css";
import Button from "react-bootstrap/Button";

export const InventoryItem = (props) => {
  const handleItemDetail = () => {
    let urlItem = "http://localhost:3000/inventory/item/" + props.id;
    window.open(urlItem);
    window.close();
    //props.display(true, props.item);
  };

  return (
    <div className="inventory-product" onClick={() => handleItemDetail()}>
      <h3>Product #{props.id}</h3>
      <div className="inventory-product-section">
        <div className="section-one">
          <img src={props.image} alt="" height="200px" width="150px" />
        </div>
        <div className="section-two">
          {props.name}

          <div className="section-two-quantity">
            <div className="section-three"> Stock: {props.quantity}</div>
            <div className="section-four">
              <Button>Add</Button>
              <input></input>
              <Button>Subtract</Button>
            </div>
          </div>
        </div>
      </div>{" "}
      <hr />
    </div>
  );
};
