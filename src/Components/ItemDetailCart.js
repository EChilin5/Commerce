import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./ItemDetailCart.css";
import axios from "axios";
import { BuyNowModal } from "./Modal/BuyNowModal";

export const ItemDetailCart = (props) => {
  const [show, setShow] = useState(false);
  const productSize = ["Smal", "Medium", "Large", "X-Large"];

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  const addItemToCart = () => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = loggedInUser;

      const product = {
        name: props.product.productName,
        price: props.product.productPrice,
        amount: 1,
        imageUrl: props.product.productImage,
        username: foundUser,
        productId: props.product.productsId,
      };
      const result = axios.post("http://localhost:53014/api/Cart", product);
      console.log(result.data);
      console.log(product);
      alert("added to cart");
    } else {
      alert("redirecting to login screen");
      window.open("http://localhost:3000/admin");
    }
  };

  return (
    <div>
      <div>
        <BuyNowModal display={show} handleClose={closeModal} />
      </div>

      <div className="itemCartFilter">
        <h1>${props.product.productPrice}.00</h1>

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
          Expected Delivery August 8-August 20th
        </div>
      </div>
    </div>
  );
};
