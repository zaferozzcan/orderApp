import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Open Sans', sans-serif;
  }
  h1, h2, h3{
    font-family: 'Righteous', cursive;
  }
`;

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>Hello CodeSandbox</h1>
    </div>
  );
}
