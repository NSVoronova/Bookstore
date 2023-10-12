import React, { FC } from "react";
import basket from "../../assets/icons/busket.svg";
import favorite from "../../assets/icons/favorite.svg";
import { StyledBasketBtn, StyledBookImage, StyledBookWrapper, StyledFavoriteBtn, StyledPriceDiv } from "./styledBookCard";
import { StyledSimpleDiv } from "../../styledConstants";


export interface IBook {
  title?: string,
  imageSrc: string;
  price: number;
  description?: string,
  author?: string,
  isFavorite?: boolean
}
const BookCard: FC<IBook> = ({ imageSrc, price }) => {
  return (
    <StyledBookWrapper>
      <StyledBookImage src={imageSrc} alt="img" />
      <StyledSimpleDiv $between>
        <StyledPriceDiv>{price}$</StyledPriceDiv>
        <StyledFavoriteBtn type="button"></StyledFavoriteBtn>
      </StyledSimpleDiv>
      <StyledBasketBtn/>
    </StyledBookWrapper>
  );
};
export default BookCard;
