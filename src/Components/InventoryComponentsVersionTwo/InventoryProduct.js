import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductTableList from "./ProductTableList";

const InventoryProduct = () => {
  const itemSize = [1, 2, 3, 4];
  let productCount = 0;
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

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

  return (
    <div>
      <div>
        <h4>General Product Inventory</h4>
      </div>
      <ProductTableList product={item} />
    </div>
  );
};

export default InventoryProduct;
