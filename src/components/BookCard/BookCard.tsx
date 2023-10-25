import React, { FC } from "react";
import {
  StyledBookImage,
  StyledBookWrapper,
  StyledPriceDiv,
} from "./styledBookCard";
import { StyledSimpleDiv } from "../../styledConstants";
import { useNavigate } from "react-router-dom";
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn";
import BasketBtn from "../BasketBtn/BasketBtn";
import { IBook } from "../../interfaces";

const BookCard: FC<IBook> = ({ imageSrc, price, id, title, author, isAdded, isFavorite }) => {
  const navigate = useNavigate();

 
  const handleClickToBook = (id: string) => {
    navigate(`/book/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <StyledBookWrapper>
      <StyledBookImage src={imageSrc} alt="img" onClick={() => handleClickToBook(id)} />
      <StyledSimpleDiv $between>
        <StyledPriceDiv>{price}$</StyledPriceDiv>
        <FavoriteBtn id={id}
        imageSrc={imageSrc}
         isFavorite={isFavorite || false}/>
      </StyledSimpleDiv>
      <BasketBtn
        isAdded={isAdded || false}
        big={false}
        id={id}
        imageSrc={imageSrc}
        price={price}
        title={title || ""}
        author={author || ""}
      />
    </StyledBookWrapper>
  );
};
export default BookCard;
