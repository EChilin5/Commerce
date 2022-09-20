import axios from "axios";
import React from "react";
import Button from "react-bootstrap/esm/Button";
import "./CheckoutPlaceOrder.css";

export const CheckoutPlaceOrder = (props) => {
  const submitOrder = () => {
    let order = props.orderContent;
    const loggedInUser = localStorage.getItem("user");
    const current = new Date();
    const date = `${
      current.getMonth() + 1
    }/${current.getDate()}/${current.getFullYear()}`;

    console.log(props.orderContent.length);

    for (var i = 0; i < order.length; i++) {
      let orderItem = order[i];

      let orderInformation = {
        productName: orderItem.name,
        imageUrl: orderItem.imageURL,
        price: orderItem.price * orderItem.amount,
        purchaserName: loggedInUser,
        dateSold: date,
        productId: orderItem.productId,
      };
      console.log(orderInformation);
      uploadOrder(orderInformation);
    }

    deleteCartItems(loggedInUser);
    // window.close();
    // window.open("http://localhost:3000/orders");
  };

  const uploadOrder = (order) => {
    axios.post("http://localhost:53014/api/Transaction", order).then((res) => {
      console.log(res.data);
    });
  };

  const deleteCartItems = (user) => {
    const userInfo = {
      userName: user,
    };
    console.log(userInfo);
    axios
      .delete("http://localhost:53014/api/Cart", { data: { userName: user } })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <div className="checkout-final-box">
        <div>
          <h3>Order Summary</h3>
          <div className="checkout-box-item">
            <div className="checkout-box-item-content">
              Items ({props.itemCount} items):{" "}
            </div>
            <div className="checkout-box-item-number">${props.price}</div>
          </div>
          <div className="checkout-box-item">
            <div className="checkout-box-item-content">
              Shipping {`&`} handling:
            </div>
            <div className="checkout-box-item-number">$5.00</div>
          </div>
          <div className="checkout-box-item">
            <div className="checkout-box-item-content">Total without Tax:</div>
            <div className="checkout-box-item-number">${props.price + 5}</div>
          </div>
          <div className="checkout-box-item">
            <div className="checkout-box-item-content">Tax:</div>
            <div className="checkout-box-item-number">$5.00</div>
          </div>
          <hr />
          <div className="checkout-box-total">
            <div className="checkout-box-item-content">Order Total :</div>

            <div className="checkout-box-item-number">${props.price + 10}</div>
          </div>
        </div>
        <hr />
        <div>
          <Button onClick={() => submitOrder()}> Place your Order</Button>
        </div>
      </div>
    </div>
  );
};
