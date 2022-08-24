import React, { useState } from "react";
import { FiltersComponent } from "./FiltersComponent";
import "./ItemDetail.css";
import { ItemDetailCart } from "./ItemDetailCart";
import { ReviewComponent } from "./ReviewComponent";

export const ItemDetail = (props) => {
  const [mainImage, setMainImage] = useState(props.main);

  const updateImage = (image) => {
    setMainImage(image);
  };

  return (
    <div>
      <div className="itemDetail">
        <div className="item-left">
          <div className="item-left-main">
            <img src={mainImage} alt="main" width="400px" height="400px" />
          </div>

          <div className="item-grid">
            <div className="item-column">
              <img
                src={props.main}
                alt="item"
                width="100px"
                height="100px"
                onMouseEnter={() => updateImage(props.main)}
              />
            </div>
            <div className="item-column">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png"
                alt="item"
                width="100px"
                height="100px"
                onMouseEnter={() =>
                  updateImage(
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png"
                  )
                }
              />
            </div>
            <div className="item-column">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
                alt="item"
                width="100px"
                height="100px"
                onMouseEnter={() =>
                  updateImage(
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
                  )
                }
              />
            </div>
            <div className="item-column">
              <img
                src={props.main}
                alt="item"
                width="100px"
                height="100px"
                onMouseEnter={() => updateImage(props.main)}
              />
            </div>
          </div>
        </div>
        <div className="item-mid">
          <h2>{props.productInfo.name}</h2>
          <h5>$ {props.productInfo.price}.00</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="item-right">
          <ItemDetailCart product={props.productInfo} />
        </div>
      </div>{" "}
      <ReviewComponent productName={props.productInfo.name} />
    </div>
  );
};
