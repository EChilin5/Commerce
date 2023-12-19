import Reac, { useState, useEffect } from "react";
import axios from "axios";
import { InventoryItem } from "../Components/InventoryComponents/InventoryItem";
import "./Inventory.css";
import InventoryVersinTwo from "../Components/InventoryComponentsVersionTwo/InventoryVersinTwo";

export const Inventory = () => {
  let index = 0;
  const [item, setItem] = useState([]);

  const itemSize = [1, 2, 3, 4];

  const url =
    "https://zoteshopapi20230311210030.azurewebsites.net/GetAllProduct";

  useEffect(() => {
    //fetchProductDetails();
    fetchApi();
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

  const fetchProductDetails = () => {
    axios
      .get(`${url}`)
      .then((res) => {
        for (var i = 0; i < res.data.length; i++) {
          if (index === i) {
            // temp[i] = res.data.results[i];
            let data = res.data[i];
            console.log(data);
            setItem((prevState) => {
              return [...prevState, data];
            });
            index++;
          }
        }
      })
      .catch((error) => console.error(`Error ${error}`));
  };

  return (
    <div>
      {/* <div className="inventory">
        {item.map((res) => {
          let id = res.productsId;
          let name = res.productName;
          let image = res.productImage;
          let quantity = res.quantity;
          return (
            <div key={id}>
              <InventoryItem
                id={id}
                name={name}
                image={image}
                quantity={quantity}
              />
            </div>
          );
        })}
      </div> */}
      <InventoryVersinTwo />
    </div>
  );
};
