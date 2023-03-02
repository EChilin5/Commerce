import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./SignUp.css";
import axios from "axios";

export const SignUpComponent = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    cityState: "",
    card: "",
  });

  const closeWindow = () => {
    window.close();
    window.open("http://localhost:3000/");
  };

  const firstNameChangeHandler = (event) => {
    setUserInfo((prevState) => {
      return { ...prevState, firstName: event.target.value };
    });
  };

  const lastNameChangeHandler = (event) => {
    setUserInfo((prevState) => {
      return { ...prevState, lastName: event.target.value };
    });
  };

  const emailChangeHandler = (event) => {
    setUserInfo((prevState) => {
      return { ...prevState, email: event.target.value };
    });
  };
  const passwordChangeHandler = (event) => {
    setUserInfo((prevState) => {
      return { ...prevState, password: event.target.value };
    });
  };
  const passwordConfirmChangeHandler = (event) => {
    setUserInfo((prevState) => {
      return { ...prevState, confirmPassword: event.target.value };
    });
  };
  const addressChangeHandler = (event) => {
    setUserInfo((prevState) => {
      return { ...prevState, address: event.target.value };
    });
  };

  const cityStateChangeHandler = (event) => {
    setUserInfo((prevState) => {
      return { ...prevState, cityState: event.target.value };
    });
  };
  const cardChangeHandler = (event) => {
    setUserInfo((prevState) => {
      return { ...prevState, card: event.target.value };
    });
  };

  const submitUserSignIn = () => {
    if (userInfo.confirmPassword === userInfo.password) {
      let userData = {
        name: userInfo.firstName + " " + userInfo.lastName,
        email: userInfo.email,
        password: userInfo.password,
        address: userInfo.address,
        cityState: userInfo.cityState,
        cardInfo: userInfo.card,
      };
      console.log(userData);
      const result = axios.post(
        "https://localhost:7019/User/AddUser",
        userData
      );
      console.log(result.data);
      localStorage.setItem("user", userInfo.email);

      closeWindow();
    } else {
      alert("Password do not match");
    }
  };
  return (
    <div>
      <div className="signUp">
        <h1>Sign Up</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Name"
              onChange={(event) => firstNameChangeHandler(event)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter lastName"
              onChange={(event) => lastNameChangeHandler(event)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(event) => emailChangeHandler(event)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(event) => passwordChangeHandler(event)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(event) => passwordConfirmChangeHandler(event)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="text"
              onChange={(event) => addressChangeHandler(event)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label>City, State, ZipCode</Form.Label>
            <Form.Control
              type="text"
              placeholder="text"
              onChange={(event) => cityStateChangeHandler(event)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCard">
            <Form.Label>Card Info</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(event) => cardChangeHandler(event)}
            />
          </Form.Group>

          <Button variant="primary" onClick={() => submitUserSignIn()}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};
