import Styled from "styled-components";
import React from "react";

const StyledPoster = Styled.div`

 height:200px;
 background-image: url(img/banner_copy.jpg);
 background-size:cover;
 background-position: center;
 filter: contrast(75%);
`;

function Poster() {
  return (
    <>
      <StyledPoster> </StyledPoster>
    </>
  );
}

export default Poster;
