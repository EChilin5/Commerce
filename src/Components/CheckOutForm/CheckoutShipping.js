import React from "react";
import "./CheckoutShipping.css";

export const CheckoutShipping = () => {
  return (
    <div>
      <div className="shipping-checkout">
        <div className="shipping-checkout-title">Shipping address</div>
        <div className="shipping-checkout-recipient">
          <div className="recipient-info">Edgar Chilin</div>
          <div className="recipient-info">123 Wilson Rd</div>
          <div className="recipient-info">Bomton, CA 91234</div>
          <div className="recipient-info-last">Leave Instructions</div>
        </div>
        <div className="shipping-checkout-update">Update</div>
      </div>
      <hr></hr>
    </div>
  );
};
