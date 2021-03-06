import React from "react";
import Styled from "styled-components";

const foodItems = [
  {
    name: "Pizza",
    img: "/img/pizza.png"
  },

  {
    name: "Hamburger",
    img: "/img/hamburger.jpg"
  },

  {
    name: "Salads",
    img: "/img/salad.jpg"
  },
  {
    name: "Pastas",
    img: "/img/pasta.jpg"
  },
  {
    name: "Subs",
    img: "/img/subs.jpeg"
  },
  {
    name: "Seafood",
    img: "/img/seafood.jpg"
  },

  {
    img: "/img/fries.jpg",
    name: "Fries"
  },
  {
    img: "/img/drinks.jpg",
    name: "Sodas"
  }
];

const StyledMenu = Styled.div`
  height: 1000px;
  width:100%;

`;

const FoodGrid = Styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding-bottom: 40px;
`;

export const Food = Styled.div`
 height: 100px;
 padding: 10px;
 font-size: 20px;
 background-image: ${({ img }) => `url(${img});`}
 background-position: center;
 background-size: cover;
 filter: contrast(75%);
 border-radius: 7px;
 margin-top: 5px;
 transition-property: box-shadow margin-top filter;
 transition-duration: .1s;
 box-shadow: 0px 0px 2px 0px grey;
 &:hover {
  cursor: pointer;
  filter: contrast(100%);
  margin-top: 0px;
  margin-bottom: 5px;
  box-shadow: 0px 5px 10px 0px grey;
 }
`;

function Menu() {
  return (
    <StyledMenu>
      <h1>Menu</h1>
      <FoodGrid>
        {foodItems.map(food => (
          <Food img={food.img}> {food.name} </Food>
        ))}
      </FoodGrid>
    </StyledMenu>
  );
}

export default Menu;
