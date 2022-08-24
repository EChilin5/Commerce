import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { CheckOutCard } from "./CheckOutCard";
import "./CheckOutMainComponent.css";

export const CheckOutMainComponent = () => {
  const [cartItems, setCartItems] = useState([]);
  const [sum, setSum] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    fetchCartInfo(loggedInUser);
  }, []);

  const updateSum = (price) => {
    setSum(sum + price);
  };

  const updateLength = (item) => {
    setItemCount(itemCount + item);
  };

  const updateOverallValues = (price, count) => {
    updateSum(price);
    updateLength(count);
  };

  const url = "http://localhost:53014/api/Cart";

  const fetchCartInfo = (email) => {
    const user = { userName: email };
    let count = 0;
    let price = 0;

    if (email) {
      axios
        .put(`${url}`, user)
        .then((res) => {
          for (var i = 0; i < res.data.length; i++) {
            let cartItem = res.data[i];
            count += cartItem.amount;
            price += cartItem.price * cartItem.amount;

            updateSum(price);
            updateLength(count);

            console.log(cartItem);
            setCartItems((prev) => {
              return [...prev, cartItem];
            });
          }
        })
        .catch((error) => console.error(`Error ${error}`));
    }
  };

  const openWindow = () => {
    window.open("http://localhost:3000/checkout");
  };

  return (
    <div className="cart">
      <div className="cart-content-header">
        <div className="cart-title">Shopping Cart</div>
        <div className="cart-btn">
          <Button onClick={() => openWindow()}>Checkout</Button>
        </div>
      </div>{" "}
      <div className="cart-content">
        <hr className="cart-hr"></hr>
        <div className="cart-item">
          {cartItems.map((it) => {
            // updateLength(it.itemCount);
            // updateSum(it.price * it.itemCount);
            return (
              <div key={it.cartId}>
                <CheckOutCard cart={it} updateValues={updateOverallValues} />
              </div>
            );
          })}
        </div>
        <div className="cart-content-total">
          Total ({itemCount} items) : ${sum}
        </div>
      </div>
    </div>
  );
};
