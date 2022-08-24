import React, { useState } from "react";
import "./FilterComponent.css";
import { SearchComponent } from "./SearchComponent";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";

export const FiltersComponent = (props) => {
  const [boldFont, setBoldFont] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });

  const [price, setPrice] = useState({
    min: 0,
    max: 500,
  });

  const bold1ChangeHandler = (position) => {
    setBoldFont((prevState) => {
      return { ...prevState, first: !boldFont.first };
    });
  };

  const bold2ChangeHandler = (position) => {
    setBoldFont((prevState) => {
      return { ...prevState, second: !boldFont.second };
    });
  };

  const bold3ChangeHandler = (position) => {
    setBoldFont((prevState) => {
      return { ...prevState, third: !boldFont.third };
    });
  };

  const bold4ChangeHandler = (position) => {
    setBoldFont((prevState) => {
      return { ...prevState, fourth: !boldFont.fourth };
    });
  };

  const onMinPriceChangeHandler = (value) => {
    setPrice((prevState) => {
      return {
        ...prevState,
        min: value,
      };
    });
  };

  const onMaxPriceChangeHandler = (value) => {
    console.log(value);
    setPrice((prevState) => {
      return {
        ...prevState,
        max: value,
      };
    });
  };

  const updatePriceValue = () => {
    console.log("Pressed" + " " + price.min + " " + price.max);
    props.producetPriceFilterValue(price.min, price.max);
  };

  const updateSizeFilter = () => {
    console.log("testing");
    let temp = [
      boldFont.first,
      boldFont.second,
      boldFont.third,
      boldFont.fourth,
    ];
    var count = 1;
    // 1,2,3,4
    let updatedList = [];
    let i = 0;
    temp.map((it) => {
      if (it === true) {
        updatedList[i++] = count++;
      } else {
        updatedList[i++] = 0;
        count++;
      }
    });

    if (updatedList.length === 0) {
      updatedList = [1, 2, 3, 4];
    }

    props.productFilterSize(updatedList);
  };

  return (
    <div className="filters">
      <div className="filter-start">
        <b>Price</b>
        <div className="selection"></div>
        <form>
          <div className="selection-item">
            <label for="minPrice">Min Price</label>
            <input
              type="number"
              id="minPrice"
              placeholder="0"
              onChange={(event) => onMinPriceChangeHandler(event.target.value)}
            ></input>
          </div>

          <div className="selection-item">
            <label for="maxPrice">Max Price</label>
            <input
              type="number"
              id="maxPrice"
              placeholder="500"
              onChange={(event) => onMaxPriceChangeHandler(event.target.value)}
            ></input>
          </div>
        </form>
        <Button onClick={() => updatePriceValue()}>Search Price</Button>
        <hr />
      </div>
      <div className="filter-content">
        Size
        <div className="selection">
          <div
            style={{ fontWeight: boldFont.first ? "bold" : "normal" }}
            onClick={() => bold1ChangeHandler("first")}
          >
            Small
          </div>
          <div
            style={{ fontWeight: boldFont.second ? "bold" : "normal" }}
            onClick={() => bold2ChangeHandler("second")}
          >
            Medium
          </div>
          <div
            style={{ fontWeight: boldFont.third ? "bold" : "normal" }}
            onClick={() => bold3ChangeHandler("third")}
          >
            Large
          </div>
          <div
            style={{ fontWeight: boldFont.fourth ? "bold" : "normal" }}
            onClick={() => bold4ChangeHandler("fourth")}
          >
            Extra-Large
          </div>
        </div>
        <Button onClick={() => updateSizeFilter()}>Set Size</Button>
        <hr></hr>
      </div>
      <div className="filter-content">
        Ratings
        <div className="selection">
          <SearchComponent />
        </div>
        <hr></hr>
      </div>
      <div className="filter-content">
        Type <hr></hr>
      </div>
    </div>
  );
};
