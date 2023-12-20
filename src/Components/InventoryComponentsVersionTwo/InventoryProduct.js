import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductTableList from "./ProductTableList";

const InventoryProduct = () => {
  const itemSize = [1, 2, 3, 4];
  let productCount = 0;
  const [item, setItem] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);

  useEffect(() => {
    fetchApi();
  }, []);

  // let startIndex = 0;
  // let endIndex = 5;

  const updateCount = () => {
    console.log("up");
    if (end < 20) {
      setEnd(end + 5);
      setStart(start + 5);
    }
  };
  const decrementCount = () => {
    console.log("down");
    if (start > 1 && end <= 20) {
      setEnd(end - 5);
      setStart(start - 5);
    }
  };

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
      <div>
        <button onClick={() => decrementCount()}>{`<`}</button>
        <button onClick={() => updateCount()}>{`>`}</button>
      </div>
      <ProductTableList product={item} startIndex={start} endIndex={end} />
    </div>
  );
};

export default InventoryProduct;
