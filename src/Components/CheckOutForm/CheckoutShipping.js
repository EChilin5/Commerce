import React, { useEffect, useState } from "react";
import "./CheckoutShipping.css";
import axios from "axios";

export const CheckoutShipping = () => {
  const [address, setAddress] = useState([
    {
      name: "",
      address: "",
      cityState: "",
    },
  ]);

  const baseUrl = `http://localhost:53014/api/User/`;

  useEffect(() => {
    fetchAddress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAddress = () => {
    let loggedInUser = localStorage.getItem("user");
    console.log("rw " + loggedInUser);
    axios.put(`${baseUrl}${loggedInUser}`).then((res) => {
      console.log(res.data);

      setAddress((prevState) => [
        ...prevState,
        {
          name: res.data[0].name,
          address: res.data[0].address,
          cityState: res.data[0].cityState,
        },
      ]);
    });
  };

  return (
    <div>
      <div className="shipping-checkout">
        <div className="shipping-checkout-title">Shipping address</div>
        <div className="shipping-checkout-recipient">
          <div className="recipient-info">
            {address[address.length - 1].name}
          </div>
          <div className="recipient-info">
            {address[address.length - 1].address}
          </div>
          <div className="recipient-info">
            {address[address.length - 1].cityState}
          </div>
          <div className="recipient-info-last">Leave Instructions</div>
        </div>
        <div className="shipping-checkout-update">Update</div>
      </div>
      <hr></hr>
    </div>
  );
};
