import React from "react";
import logo from "../Assets/Images/Logo .svg";

export const Header = () => {
  return (
    <header>
      <img src={logo} alt="Little Lemon Restaurant Logo" />
      <nav>
        <ul>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="About">About</a>
          </li>
          <li>
            <a href="Menu">Menu</a>
          </li>
          <li>
            <a href="Reservations">Reservations</a>
          </li>
          <li>
            <a href="Order Online">Order Online</a>
          </li>
          <li>
            <a href="Order Online">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
