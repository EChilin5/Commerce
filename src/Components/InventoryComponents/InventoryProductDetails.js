import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./IventoryProductDetails.css";

export const InventoryProductDetails = () => {
  let { id } = useParams();
  let url = "http://localhost:53014/api/Product/api/Products/";
  const [productDetails, setProductDetails] = useState([
    {
      productsId: "",
      productName: "",
      productImage: "",
      quantity: "",
      size: "",
    },
  ]);

  useEffect(() => {
    console.log(id);
    fetchPokemonItem(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPokemonItem = (id) => {
    console.log("Test");
    console.log({ id });
    axios.put(`${url}${id}`).then((res) => {
      console.log(res.data);

      //   let data = {
      //     productsId: res.data[0].productsId,
      //     productName: res.data[0].productName,
      //     productImage: res.data[0].productImage,
      //     quantity: res.data[0].quantity,
      //     size: res.data[0].size,
      //   };
      setProductDetails((prevState) => [
        ...prevState,
        {
          productsId: res.data[0].productsId,
          productName: res.data[0].productName,
          productImage: res.data[0].productImage,
          productPrice: res.data[0].productPrice,
          quantity: res.data[0].quantity,
          size: res.data[0].size,
        },
      ]);
    });
  };

  return (
    <div className="inventory-analysis">
      <h1>Item Analysis section</h1>
      <div>
        <div>Rank 1/20</div>
        <div>{productDetails[productDetails.length - 1].productName}</div>
        <div>${productDetails[productDetails.length - 1].productPrice}</div>

        <div>
          {" "}
          Item Id #{productDetails[productDetails.length - 1].productsId}
        </div>
        <div>
          <img
            src={productDetails[productDetails.length - 1].productImage}
            alt=""
            width="300px"
            height="200px"
          />
        </div>
      </div>
    </div>
  );
};
