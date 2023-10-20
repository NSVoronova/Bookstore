import React from 'react'
import { StyledBookBasketContainer, StyledImgBookBasket } from './styledBookInBasket'
import { IBook } from '../../interfaces'
import { StyledNullButton } from '../../styledConstants'
import delete_img from '../../assets/icons/delete.svg'

const BookInBasket = ({ id, imageSrc, price, title, author, onDeleteBook}: IBook) => {
   return (
    <StyledBookBasketContainer>
      <StyledImgBookBasket src={imageSrc} alt="book" />
      <div>
        <p>{title}</p>
        <p>{author}</p>
      </div>
      <div>
        <p>{price}</p>
        <StyledNullButton onClick={onDeleteBook}><img src={delete_img} alt="delete"/></StyledNullButton>
      </div>
    </StyledBookBasketContainer>
  )
}

export default BookInBasket
