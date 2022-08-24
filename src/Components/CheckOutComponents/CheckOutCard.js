import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./CheckOutCard.css";

export const CheckOutCard = (props) => {
  const [itemCount, setItemCount] = useState(props.cart.amount);

  const updateItemQuanity = (isIncreased) => {
    var price = props.cart.price;
    if (isIncreased) {
      setItemCount(itemCount + 1);
      props.updateValues(price, 1);
    } else {
      setItemCount(itemCount - 1);
      props.updateValues(0 - price, -1);
    }
  };

  return (
    <div>
      <div className="checkOutCard">
        <div className="checkoutcard-left">
          <img
            src={props.cart.imageURL}
            alt="item"
            width="150px"
            height="150px"
          />
        </div>
        <div className="checkoutcard-right">
          <div className="checkoutcard-right-section">
            <div className="checkoutcard-right-header">
              <div className="wrapper-left-content">
                <div className="checkoutcard-title">{props.cart.name}</div>
                <div className="checkoutcard-brand">Zotes</div>
                <div className="checkoutcard-quantity">
                  <Button onClick={() => updateItemQuanity(true)}>+</Button>
                  <span className="checkoutcard-quantity-count">
                    {" "}
                    {itemCount}{" "}
                  </span>

                  <Button onClick={() => updateItemQuanity(false)}>-</Button>
                </div>
              </div>

              <div className="checkoutcard-price">
                ${props.cart.price * itemCount}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};
