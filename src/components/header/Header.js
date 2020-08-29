import React from "react";
// import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.scss";

const Header = () => (
  <div className="header">
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#home">
        <Logo className="logo" />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">HOME</Nav.Link>
        <Nav.Link href="#features">SIGNUP</Nav.Link>
        <Nav.Link href="#pricing">LOGIN</Nav.Link>
      </Nav>
    </Navbar>
  </div>
  // <div className="header">
  //   <Link className="logo-container" to="/">
  //     <Logo className="logo" />
  //   </Link>
  //   <div className="options">
  //     <Link to="/contact">Contact</Link>
  //     <Link to="/about">About</Link>
  //   </div>
  // </div>
);

export default Header;
