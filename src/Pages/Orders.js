import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Order.css";
import { OrderCard } from "../Components/OrdersComponents/OrderCard";

export const Orders = () => {
  var url = "http://localhost:53014/api/Transaction";
  const [orders, setOrders] = useState([]);
  const [showDetails, setshowDetails] = useState(false);

  useEffect(() => {
    fetchOrderInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchOrderInfo = () => {
    axios
      .get(`${url}`)
      .then((res) => {
        for (var i = 0; i < res.data.length; i++) {
          const temp = res.data[i];
          setOrders((prevState) => {
            return [...prevState, temp];
          });
        }
      })
      .catch((error) => console.error(`Error ${error}`));
  };

  const filterOrders = () => {
    var temp = [];
    var count = 0;
    orders.map((days) => {
      const currentDay = days.dateSold;
      if (temp.indexOf(currentDay) === -1) {
        temp[count++] = currentDay;
      }
    });

    return temp.map((day) => {
      return (
        <div className="order-day-items">
          <h5>{day}</h5>
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
