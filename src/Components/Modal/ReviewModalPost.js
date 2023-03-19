import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

export const ReviewModalPost = (props) => {
  let baseURL = `https://zoteshopapi20230311210030.azurewebsites.net/Review/AddReview`;
  const postReview = () => {
    const loggedInUser = localStorage.getItem("user");
    let name = props.productName;
    var reviewInfo = {
      productName: name,
      rating: 5,
      review: "test 122 432 rtoko ",
      email: loggedInUser,
    };

    axios.post(`${baseURL}`, reviewInfo).then((res) => {
      console.log(res.data);
      props.handleClose();
    });
  };

  return (
    <div>
      <div>
        <Modal show={props.display} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Leave A Review</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="rating out of 5" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicReview">
                <Form.Label>Your Review</Form.Label>
                <Form.Control as="textarea" rows="4" placeholder="review" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => postReview()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};
