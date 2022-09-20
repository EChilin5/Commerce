import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { ReviewCard } from "./Modal/ReviewCard";
import { ReviewModalPost } from "./Modal/ReviewModalPost";
import "./ReviewComponent.css";

export const ReviewComponent = (props) => {
  let count = 0;
  const [reviews, setReviews] = useState([]);

  let name = props.productName;
  useEffect(() => {
    const getProductRevew = () => {
      setReviews([]);
      console.log(name);
      axios
        .put("http://localhost:53014/api/Reviews", { productName: name })
        .then((res) => {
          console.log(res.data);

          for (var i = 0; i < res.data.length; i++) {
            let productInfo = res.data[i];
            setReviews((prev) => {
              return [...prev, productInfo];
            });
          }
        });
    };

    getProductRevew();
  }, [name]);

  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <div>
      <div>
        <ReviewModalPost
          display={show}
          handleClose={closeModal}
          productName={name}
        />
      </div>

      <div className="review-section">
        <div className="review-section-top">
          <div className="review-section-top-left">
            {" "}
            <h2>Reviews</h2>
          </div>
          <div className="review-section-top-right">
            <Button onClick={() => openModal()}>Leave a Review</Button>
          </div>
        </div>
        <hr />
        {reviews.length}
        {reviews.map((it) => {
          return (
            <div key={count++}>
              <ReviewCard productReview={it} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
