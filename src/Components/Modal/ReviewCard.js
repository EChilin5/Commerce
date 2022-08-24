import React from "react";
import Button from "react-bootstrap/Button";
import "./ReviewCard.css";

export const ReviewCard = () => {
  return (
    <div>
      <div className="review-card">
        <div className="review-card-top-row">
          <div className="review-card-top-name">Batman627</div>
          <div className="review-card-top-uppvote">
            <Button>UpVote</Button>
            <Button>DownVote</Button>
          </div>
        </div>
        <div className="review-card-rating">4 out of 5</div>
        <div className="review-card-text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy.
        </div>
      </div>
      <hr />
    </div>
  );
};
