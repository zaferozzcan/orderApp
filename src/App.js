import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar";
import Poster from "./components/Poster";
import Menu from "./components/Menu";
import FoodDialog from "./components/FoodDialog";

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Open Sans', sans-serif;
    margin:0;
    height:1000px;
  }
  h1, h2, h3{
    font-family: 'Righteous', cursive;
  }

`;

export default function App() {
  const [openFood, setOpenFood] = useState();

  return (
    <div className="App">
      <GlobalStyle />
      <FoodDialog />
      <Navbar />
      <Poster />
      <div>{openFood}</div>
      <Menu setOpenFood={setOpenFood} />
      <h1>Hello CodeSandbox</h1>
    </div>
  );
}
