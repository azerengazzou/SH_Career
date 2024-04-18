import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

export const NavList = () => {
  return (
    <>
      <Navbar bg="transparent" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <h3 style={{ fontFamily: "YourFontStyle", color: "black" }}>
              Carrer Builder v1
            </h3>
          </Navbar.Brand>
          <Nav className="mx-auto">
            {" "}
            {/* Centered Links */}
            <Nav.Link style={{ color: "black" }} href="/">
              Home
            </Nav.Link>
            <Nav.Link style={{ color: "black" }} href="#contact">
              Contact
            </Nav.Link>
          </Nav>

          {/* Button for CV Builder on the right */}
          <Button variant="light" href="/cvbuilder" style={{ color: "black" }}>
            CV BUILDER
          </Button>
        </Container>
      </Navbar>
    </>
  );
};
