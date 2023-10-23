import React from 'react'
import { StyledBookBasketContainer, StyledDescriptionContainer, StyledImgBookBasket, StyledPriceContainer } from './styledBookInBasket'
import { IBook } from '../../interfaces'
import { StyledNullButton, StyledSimpleDiv } from '../../styledConstants'
import delete_img from '../../assets/icons/delete.svg'

const BookInBasket = ({ id, imageSrc, price, title, author, onDeleteBook}: IBook) => {
   return (
    <StyledBookBasketContainer>
      <StyledImgBookBasket src={imageSrc} alt="book" />
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
