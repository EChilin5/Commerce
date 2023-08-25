import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Chart } from "../Charts/Chart";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "./IventoryProductDetails.css";
import { ProgressWheel } from "./ProgressWheel";

export const InventoryProductDetails = () => {
  let { id } = useParams();
  const [item, setItem] = useState([]);
  const itemSize = [1, 2, 3, 4];

  let url =
    "https://zoteshopapi20230311210030.azurewebsites.net/GetSingleProduct/";
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
    //  fetchPokemonItem(id);
    fetchApi();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let productCount = 0;
  const fetchApi = () => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      let tempId = Number(id);
      for (var i = 0; i < res.data.length; i++) {
        let product = res.data[i];
        let sizeIndex = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
        if (sizeIndex > itemSize.length) {
          sizeIndex = 0;
        }
        let tempSize = itemSize[sizeIndex];
        //console.log(product);
        let productItem = {
          productsId: productCount,
          productName: product.title,
          productImage: product.image,
          productPrice: product.price,
          size: tempSize,
          quantity: 10,
        };

        //uploadData(productItem);
        //console.log(productItem);
        console.log(productItem);

        if (productCount === tempId) {
          console.log("test 12345");
          setProductDetails((prevState) => [
            ...prevState,
            {
              productsId: productItem.productsId,
              productName: productItem.productName,
              productImage: productItem.productImage,
              productPrice: productItem.productPrice,
              quantity: productItem.quantity,
              size: productItem.size,
            },
          ]);
        }

        // if (0 === tempId) {
        //   console.log(test);
        //   setProductDetails((prevState) => [
        //     ...prevState,
        //     {
        //       productsId: productItem.productsId,
        //       productName: productItem.productName,
        //       productImage: productItem.productImage,
        //       productPrice: productItem.productPrice,
        //       quantity: productItem.quantity,
        //       size: productItem.size,
        //     },
        //   ]);
        // }
        productCount++;
        setItem((prevState) => {
          return [...prevState, productItem];
        });
      }
    });
    // console.log(item.length + " rewnrjenw");

    // console.log(productDetails);
  };

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
          productsId: res.data.productsId,
          productName: res.data.productName,
          productImage: res.data.productImage,
          productPrice: res.data.productPrice,
          quantity: res.data.quantity,
          size: res.data.size,
        },
      ]);
    });
  };

  const roundPrice = (price) => {
    let value = Math.round(price * 100) / 100;
    let textValue = "" + value;
    if (textValue.indexOf(".") === -1) {
      textValue += ".00";
    }

    return textValue;
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var data = {
    labels: labels,
    datasets: [
      {
        label: "Sales",
        data: labels.map(() => 20 + Math.floor(Math.random() * (100 - 0 + 1))),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  var data2 = {
    labels: labels,
    datasets: [
      {
        label: "Returns",
        data: labels.map(() => 20 + Math.floor(Math.random() * (100 - 0 + 1))),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="inventory-analysis">
      <div className="inventory-analysis-header">
        <h1>Item Analysis section</h1>
        <Button>Update Items</Button>
      </div>

      <div>
        <div className="product-details-one">
          <div className="product-rank">
            <div className="wheel">
              <ProgressWheel score={90} />
            </div>
            <div className="subtitle">Rank 2/20</div>
          </div>
          <div className="product-details-one-mid">
            <div>{productDetails[productDetails.length - 1].productName}</div>
            <div>Sold by Company X</div>
            <div>
              Price: $
              {roundPrice(
                productDetails[productDetails.length - 1].productPrice
              )}
            </div>
            <div>Current Stock 100</div>
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
            <div>
              <Chart data={data} />
            </div>
          </div>
          <div className="chart-right">
            <h4>Return Rate</h4>
            <div>
              <Chart data={data2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
