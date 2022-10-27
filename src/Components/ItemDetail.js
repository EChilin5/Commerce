import React, { useState, useEffect } from "react";
import { FiltersComponent } from "./FiltersComponent";
import "./ItemDetail.css";
import { ItemDetailCart } from "./ItemDetailCart";
import { ReviewComponent } from "./ReviewComponent";
import axios from "axios";
import { useParams } from "react-router-dom";

export const ItemDetail = (props) => {
  const [arraySize, setArraySize] = useState(0);
  const [mainImage, setMainImage] = useState();
  const [productDetails, setProductDetails] = useState([
    {
      productsId: "",
      productName: "",
      productImage: "",
      quantity: "",
      size: "",
    },
  ]);
  let { id } = useParams();

  let url = "http://localhost:53014/api/Product/api/Products/";

  useEffect(() => {
    fetchPokemonItem(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const roundPrice = (price) => {
    let value = Math.round(price * 100) / 100;
    let textValue = "" + value;
    if (textValue.indexOf(".") === -1) {
      textValue += ".00";
    }

    return textValue;
  };

  const fetchPokemonItem = (id) => {
    console.log("Test");
    console.log({ id });
    axios.put(`${url}${id}`).then((res) => {
      console.log(res.data);

      let data = {
        productsId: res.data[0].productsId,
        productName: res.data[0].productName,
        productImage: res.data[0].productImage,
        quantity: res.data[0].quantity,
        size: res.data[0].size,
      };
      setProductDetails((prevState) => [
        ...prevState,
        {
          productsId: res.data[0].productsId,
          productName: res.data[0].productName,
          productImage: res.data[0].productImage,
          productPrice: res.data[0].productPrice,
          quantity: res.data[0].quantity,
          size: res.data[0].size,
        },
      ]);
      setMainImage(res.data[0].productImage);
      setArraySize(productDetails.length - 1);
    });
  };

  const updateImage = (image) => {
    setMainImage(image);
  };

  return (
    <div className="main-itemdetail">
      <div className="itemDetail">
        <div className="item-left">
          <div className="item-left-main">
            <img src={mainImage} alt="main" width="400px" height="400px" />
          </div>

          <div className="item-grid">
            <div className="item-column">
              <img
                src={productDetails[productDetails.length - 1].productImage}
                alt="item"
                width="100px"
                height="100px"
                onMouseEnter={() =>
                  updateImage(
                    productDetails[productDetails.length - 1].productImage
                  )
                }
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
                src={productDetails[productDetails.length - 1].productImage}
                alt="item"
                width="100px"
                height="100px"
                onMouseEnter={() =>
                  updateImage(
                    productDetails[productDetails.length - 1].productImage
                  )
                }
              />
            </div>
          </div>
        </div>
        <div className="item-mid">
          <h2>{productDetails[productDetails.length - 1].productName}</h2>
          <h5>
            ${" "}
            {roundPrice(productDetails[productDetails.length - 1].productPrice)}
          </h5>
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
          <ItemDetailCart product={productDetails[productDetails.length - 1]} />
        </div>
      </div>

      <ReviewComponent
        productName={productDetails[productDetails.length - 1].productName}
      />
    </div>
  );
};
