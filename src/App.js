import React from "react";
import { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar";
import Poster from "./components/Poster";
import Menu from "./components/Menu"

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
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Poster />
      <Menu />
      <h1>Hello CodeSandbox</h1>
    </div>
  );
}
