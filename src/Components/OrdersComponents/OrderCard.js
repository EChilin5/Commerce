import React from "react";
import "./OrderCard.css";

export const OrderCard = (props) => {
  const openProductDetail = () => {
    window.open(`http://localhost:3000/catalog/item/${props.it.productId}`);
  };

  return (
    <div key={props.it.TransactionId}>
      <div className="order-card-main">
        <div className="order-card-left">
          <div className="order-card-image">
            <img src={props.image} alt="test" />
          </div>
        </div>

        <div className="order-card-right">
          <div className="order-card-title" onClick={() => openProductDetail()}>
            {props.name}
          </div>
          <div className="order-card-item">$ {props.it.price}</div>
        </div>
      </div>
    </div>
  );
};
