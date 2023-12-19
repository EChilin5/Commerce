import React from "react";
import "./CardCatalog.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";

export const CardCatalog = (props) => {
  let itemSize = ["Small", "Medium", "Large", "XL"];

  let randomDay = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  let baseURL = "http://localhost:3000/catalog/item/";
  let hostedUrl = "https://commercezotes.web.app/catalog/item/";

  const handleItemDetail = () => {
    let urlItem = hostedUrl + props.item.productsId;
    window.open(urlItem);
    window.close();
    //props.display(true, props.item);
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

  const roundPrice = (price) => {
    let value = Math.round(price * 100) / 100;
    let textValue = "" + value;
    if (textValue.indexOf(".") === -1) {
      textValue += ".00";
    }

    return textValue;
  };

  return (
    <div className="cardblock-main">
      <div className="cardBlock">
        <div className="carblock-image">
          <img src={props.image} alt="item" />
        </div>
        <div className="cardblock-desc">
          <div
            className="cardblock-desc-name"
            onClick={() => handleItemDetail()}
          >
            {props.name}
          </div>
          <div className="cardblock-desc-ratring">4 out of 5</div>
          <div className="cardblock-desc-price">
            ${roundPrice(props.item.productPrice)}
          </div>
          <div className="cardblock-desc-delivery">
            Delivery Date {randomDate()}
          </div>
        </div>
      </div>
    </div>
  );
};
