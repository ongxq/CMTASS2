import React, { Component } from "react";
import "./Header.css";
import logo from "../assets/logo-removebg-preview 1.png";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header-icon" />
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="menu" smooth={true} duration={500}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="team" smooth={true} duration={500}>
            Team
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
