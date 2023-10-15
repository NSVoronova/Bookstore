import React, { FC } from "react";
import basket from "../../assets/icons/busket.svg";
import favorite from "../../assets/icons/favorite.svg";
import { StyledBasketBtn, StyledBookImage, StyledBookWrapper, StyledFavoriteBtn, StyledPriceDiv } from "./styledBookCard";
import { StyledSimpleDiv } from "../../styledConstants";
import { useNavigate } from "react-router-dom";


export interface IBook {
  id: string,
  title?: string,
  imageSrc: string;
  price: number;
  description?: string,
  author?: string,
  isFavorite?: boolean
}

const BookCard: FC<IBook> = ({ imageSrc, price, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/book/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <StyledBookWrapper>
      <StyledBookImage src={imageSrc} alt="img" onClick={handleClick}/>
      <StyledSimpleDiv $between>
        <StyledPriceDiv>{price}$</StyledPriceDiv>
        <StyledFavoriteBtn type="button"></StyledFavoriteBtn>
      </StyledSimpleDiv>
      <StyledBasketBtn/>
    </StyledBookWrapper>
  );
};
export default BookCard;
