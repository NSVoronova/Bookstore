import React from 'react'
import "./basket.css"
import arrow_left from '../../assets/icons/arrow_left.svg'
import { StyledBasketContainer, StyledOverlay } from './styledBasket';
import { StyledNullButton } from '../../styledConstants';

const Basket = ({ isOpen, closeBasket }: { isOpen: boolean, closeBasket: () => void }) => {
  const overlayClass = isOpen ? 'show' : '';

  const basketStr = localStorage.getItem("basket");
  const booksObj = basketStr ? JSON.parse(basketStr) : { books: [] };
  const books = booksObj.books;


  return (
    <>
    <StyledOverlay $open={isOpen} onClick={closeBasket} className={overlayClass}/>
    <StyledBasketContainer $open={isOpen}>
      <div>
        <StyledNullButton onClick={closeBasket}><img src={arrow_left} alt="left" /></StyledNullButton>
        <p>Your Basket <span>(count)</span></p>
        {/* Вставьте содержимое корзины здесь */}
      </div>
    </StyledBasketContainer>
    </>
  );
}

export default Basket
