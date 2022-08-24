import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Order.css";
import { OrderCard } from "../Components/OrdersComponents/OrderCard";
import { CheckoutForm } from "../Components/CheckOutForm/CheckoutForm";
import { CheckoutPage } from "../Components/CheckOutForm/CheckoutPage";

export const Checkout = () => {
  return (
    <div className="order-page">
      <CheckoutPage />
    </div>
  );
};
