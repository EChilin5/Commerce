import React, { useEffect, useState } from "react";
import "./Catalog.css";
import axios from "axios";

import { MainCatalog } from "../Components/MainCatalog";

export const Catalog = () => {
  let index = 0;
  const [item, setItem] = useState([]);

  const itemSize = [1, 2, 3, 4];

  const url = "https://pokeapi.co/api/v2/";

  useEffect(() => {
    if (item.length === 0) {
      getAllItems();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllItems = () => {
    var temp = [];

    axios
      .get(`${url}pokemon?limit=151&offset=0`)
      .then((res) => {
        for (var i = 0; i < res.data.results.length; i++) {
          if (index === i) {
            temp[i] = res.data.results[i];

            updateItem(res.data.results[i].url, i, res.data.results[i].name);
            index++;
          }
        }
      })
      .catch((error) => console.error(`Error ${error}`));
  };

  const updateItem = (url, itemId, itemName) => {
    axios.get(url).then((res) => {
      console.log("success");
      let sizeIndex = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
      if (sizeIndex > itemSize.length) {
        sizeIndex = 0;
      }
      let tempSize = itemSize[sizeIndex];

      let tempPrice = Math.floor(Math.random() * (500 - 5 + 1)) + 5;
      const temp = {
        id: itemId,
        name: itemName,
        size: tempSize,
        price: tempPrice,
        data: res.data,
      };

      setItem((prevState) => {
        return [...prevState, temp];
      });
    });
  };

  return (
    <div className="catalog">
      <MainCatalog info={item} />
    </div>
  );
};
