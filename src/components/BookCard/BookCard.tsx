import React, { FC } from "react";
import { StyledBookImage, StyledBookWrapper, StyledPriceDiv } from "./styledBookCard";
import { StyledSimpleDiv } from "../../styledConstants";
import { useNavigate } from "react-router-dom";
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn";
import BasketBtn from "../BasketBtn/BasketBtn";


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

  const handleClickToBook = () => {
    navigate(`/book/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <StyledBookWrapper>
      <StyledBookImage src={imageSrc} alt="img" onClick={handleClickToBook}/>
      <StyledSimpleDiv $between>
        <StyledPriceDiv>{price}$</StyledPriceDiv>
        <FavoriteBtn/>
      </StyledSimpleDiv>
      <BasketBtn big={false}/>
    </StyledBookWrapper>
  );
};
export default BookCard;
