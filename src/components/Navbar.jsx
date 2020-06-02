import React from "react";
import PizzaRed from "./Styles";
import Styled from "styled-components";

const StyledNavbar = Styled.div`
  background-color: #f44336;
`;

function Navbar() {
  return <StyledNavbar>PZ Pizza</StyledNavbar>;
}

export default Navbar;
