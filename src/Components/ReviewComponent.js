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
  let baseURL =
    "https://zoteshopapi20230311210030.azurewebsites.net/Review/GetAllReviews/";
  useEffect(() => {
    const getProductRevew = () => {
      setReviews([]);
      console.log(name);
      axios.get(`${baseURL}${name}`).then((res) => {
        console.log(res.data);

        for (var i = 0; i < res.data.length; i++) {
          let productInfo = res.data[i];
          setReviews((prev) => {
            return [...prev, productInfo];
          });
        }
      });
    };

    //getProductRevew();
  }, []);

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
        {reviews.length === 0 ? (
          <div className="reviews-empty"> No reviews have been made</div>
        ) : (
          <div>
            {reviews.map((it) => {
              return (
                <div key={count++}>
                  <ReviewCard productReview={it} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
