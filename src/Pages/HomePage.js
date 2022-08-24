import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";

import { FiltersComponent } from "../Components/FiltersComponent";
import { HomeGallery } from "../Components/HomeGallery";
import { ItemForSale } from "../Components/ItemForSale";
import { SearchComponent } from "../Components/SearchComponent";
import { ItemDetail } from "../Components/ItemDetail";

export const HomePage = () => {
  let index = 0;
  const [item, setItem] = useState([]);
  const [showDetails, setshowDetails] = useState(false);
  const [itemDetail, setItemDetail] = useState();
  const [search, setSearch] = useState();
  const [isPriceUpdated, setPriceUpdated] = useState([0, 500]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [isFilterChanged, setFilterChanged] = useState(false);

  const itemSize = [1, 2, 3, 4];
  const displayDetails = (show, item) => {
    setshowDetails(show);
    window.scrollTo({ top: 0, left: 0 });

    setItemDetail(item);
  };

  const url = "https://pokeapi.co/api/v2/";

  useEffect(() => {
    if (item.length === 0) {
      getAllItems();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllItems = () => {
    // var temp = [];

    axios
      .get(`${url}pokemon`)
      .then((res) => {
        for (var i = 0; i < res.data.results.length; i++) {
          if (index === i) {
            // temp[i] = res.data.results[i];

            updateItem(res.data.results[i].url, i, res.data.results[i].name);
            index++;
          }
        }
      })
      .catch((error) => console.error(`Error ${error}`));
  };

  const searchText = (text) => {
    setSearch(text);
    console.log(text);
  };

  const updateItem = (url, itemId, itemName) => {
    axios.get(url).then((res) => {
      // console.log("success");
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

  const updatedSelectedSize = (userSizeFilter) => {
    console.log("hello");
    setSelectedSize(userSizeFilter);
    setFilterChanged(true);
  };
  const updatedPrices = (min, max) => {
    console.log("upadted price");
    let newPrice = [min, max];
    setPriceUpdated(newPrice);
    console.log(newPrice);
  };

  return (
    <div className="home-page">
      {showDetails === true ? (
        <div>
          <ItemDetail
            main={itemDetail.data.sprites.other.home.front_default}
            productInfo={itemDetail}
          />
        </div>
      ) : (
        <div className="temp">
          <HomeGallery itemInfo={item} />
          <div className="tempHome">
            <div className="app-left">
              <FiltersComponent
                productFilterSize={updatedSelectedSize}
                producetPriceFilterValue={updatedPrices}
              />
            </div>
            <div className="app-right">
              <SearchComponent searchTextResult={searchText} />
              <ItemForSale
                itemInfo={item}
                display={displayDetails}
                searchResult={search}
                productSize={selectedSize}
                productFilterValue={isPriceUpdated}
                filterUpdated={isFilterChanged}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
