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

  let productCount = 0;
  const itemSize = [1, 2, 3, 4];
  const displayDetails = (show, item) => {
    // setshowDetails(show);
    window.scrollTo({ top: 0, left: 0 });

    handleItemDetail(item);

    // setItemDetail(item);
  };

  let baseURL = "https://zoteshopapi20230311210030.azurewebsites.net/";

  const handleItemDetail = (itemId) => {
    console.log("click");
    let urlItem = "http://localhost:3000/catalog/item/" + itemId;
    window.open(urlItem);
    window.close();
    //props.display(true, props.item);
  };
  const url = `${baseURL}GetAllProduct`;

  useEffect(() => {
    fetchApi();
    // if (item.length === 0) {
    //   getAllItems();
    // }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllItems = () => {
    axios
      .get(`${url}`, { withCredentials: false })
      .then((res) => {
        for (var i = 0; i < 20; i++) {
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

  const searchText = (text) => {
    setSearch(text);
    console.log(text);
  };

  // const updateItem = (url, itemId, itemName) => {
  //   axios.get(url).then((res) => {
  //     // console.log("success");
  //     let sizeIndex = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
  //     if (sizeIndex > itemSize.length) {
  //       sizeIndex = 0;
  //     }
  //     let tempSize = itemSize[sizeIndex];

  //     let tempPrice = Math.floor(Math.random() * (500 - 5 + 1)) + 5;
  //     const temp = {
  //       productName: itemName,
  //       size: tempSize,
  //       productPrice: tempPrice,
  //       productImage: res.data.sprites.other.home.front_default,
  //       quantity: 10,
  //     };
  //     //console.log(temp);
  //     setItem((prevState) => {
  //       return [...prevState, temp];
  //     });
  //   });
  // };

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

  const uploadData = async (product) => {
    console.log("test");
    console.log(product);
    await axios
      .post("https://localhost:7019/AddProduct", {
        // productsId: 0,
        productName: product.productName,
        productImage: product.productImage,
        productPrice: product.productPrice,
        size: product.size,
        quantity: 10,
      })
      .then((res) => {
        console.log(res.config.data);
      });
  };

  const updatedSelectedSize = (userSizeFilter) => {
    console.log("hello");
    setSelectedSize(userSizeFilter);
    setFilterChanged(true);
  };
  const updatedPrices = (min, max) => {
    //console.log("upadted price");
    let newPrice = [min, max];
    setPriceUpdated(newPrice);
    //console.log(newPrice);
  };

  return (
    <div className="home-page">
      {showDetails === true ? (
        <div>
          <ItemDetail main={itemDetail.productImage} productInfo={itemDetail} />
        </div>
      ) : (
        <div className="temp">
          <HomeGallery itemInfo={item.slice(0, 10)} />
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
                itemInfo={item.slice(0, 15)}
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
