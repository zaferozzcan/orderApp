import React from "react";
import { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar";

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Open Sans', sans-serif;
    margin:0;
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
      <h1>Hello CodeSandbox</h1>
    </div>
  );
}
