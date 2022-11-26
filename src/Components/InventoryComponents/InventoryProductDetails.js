import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
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
      <div className="inventory-analysis-header">
        <h1>Item Analysis section</h1>
        <Button>Update Items</Button>
      </div>

      <div>
        <div className="product-details-one">
          <div className="product-rank">Rank 1/20</div>
          <div className="product-details-one-mid">
            <div>{productDetails[productDetails.length - 1].productName}</div>
            <div>${productDetails[productDetails.length - 1].productPrice}</div>
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
        <div className="product-details-description">
          {" "}
          <h4>Product Description</h4>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>

        <div className="product-details-bar-charts">
          <div className="chart-left">
            <h4>Sale Rate</h4>
          </div>
          <div className="chart-right">
            <h4>Return Rate</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
