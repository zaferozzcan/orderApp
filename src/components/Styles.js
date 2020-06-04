import Styled from "styled-components";
const PizzaRed = "#f44336";

const StyledNavbar = Styled.div`
  background-color: ${PizzaRed};
  padding:20px
`;

const Title = Styled.div`
  font-family: 'Righteous', cursive;
`;

const Logo = Styled(Title)`
  font-size:20px;
  color:white;
  text-shadow: 1px 1px 1px black;
`;

export { PizzaRed, Title, Logo, StyledNavbar };
