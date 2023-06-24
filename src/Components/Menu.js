import React from "react";

//Components
import { Cards } from "./Cards";

//Images
import greekSalad from "../Assets/Images/greek salad.jpg";
import Bruchetta from "../Assets/Images/bruchetta.svg";
import LemonDessert from "../Assets/Images/lemon dessert.jpg";

const Menu = () => {
  const menus = [
    {
      image: greekSalad,
      name: "Greek Salad",
      desc: "The famous greek salad of crispy lettuce ,peppers, olives and our Chicago style feta cheese , garnished with crunchy garlic and rosemary croutons",
      price: "$12.99",
    },
    {
      image: Bruchetta,
      name: "Bruschetta",
      desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil ",
      price: "$5.99",
    },
    {
      image: LemonDessert,
      name: "Lemon Dessert",
      desc: "This comes straight from grandma’s  recipe book, every last ingredient has been sourced and is as authentic as can be imagined ",
      price: "$5.00",
    },
  ];
  return (
    <>
      <Cards menus={menus} />
    </>
  );
};

export default Menu;
