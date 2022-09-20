import React from "react";
import Button from "react-bootstrap/Button";
import "./ReviewCard.css";

export const ReviewCard = (props) => {
  return (
    <div>
      <div className="review-card">
        <div className="review-card-top-row">
          <div className="review-card-top-name">
            {props.productReview.email}
          </div>
          <div className="review-card-top-uppvote">
            <Button>UpVote</Button>
            <Button>DownVote</Button>
          </div>
        </div>
        <div className="review-card-rating">
          Rating: {props.productReview.rating} / 5
        </div>
        <div className="review-card-text">{props.productReview.review}</div>
      </div>
      <hr />
    </div>
  );
};
