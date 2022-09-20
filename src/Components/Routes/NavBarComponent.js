import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Admin } from "../../Pages/Admin";
import { Catalog } from "../../Pages/Catalog";
import { Checkout } from "../../Pages/Checkout";
import { Contact } from "../../Pages/Contact";
import { HomePage } from "../../Pages/HomePage";
import { Orders } from "../../Pages/Orders";
import { ItemDetail } from "../ItemDetail";
import { ProtectedRoute } from "./ProtectedRoute";

export const NavBarComponent = () => {
  const [user, setUser] = useState("Log In");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = loggedInUser;
      console.log(foundUser);
      setUser(loggedInUser);
    } else {
      setUser("Log In");
    }
  }, [localStorage.getItem("user")]);

  const logoutUser = () => {
    localStorage.removeItem("user");
    setUser("Log In");
  };

  return (
    <div>
      <Router>
        <div>
          <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
              <Navbar.Brand href="#home">Chilin</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to={"/"}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/catalog">
                    Catalog
                  </Nav.Link>
                  <Nav.Link as={Link} to="/cart">
                    Cart
                  </Nav.Link>
                  <Nav.Link as={Link} to="/orders">
                    Orders
                  </Nav.Link>
                  <Nav.Link as={Link} to="/admin">
                    {user}
                  </Nav.Link>
                </Nav>
                {user === "Log In" ? (
                  ""
                ) : (
                  <div>
                    <Button onClick={() => logoutUser()}>Log Out</Button>
                  </div>
                )}
              </Navbar.Collapse>
            </Container>
          </Navbar>{" "}
        </div>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/cart" element={<Contact />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/catalog/item/:id" element={<ItemDetail />} />
            <Route
              element={
                <ProtectedRoute auth={user !== "Log In" ? false : true} />
              }
            >
              {" "}
              <Route path="/admin" element={<Admin />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
};
