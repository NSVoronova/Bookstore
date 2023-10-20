import React, { useEffect, useState } from 'react'
import "./basket.css"
import arrow_left from '../../assets/icons/arrow_left.svg'
import { StyledBasketContainer, StyledBooksContainer, StyledOverlay } from './styledBasket';
import { StyledNullButton } from '../../styledConstants';
import BookInBasket from '../BookInBasket/BookInBasket';
import { getLocalBooks } from '../../helpers';
import { IBook } from '../../interfaces';
import { useDispatch, useSelector } from 'react-redux';

const Basket = ({ isOpen, closeBasket }: { isOpen: boolean, closeBasket: () => void }) => {
  const overlayClass = isOpen ? 'show' : '';
  const dispatch = useDispatch();
  const mainBooks = useSelector(({mainBooks}) => mainBooks)

   const [basketBooks, setBasketBooks] = useState(getLocalBooks("basket"));
  useEffect (() => {
    if (isOpen) {
      const basketData = getLocalBooks("basket");
      setBasketBooks(basketData)
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
      <div>
        <StyledNullButton onClick={closeBasket}><img src={arrow_left} alt="left" /></StyledNullButton>
        <p>Your Basket <span>(count)</span></p>
        <StyledBooksContainer>
          {Array.isArray(basketBooks) && basketBooks.map((book) => (
          <BookInBasket key={book.id} id={book.id} imageSrc={book.imageSrc} price={book.price} author={book.author} title={book.title} onDeleteBook={() => handleDeleteBook(book.id)}/>
          ))}
          </StyledBooksContainer>
      </div>
    </StyledBasketContainer>
    </>
  );
}

export default Basket
