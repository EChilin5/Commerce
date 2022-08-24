import React from "react";
import { CardComponent } from "../Components/CardComponent";
import "./ItemForSale.css";

export const ItemForSale = (props) => {
  let minPrice = props.productFilterValue[0];
  let maxPrice = props.productFilterValue[1];
  let itemIndex = props.filterUpdated;
  const itemSize = props.productSize;

  const displayDetails = (show, item) => {
    props.display(show, item);
  };

  const textFilter = () => {
    let searchText = props.searchResult;
    let updatedFilter;
    if (typeof searchText !== "undefined") {
      updatedFilter = props.itemInfo.filter((input) =>
        input.name.includes(searchText)
      );
    } else {
      updatedFilter = props.itemInfo;
    }

    if (minPrice !== 0 || maxPrice !== 500) {
      updatedFilter = updatedFilter.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }
    // set this to selectIndex
    if (itemIndex) {
      updatedFilter = updatedFilter.filter(
        (product) => itemSize.indexOf(product.size) > -1
      );
    }

    console.log(updatedFilter);
    return updatedFilter.map((item) => {
      var image = item.data.sprites.other.home.front_default;
      var name = item.name;
      return (
        <div className="column">
          <CardComponent
            name={name}
            image={image}
            showDetailInfo={displayDetails}
            itemSelected={item}
          />
        </div>
      );
    });
  };

  return (
    <div className="itemForSale">
      {" "}
      <div className="grid">{textFilter()}</div>
    </div>
  );
};
