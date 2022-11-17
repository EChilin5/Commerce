import axios from "axios";
import React from "react";
import Button from "react-bootstrap/esm/Button";
import "./CheckoutPlaceOrder.css";
import emailjs from "@emailjs/browser";

export const CheckoutPlaceOrder = (props) => {
  let randomDay = Math.floor(Math.random() * (5 - 1 + 1) + 1);

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

  const roundPrice = (price) => {
    let value = Math.round(price * 100) / 100;
    // let textValue = "" + value;
    // if (textValue.indexOf(".") === -1) {
    //   textValue += ".00";
    // }

    return value;
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
        sendEmail();
      });
  };

  const sendEmail = () => {
    let emailObject = {
      email: "edgar3ac@gmail.com",
      name: "hello world 123",
      subject: "Testing 123",
      message: "testing 232 unkown verification check spam",
    };

    var postData = JSON.stringify(emailObject);
    var formData = new FormData();
    formData.append("postData", postData);
    console.log(formData);

    emailjs
      .sendForm(
        process.env.REACT_SERVICE_KEY,
        process.env.REACT_TEMPLATE_KEY,
        formData,
        process.env.REACT_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="checkout-final-box">
        <div>
          <h3>Order Summary</h3>
          <hr />
          <div className="checkout-box-item">
            <div className="checkout-box-item-content">Delivery Date</div>
            <div className="checkout-box-item-number">{randomDate()}</div>
          </div>

          <hr />
          <div className="checkout-box-item">
            <div className="checkout-box-item-content">
              Items ({props.itemCount} items):{" "}
            </div>
            <div className="checkout-box-item-number">
              ${roundPrice(props.price)}
            </div>
          </div>
          <div className="checkout-box-item">
            <div className="checkout-box-item-content">
              Shipping {`&`} handling:
            </div>
            <div className="checkout-box-item-number">$5.00</div>
          </div>
          <div className="checkout-box-item">
            <div className="checkout-box-item-content">Total without Tax:</div>
            <div className="checkout-box-item-number">
              ${roundPrice(props.price) + 5}
            </div>
          </div>
          <div className="checkout-box-item">
            <div className="checkout-box-item-content">Tax:</div>
            <div className="checkout-box-item-number">$5.00</div>
          </div>
          <hr />
          <div className="checkout-box-total">
            <div className="checkout-box-item-content">Order Total :</div>

            <div className="checkout-box-item-number">
              ${roundPrice(props.price) + 10}
            </div>
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
