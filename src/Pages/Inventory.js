import Reac, { useState, useEffect } from "react";
import axios from "axios";
import { InventoryItem } from "../Components/InventoryComponents/InventoryItem";
import "./Inventory.css";

export const Inventory = () => {
  let index = 0;
  const [item, setItem] = useState([]);

  const itemSize = [1, 2, 3, 4];

  const url = "http://localhost:53014/api/Product";

  useEffect(() => {
    fetchProductDetails();
  }, []);

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
      <div className="inventory">
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
      </div>
    </div>
  );
};
