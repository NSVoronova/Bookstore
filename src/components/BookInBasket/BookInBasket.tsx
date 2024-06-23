import React from 'react'
import { StyledBookBasketContainer, StyledDescriptionContainer, StyledImgBookBasket, StyledPriceContainer } from './styledBookInBasket'
import { IBook } from '../../interfaces'
import { StyledNullButton, StyledSimpleDiv } from '../../styledConstants'
import delete_img from '../../assets/icons/delete.svg'
import { useNavigate } from 'react-router-dom'

const BookInBasket = ({ id, imageSrc, price, title, author, onDeleteBook, onCloseBasket}: IBook) => {
  const navigate = useNavigate();

 
  const handleClickToBook = (id: string) => {
    if (onCloseBasket) {
      onCloseBasket()
    };
    navigate(`/book/${id}`);
    window.scrollTo(0, 0);
   
  };

   return (
    <StyledBookBasketContainer>
      <StyledImgBookBasket src={imageSrc} alt="book" onClick={() => handleClickToBook(id)}/>
      <StyledDescriptionContainer>
        <p>{title}</p>
        <p>{author}</p>
      </StyledDescriptionContainer>
      <StyledPriceContainer>
        <p>${price}</p>
        <StyledNullButton onClick={onDeleteBook}><img src={delete_img} alt="delete"/></StyledNullButton>
      </StyledPriceContainer>
    </StyledBookBasketContainer>
  )
}

export default BookInBasket
