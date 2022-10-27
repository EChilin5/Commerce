import React from "react";
import "./OrderCard.css";

export const OrderCard = (props) => {
  const openProductDetail = () => {
    window.open(`http://localhost:3000/catalog/item/${props.it.productId}`);
  };

  const roundPrice = (price) => {
    let value = Math.round(price * 100) / 100;
    let textValue = "" + value;
    if (textValue.indexOf(".") === -1) {
      textValue += ".00";
    }

    return textValue;
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
          <div className="order-card-item">$ {roundPrice(props.it.price)}</div>
        </div>
      </div>
    </div>
  );
};
