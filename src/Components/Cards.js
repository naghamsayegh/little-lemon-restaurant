import React from "react";

export const Cards = (image, name, desc, price) => {
  return (
    <main>
      <img src={image} alt={name} />
      <section>
        <h2>{name}</h2>
        <h3>{price}</h3>
      </section>
      <section>{desc}</section>
      <section>
        <h4>Order a delivery </h4>
        <img src="" alt="" />
      </section>
    </main>
  );
};
