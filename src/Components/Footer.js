import React from "react";
import restaurant from "../Assets/Images/restaurant.jpg";

export const Footer = () => {
  return (
    <footer>
      <img src={restaurant} alt="Restaurant" />
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
      <section>
        <h2>Contact</h2>
        <nav>
          <ul>
            <li>Address</li>
            <li>Email Address</li>
            <li>Phone Number</li>
          </ul>
        </nav>
      </section>
      <section>
        <h2>Social Media Links</h2>
        <nav>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </nav>
      </section>
    </footer>
  );
};
