import React, { useEffect, useState } from 'react'
import "./basket.css"
import arrow_left from '../../assets/icons/arrow_left.svg'
import { StyledBasketContainer, StyledBasketContent, StyledBasketHeader, StyledBasketPrice, StyledBasketPriceContainer, StyledBooksContainer, StyledOverlay } from './styledBasket';
import { StyledNullButton, StyledSimpleDiv } from '../../styledConstants';
import BookInBasket from '../BookInBasket/BookInBasket';
import { getLocalBooks } from '../../helpers';
import { IBook } from '../../interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { StyledBuyButton } from '../BookCardFull/styledCardFull';

const Basket = ({ isOpen, closeBasket }: { isOpen: boolean, closeBasket: () => void }) => {
  const overlayClass = isOpen ? 'show' : '';
  const dispatch = useDispatch();
  const mainBooks = useSelector(({mainBooks}) => mainBooks)

   const [basketBooks, setBasketBooks] = useState(getLocalBooks("basket"));
  useEffect (() => {
    if (isOpen) {
      const basketData = getLocalBooks("basket");
      setBasketBooks(basketData);
      document.querySelector('.wrapper')?.classList.add('modal-open');
    } else {
      document.querySelector('.wrapper')?.classList.remove('modal-open');
    }
  }, [isOpen])
const handleDeleteBook = (id: string) => {
  const updatedBasket = basketBooks.filter((book: IBook) => book.id !== id);
  setBasketBooks(updatedBasket);
  localStorage.setItem("basket", JSON.stringify({ books: updatedBasket }));
  dispatch({type: "REMOVE_FROM_BASKET", payload: updatedBasket});
}
  return (
    <>
    <StyledOverlay $open={isOpen} onClick={closeBasket} className={overlayClass}/>
    <StyledBasketContainer $open={isOpen}>
      <StyledBasketContent>
        <StyledBasketHeader>
          <StyledNullButton onClick={closeBasket}><img src={arrow_left} alt="left" /></StyledNullButton>
          <p>Your Basket <span>({basketBooks.length} items)</span></p>
        </StyledBasketHeader>
        <StyledBooksContainer>
          {Array.isArray(basketBooks) && basketBooks.map((book) => (
          <BookInBasket key={book.id} id={book.id} imageSrc={book.imageSrc} price={book.price} author={book.author} title={book.title} onDeleteBook={() => handleDeleteBook(book.id)}/>
          ))}
          </StyledBooksContainer>
          <StyledBasketPriceContainer>
            <StyledSimpleDiv $between>
            <p>Subtotal:</p>
            <StyledBasketPrice>
            {Array.isArray(basketBooks) && basketBooks.reduce((acc,book) => {
              return acc + book.price
}, 0)}
            $</StyledBasketPrice>
            </StyledSimpleDiv>
            <button>Pay</button>
          </StyledBasketPriceContainer>
      </StyledBasketContent>
    </StyledBasketContainer>
    </>
  );
}

export default Basket
