import React from "react";
import Styled from "styled-components";

const Dialog = Styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 11;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
`;
const DialogBanner = Styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => (img ? `background-image: url(${img});` : `min-height: 75px;`)}
  background-position: center;
  background-size: cover;
`;
const DialogShadow = Styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 11;
`;

function FoodDialog({ openFood }) {
  return (
    <>
      <Dialog>
        {" "}
        <DialogBanner img={openFood.img} />
      </Dialog>
      <DialogShadow> </DialogShadow>
    </>
  );
}

export default FoodDialog;
