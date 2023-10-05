import React, { FC } from "react";
import basket from "../../assets/icons/busket.svg";
import favorite from "../../assets/icons/favorite.svg";
import { StyledBasketBtn, StyledBookWrapper, StyledFavoriteBtn, StyledPriceDiv, StyledSimpleDiv } from "./styledBookCard";


export interface IBook {
  imageSrc: string;
  price: number;
}
const BookCard: FC<IBook> = ({ imageSrc, price }) => {
  return (
    <StyledBookWrapper>
      <img src={imageSrc} alt="img" />
      <StyledSimpleDiv>
        <StyledPriceDiv>{price}.00$</StyledPriceDiv>
        <StyledFavoriteBtn type="button"></StyledFavoriteBtn>
      </StyledSimpleDiv>
      <StyledBasketBtn></StyledBasketBtn>
    </StyledBookWrapper>
  );
};
export default BookCard;
