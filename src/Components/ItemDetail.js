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
  const [item, setItem] = useState([]);
  const itemSize = [1, 2, 3, 4];

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
  console.log(id);

  // let url = "http://localhost:53014/api/Product/api/Products/";

  let baseURL = "https://zoteshopapi20230311210030.azurewebsites.net/";
  let url = "https://localhost:7019/GetSingleProduct/";

  useEffect(() => {
    //fetchPokemonItem(id);
    console.log(typeof id);

    fetchApi();
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
    axios.put(`${baseURL}GetSingleProduct/${id}`).then((res) => {
      console.log("Test2323 ");
      console.log(res);

      let data = {
        productsId: res.data.productsId,
        productName: res.data.productName,
        productImage: res.data.productImage,
        quantity: res.data.quantity,
        size: res.data.size,
      };
      setProductDetails((prevState) => [
        ...prevState,
        {
          productsId: res.data.productsId,
          productName: res.data.productName,
          productImage: res.data.productImage,
          productPrice: res.data.productPrice,
          quantity: res.data.quantity,
          size: res.data.size,
        },
      ]);
      setMainImage(res.data.productImage);
      setArraySize(productDetails.length - 1);
    });
  };

  let productCount = 0;
  const fetchApi = () => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      let tempId = Number(id);
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

        //uploadData(productItem);
        //console.log(productItem);
        console.log(productItem);

        if (productCount === tempId) {
          console.log("test 12345");
          setProductDetails((prevState) => [
            ...prevState,
            {
              productsId: productItem.productsId,
              productName: productItem.productName,
              productImage: productItem.productImage,
              productPrice: productItem.productPrice,
              quantity: productItem.quantity,
              size: productItem.size,
            },
          ]);
          updateImage(productItem.productImage);
        }

        // if (0 === tempId) {
        //   console.log(test);
        //   setProductDetails((prevState) => [
        //     ...prevState,
        //     {
        //       productsId: productItem.productsId,
        //       productName: productItem.productName,
        //       productImage: productItem.productImage,
        //       productPrice: productItem.productPrice,
        //       quantity: productItem.quantity,
        //       size: productItem.size,
        //     },
        //   ]);
        // }
        productCount++;
        setItem((prevState) => {
          return [...prevState, productItem];
        });
      }
    });
    // console.log(item.length + " rewnrjenw");

    // console.log(productDetails);
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
