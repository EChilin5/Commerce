import React, { useState } from "react";
import { CardCatalog } from "./CardCatalog";
import { FiltersComponent } from "./FiltersComponent";
import { SearchComponent } from "./SearchComponent";
import "./MainCatalog.css";
import { ItemDetail } from "./ItemDetail";
import Button from "react-bootstrap/esm/Button";

export const MainCatalog = (props) => {
  const [showItem, setshowItem] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [search, setSearch] = useState("");

  const [isCountUpdated, setisCountUpdated] = useState(false);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [max, setMax] = useState(props.info);

  const [isPriceUpdated, setPriceUpdated] = useState([0, 500]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [isFilterChanged, setFilterChanged] = useState(false);

  let minPrice = isPriceUpdated[0];
  let maxPrice = isPriceUpdated[1];
  const itemSize = selectedSize;

  const searchText = (text) => {
    setSearch(text);
    console.log(text);
  };

  const updateDisplay = (state, item) => {
    setSelectedItem(item);
    window.scrollTo({ top: 0, left: 0 });

    setshowItem(state);
  };

  const onUpdateCount = () => {
    console.log("lcik uhuohuhuh");
    if (end < props.info.length) {
      setStart(end);
      setEnd(end + 10);
      //   displayItem();
    }
  };

  const onDecrementCount = () => {
    if (start > 0) {
      setStart(start - 10);
      setEnd(start);
      displayItem();
    }
  };

  const displayItem = () => {
    let searchText = search;
    console.log(searchText);
    console.log(start + "   " + end);

    let filter;
    if (typeof searchText !== "undefined") {
      console.log("unde");

      if (searchText.length === 0) {
        filter = props.info;

        if (props.info.length !== max) {
          setMax(props.info.length);
        }
      } else {
        filter = props.info.filter((input) => input.name.includes(searchText));

        if (start !== 0) {
          setStart(0);
          setEnd(10);
        }
        if (filter.length < max) {
          setMax(filter.length);
        }
      }
    } else {
      filter = props.info;

      if (props.info.length !== max) {
        setMax(props.info.length);
      }
    }

    // filter by price

    if (minPrice !== 0 || maxPrice !== 500) {
      filter = filter.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }
    // set this to selectIndex
    if (isFilterChanged) {
      filter = filter.filter((product) => itemSize.indexOf(product.size) > -1);
    }

    return filter.slice(start, end).map((it) => {
      var index = props.info.indexOf(it);
      var image = it.data.sprites.other.home.front_default;
      var name = it.name;

      return (
        <div key={index}>
          <CardCatalog
            name={name}
            image={image}
            display={updateDisplay}
            item={it}
          />
        </div>
      );
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
    <div>
      {showItem === false ? (
        <div>
          <div className="catalogfeatures">
            <div className="catalogfeatures-left">
              <FiltersComponent
                productFilterSize={updatedSelectedSize}
                producetPriceFilterValue={updatedPrices}
              />
            </div>
            <div className="catalogfeatures-right">
              <div className="catalogfeatures-search">
                <SearchComponent searchTextResult={searchText} />
              </div>

              {displayItem()}
            </div>
          </div>
          <Button onClick={() => onDecrementCount()}>Previus</Button>
          <Button onClick={() => onUpdateCount()}>Next</Button>
        </div>
      ) : (
        <ItemDetail
          main={selectedItem.data.sprites.other.home.front_default}
          productInfo={selectedItem}
        />
      )}
    </div>
  );
};
