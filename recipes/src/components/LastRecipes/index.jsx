import React from "react";
import Card from "./Card";
import { Section } from "./style";

const LastRecipes = () => {
  return (
    <>
      <Section>
        <h2>Last Recipes</h2>
        <span className="details"></span>
        <section>
          <Card
            image={"./images/bolo.png"}
            alt={"bolo"}
            text={"Red Velvet Cake"}
          />
          <Card
            image={"./images/pizza.png"}
            alt={"pizza"}
            text={"Margherita Pizza"}
          />
          <Card
            image={"./images/vitamina.png"}
            alt={"vitamina"}
            text={"Peanut Smoothie"}
          />
        </section>
      </Section>
    </>
  );
};

export default LastRecipes;
