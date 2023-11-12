import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Order.css";
import { OrderCard } from "../Components/OrdersComponents/OrderCard";

export const Orders = () => {
  var url =
    "https://zoteshopapi20230311210030.azurewebsites.net/Transaction/GetUserTransaction/";
  const [orders, setOrders] = useState([]);
  const [showDetails, setshowDetails] = useState(false);

  useEffect(() => {
    fetchOrderInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchOrderInfo = () => {
    let loggedInUser = localStorage.getItem("user");
    // let index = loggedInUser.indexOf("@");
    // loggedInUser = loggedInUser.slice(0, index);

    let temp = {
      cartId: 1,
      amount: 1,
      imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      ProductName: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      productId: 0,
      TransactionId: 10,
    };
    console.log(temp);
    setOrders((prev) => {
      return [...prev, temp];
    });

    // axios
    //   .get(`${url}${loggedInUser}`)
    //   .then((res) => {
    //     console.log(res);
    //     for (var i = 0; i < res.data.length; i++) {
    //       const temp = res.data[i];
    //       setOrders((prevState) => {
    //         return [...prevState, temp];
    //       });
    //     }
    //   })
    //   .catch((error) => console.error(`Error ${error}`));
  };

  const totalPrice = (day) => {
    var price = 0;
    for (var i = 0; i < orders.length; i++) {
      if (day === orders[i].dateSold) {
        let value = Math.round(orders[i].price * 100) / 100;
        price += value;
      }
    }

    let value = Math.round(price * 100) / 100;

    let textValue = "" + value;
    if (textValue.indexOf(".") === -1) {
      textValue += ".00";
    }
    return textValue;
  };

  const filterOrders = () => {
    var temp = [];
    var price = [];
    var count = 0;
    orders.map((days) => {
      const currentDay = days.dateSold;
      if (temp.indexOf(currentDay) === -1) {
        temp[count++] = currentDay;
      }
    });

    temp = temp.reverse();
    var orderAmount = temp.length;
    return temp.map((day) => {
      return (
        <div className="order-day-items">
          <div className="order-day-items-header">
            <h4>Order Number {orderAmount--} </h4>

            <p>Total Price: ${totalPrice(day)}</p>

            <h5>{day}</h5>
          </div>

          <hr />
          {orders
            .filter((it) => it.dateSold === day)
            .map((item) => {
              console.log(item);
              return (
                <div key={item.TransactionId}>
                  {" "}
                  <OrderCard
                    it={item}
                    image={item.imageUrl}
                    name={item.ProductName}
                    contentType={"order"}
                  />
                </div>
              );
            })}
        </div>
      );
    });
  };

  return (
    <div className="order-page">
      {showDetails === true ? (
        ""
      ) : (
        <div>
          <h2>Orders</h2>
          <div className="order-content">
            {orders.isEmpty ? "" : filterOrders()}
          </div>
        </div>
      )}
    </div>
  );
};
