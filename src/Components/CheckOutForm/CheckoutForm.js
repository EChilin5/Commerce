import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const CheckoutForm = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text " placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Shipping Speed</Form.Label>
          <Form.Control type="text" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Confirm Shipping
        </Button>
      </Form>
    </div>
  );
};
