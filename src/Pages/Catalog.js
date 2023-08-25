import React, { useEffect, useState } from "react";
import "./Catalog.css";
import axios from "axios";

import { MainCatalog } from "../Components/MainCatalog";

export const Catalog = () => {
  let index = 0;
  const [item, setItem] = useState([]);

  const itemSize = [1, 2, 3, 4];

  const url = "https://zoteshopapi20230311210030.azurewebsites.net/";

  useEffect(() => {
    fetchApi();
    // if (item.length === 0) {
    //   getAllItems();
    // }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let productCount = 0;
  const fetchApi = () => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
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
        productCount++;
        //uploadData(productItem);
        setItem((prevState) => {
          return [...prevState, productItem];
        });
      }
    });
  };

  const getAllItems = () => {
    // var temp = [];

    axios
      .get(`${url}GetAllProduct`)
      .then((res) => {
        console.log(res.data);
        for (var i = 0; i < res.data.length; i++) {
          if (index === i) {
            // temp[i] = res.data.results[i];
            let data = res.data[i];
            setItem((prevState) => {
              return [...prevState, data];
            });
            index++;
          }
        }
      })
      .catch((error) => console.error(`Error ${error}`));
  };

  // const updateItem = (url, itemId, itemName) => {
  //   axios.get(url).then((res) => {
  //     console.log("success");
  //     let sizeIndex = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
  //     if (sizeIndex > itemSize.length) {
  //       sizeIndex = 0;
  //     }
  //     let tempSize = itemSize[sizeIndex];

  //     let tempPrice = Math.floor(Math.random() * (500 - 5 + 1)) + 5;
  //     const temp = {
  //       id: itemId,
  //       name: itemName,
  //       size: tempSize,
  //       price: tempPrice,
  //       data: res.data,
  //     };

  //     setItem((prevState) => {
  //       return [...prevState, temp];
  //     });
  //   });
  // };

  return (
    <div className="catalog">
      <MainCatalog info={item} />
    </div>
  );
};
