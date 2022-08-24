import React from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import "./BuyNowModal.css";

export const BuyNowModal = (props) => {
  const post = () => {
    console.log("test");
    let data = {
      ProductName: "test",
      imageUrl: "test",
      price: 149.99,
      purchaserName: "Edgar",
      dateSold: "8/03/22",
    };
    const result = axios.post("http://localhost:53014/api/Transaction", data);
    console.log(result.data);
    props.handleClose();
  };

  return (
    <div className="buynow-modal">
      <Modal
        show={props.display}
        onHide={props.handleClose}
        dialogClassName="modal-adj"
      >
        <Modal.Header closeButton>
          <Modal.Title>Ditto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-wrapper">
            <div className="modal-wrapper-left">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png"
                alt="item"
              />
            </div>
            <div className="modal-wrapper-right">
              <div className="modal-wrapper-item">
                <b>Quantity</b>: 123
              </div>
              <hr />

              <div className="modal-wrapper-item">
                <b>Address:</b> 123 Wilson Road
              </div>
              <hr />

              <div className="modal-wrapper-item">
                <b>Total:</b> $199.00
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => post()}>
            Complete Purchase
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
