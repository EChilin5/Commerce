import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { ReviewCard } from "./Modal/ReviewCard";
import { ReviewModalPost } from "./Modal/ReviewModalPost";
import "./ReviewComponent.css";

export const ReviewComponent = (props) => {
  let temp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [reviews, setReviews] = useState([]);

  let name = props.productName;
  useEffect(() => {
    getProductRevew();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProductRevew = () => {
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
        {reviews.map((it) => {
          return (
            <div key={it}>
              <ReviewCard />
            </div>
          );
        })}
      </div>
    </div>
  );
};
