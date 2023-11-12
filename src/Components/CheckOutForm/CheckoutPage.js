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
    // let loggedInUser = localStorage.getItem("user");
    // let index = loggedInUser.indexOf("@");
    // loggedInUser = loggedInUser.slice(0, index);
    let loggedInUser = "";

    fetchCartInfo(loggedInUser);
  }, []);

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

  const updateSum = (price) => {
    price = roundPrice(price);
    setSum(sum + price);
  };

  const updateLength = (item) => {
    setItemCount(itemCount + item);
  };

  const fetchCartInfo = (email) => {
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

    count += temp.amount;
    price += roundPrice(temp.price) * temp.amount;

    updateSum(price);
    updateLength(count);

    // axios
    //   .get(`${url}${email}`)
    //   .then((res) => {
    //     console.log(res);
    //     for (var i = 0; i < res.data.length; i++) {
    //       let cartItem = res.data[i];
    //       count += cartItem.amount;
    //       price += roundPrice(cartItem.price) * cartItem.amount;

    //       updateSum(price);
    //       updateLength(count);

    //       console.log(cartItem);
    //       setCartItems((prev) => {
    //         return [...prev, cartItem];
    //       });
    //     }
    //   })
    //   .catch((error) => console.error(`Error ${error}`));
  };

  return (
    <div className="checkout-main-check">
      <h2>Checkout ({itemCount} items)</h2>
      <div className="checkout-split-page">
        <div className="checkout-left">
          <CheckoutShipping />
          <div>
            <h4>Order Information</h4>
            <div className="cart-items-section">
              {cartItems.map((item) => {
                return (
                  <div key={item.cartId} className="cart-items-content">
                    <OrderCard
                      it={item}
                      name={item.name}
                      image={item.imageURL}
                      contentType={"checkout"}
                    />
                  </div>
                );
              })}
            </div>
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
