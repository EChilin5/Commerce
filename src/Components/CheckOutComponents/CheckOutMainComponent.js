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
    //const loggedInUser = localStorage.getItem("user");
    let loggedInUser = "";
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

  const url =
    "https://zoteshopapi20230311210030.azurewebsites.net/Cart/GetAllCartItem/";

  const roundPrice = (price) => {
    let value = Math.round(price * 100) / 100;
    // let textValue = "" + value;
    // if (textValue.indexOf(".") === -1) {
    //   textValue += ".00";
    // }

    return value;
  };

  const fetchCartInfo = (email) => {
    // let input = email.indexOf("@");
    // email = email.slice(0, input);
    // console.log(email);
    const user = { userName: email };
    let count = 0;
    let price = 0;
    const data = localStorage.getItem("userProduct");
    console.log(JSON.parse(data));

    let temp = {
      cartId: 1,
      amount: 1,
      imageURL: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      productId: 0,
    };
    setCartItems((prev) => {
      return [...prev, temp];
    });
    setCartItems((prev) => {
      return [...prev, temp];
    });
    // if (email) {
    //   axios
    //     .get(`${url}${email}`)
    //     .then((res) => {
    //       console.log(res);
    //       for (var i = 0; i < res.data.length; i++) {
    //         let cartItem = res.data[i];
    //         count += cartItem.amount;
    //         price += roundPrice(cartItem.price) * cartItem.amount;

    //         updateSum(price);
    //         updateLength(count);

    //         console.log(cartItem);
    //         setCartItems((prev) => {
    //           return [...prev, cartItem];
    //         });
    //       }
    //     })
    //     .catch((error) => console.error(`Error ${error}`));
    // }
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
          {cartItems.length === 0 ? (
            <div className="empty-cart"> Your Cart is currently empty </div>
          ) : (
            <div>
              {console.log("test " + cartItems[0].name)}
              {cartItems.map((it) => {
                // updateLength(it.itemCount);
                // updateSum(it.price * it.itemCount);
                console.log(it);
                return (
                  <div key={it.cartId}>
                    <CheckOutCard
                      cart={it}
                      updateValues={updateOverallValues}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="cart-content-total">
          Total ({itemCount} items) : ${sum}
        </div>
      </div>
    </div>
  );
};
