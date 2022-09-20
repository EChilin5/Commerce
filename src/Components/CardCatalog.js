import React from "react";
import "./CardCatalog.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";

export const CardCatalog = (props) => {
  let itemSize = ["Small", "Medium", "Large", "XL"];

  const handleItemDetail = () => {
    console.log("click");
    let urlItem = "http://localhost:3000/catalog/item/" + props.item.productsId;
    window.open(urlItem);
    window.close();
    //props.display(true, props.item);
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
            {props.name} ({itemSize[props.item.size - 1]})
          </div>
          <div className="cardblock-desc-ratring">4 out of 5</div>
          <div className="cardblock-desc-price">
            ${props.item.productPrice}.00
          </div>
          <div className="cardblock-desc-delivery">
            Delivery Date August 8th
          </div>
        </div>
      </div>
    </div>
  );
};
