import React from "react";
import MainStyle from "../Style/Main.css";
import restaurantFood from "../Assets/Images/restauranfood.jpg";

export const Main = () => {
  return (
    <main className={MainStyle}>
      <section className="main-information-section">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned
          <br /> Mediterranean restaurant, <br /> focused on traditional
          <br />
          recipes served with a modern
          <br /> twist
        </p>
        <button>Reserve A Table </button>
      </section>
      <section>
        <img src={restaurantFood} alt="" />
      </section>
    </main>
  );
};
