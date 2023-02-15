import React, { useState, useEffect } from "react";
import axios from "axios";
import { OrderCard } from "../OrdersComponents/OrderCard";
import { CheckoutForm } from "./CheckoutForm";
import { CheckoutPlaceOrder } from "./CheckoutPlaceOrder";
import "./CheckoutPage.css";
import { CheckoutShipping } from "./CheckoutShipping";

export const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [sum, setSum] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    fetchCartInfo(loggedInUser);
  }, []);

  const url = "https://localhost:7019/Cart/GetAllCartItem/";

  const roundPrice = (price) => {
    let value = Math.round(price * 100) / 100;
    // let textValue = "" + value;
    // if (textValue.indexOf(".") === -1) {
    //   textValue += ".00";
    // }

    return value;
  };

  const updateSum = (price) => {
    price = roundPrice(price);
    setSum(sum + price);
  };

  const updateLength = (item) => {
    setItemCount(itemCount + item);
  };

  const fetchCartInfo = (email) => {
    const user = { userName: email };
    let count = 0;
    let price = 0;

    axios
      .get(`${url}${user}`)
      .then((res) => {
        for (var i = 0; i < res.data.length; i++) {
          let cartItem = res.data[i];
          count += cartItem.amount;
          price += roundPrice(cartItem.price) * cartItem.amount;

          updateSum(price);
          updateLength(count);

          console.log(cartItem);
          setCartItems((prev) => {
            return [...prev, cartItem];
          });
        }
      })
      .catch((error) => console.error(`Error ${error}`));
  };

  return (
    <div className="checkout-main-check">
      <h2>Checkout ({itemCount} items)</h2>
      <div className="checkout-split-page">
        <div className="checkout-left">
          <CheckoutShipping />
          <div>
            <h4>Order Information</h4>
            {cartItems.map((item) => {
              return (
                <div key={item.cartId}>
                  <OrderCard it={item} name={item.name} image={item.imageURL} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="checkout-right">
          <div className="checkout-right-box">
            <CheckoutPlaceOrder
              itemCount={itemCount}
              price={sum}
              orderContent={cartItems}
            />
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
