import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./ItemDetailCart.css";
import axios from "axios";
import { BuyNowModal } from "./Modal/BuyNowModal";

export const ItemDetailCart = (props) => {
  const [show, setShow] = useState(false);
  const productSize = ["Smal", "Medium", "Large", "X-Large"];
  let randomDay = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  let baseURL = `https://localhost:7019/Cart/AddCartItem/`;

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  const roundPrice = (price) => {
    let value = Math.round(price * 100) / 100;
    let textValue = "" + value;
    if (textValue.indexOf(".") === -1) {
      textValue += ".00";
    }

    return textValue;
  };

  const addItemToCart = () => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      let foundUser = loggedInUser;
      let index = loggedInUser.indexOf("@");
      foundUser = foundUser.slice(0, index);

      console.log(foundUser);

      const product = {
        name: props.product.productName,
        price: props.product.productPrice,
        amount: 1,
        imageUrl: props.product.productImage,
        username: foundUser,
        productId: props.product.productsId,
      };
      const result = axios.post(`${baseURL}`, product);
      console.log(result.data);
      console.log(product);
      alert("added to cart");
    } else {
      alert("redirecting to login screen");
      window.open("http://localhost:3000/admin");
    }
  };

  function randomDate() {
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let day = new Date().getDate();
    var startingDay = new Date(year, month, day);

    var thisDay = new Date();
    // for (var i = 0; i < 7; i++) {
    let nextday = thisDay.setDate(startingDay.getDate() + randomDay);
    let test = " " + new Date(nextday).toDateString();
    console.log(test);
    // }
    return test;
    // return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  return (
    <div>
      <div>
        <BuyNowModal display={show} handleClose={closeModal} />
      </div>

      <div className="itemCartFilter">
        <h1>${roundPrice(props.product.productPrice)}</h1>

        <div className="brand">
          <h4>{productSize[props.product.size - 1]}</h4>
          <h5>Zotes</h5>
          <hr></hr>
        </div>

        <div className="stock">In Stock</div>

        <div className="buyoptions">
          <div className="buyNow">
            <Button variant="warning" onClick={() => openModal()}>
              Buy Now
            </Button>
          </div>
          <div className="addtocart">
            <Button variant="primary" onClick={() => addItemToCart()}>
              Add To Cart
            </Button>
          </div>
        </div>
        <hr></hr>
        <div className="deliveryDate">
          Expected Delivery
          {randomDate()}
        </div>
      </div>
    </div>
  );
};
