import React from "react";
import headerStyle from "../Style/Header.css";
import logo from "../Assets/Images/Logo .svg";

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={headerStyle}>
      <img
        src={logo}
        alt="Little Lemon Restaurant Logo"
        className="header-img"
      />
      <nav>
        <ul id="nav-bar-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-me">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/Reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/Order Online">Order Online</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
