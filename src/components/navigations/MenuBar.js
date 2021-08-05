import React from "react";
import CartButton from "../Cart/CartButton";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";

import "./MenuBar.css";

const MenuBar = () => {
  return (
    <nav className="header">
      <div className="nav-wrapper">
        <a className="logo" href="/">
          ELECTRO
        </a>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="https://thumbs.dreamstime.com/b/digital-electronics-logo-design-circuit-tech-elements-electronics-icon-tech-logo-tools-calendar-page-icon-bonus-calendar-186456033.jpg"
                width="110"
                height="40"
              />{" "}
            </Navbar.Brand>
          </Container>
        </Navbar>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>

        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/ContactUs">Contact Us</Link>
          </li>
          <li>
            <Link to="/Shop">Shop</Link>
          </li>
          <li>
            <Link to="/Cart"><CartButton/></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuBar;
