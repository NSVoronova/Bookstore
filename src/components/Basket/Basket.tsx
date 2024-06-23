import React, { useEffect, useState } from "react";
import "./basket.css";
import arrow_left from "../../assets/icons/arrow_left.svg";
import {
  StyledBasketContainer,
  StyledBasketContent,
  StyledBasketHeader,
  StyledBasketPrice,
  StyledBasketPriceContainer,
  StyledBooksContainer,
  StyledOverlay,
} from "./styledBasket";
import { StyledNullButton, StyledSimpleDiv } from "../../styledConstants";
import BookInBasket from "../BookInBasket/BookInBasket";
import { getLocalBooks } from "../../helpers";
import { IBook } from "../../interfaces";
import { useDispatch } from "react-redux";
import { FETCH_MAIN_BOOKS } from "../../actions/actions";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { useNavigate } from "react-router-dom";

const Basket = ({
  isOpen,
  closeBasket,
}: {
  isOpen: boolean;
  closeBasket: () => void;
}) => {
  const overlayClass = isOpen ? "show" : "";
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const [basketBooks, setBasketBooks] = useState(getLocalBooks("basket"));
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      const basketData = getLocalBooks("basket");
      setBasketBooks(basketData);
      document.querySelector(".wrapper")?.classList.add("modal-open");
    } else {
      document.querySelector(".wrapper")?.classList.remove("modal-open");
    }
  }, [isOpen]);

  const handleDeleteBook = (id: string) => {
    const updatedBasket = basketBooks.filter((book: IBook) => book.id !== id);
    setBasketBooks(updatedBasket);
    localStorage.setItem("basket", JSON.stringify({ books: updatedBasket }));
    dispatch({ type: "REMOVE_FROM_BASKET", payload: updatedBasket });
    dispatch(FETCH_MAIN_BOOKS("romance", 1)); //категории закинуть в редакс и текущую стянуть сюда
    dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
  };

  const handlePay = () => {
    if (basketBooks.length) {
      setBasketBooks([]);
      localStorage.setItem("basket", JSON.stringify({ books: [] }));
      dispatch({ type: "REMOVE_FROM_BASKET", payload: [] });
      navigate(`/success`);
      window.scrollTo(0, 0);
    }
  }

  return (
    <>
      <StyledOverlay
        $open={isOpen}
        onClick={closeBasket}
        className={overlayClass}
      />
      <StyledBasketContainer $open={isOpen}>
        <StyledBasketContent>
          <StyledBasketHeader>
            <StyledNullButton onClick={closeBasket}>
              <img src={arrow_left} alt="left" />
            </StyledNullButton>
            <p>
              Your Basket <span>({basketBooks.length} items)</span>
            </p>
          </StyledBasketHeader>
          <StyledBooksContainer>
            {Array.isArray(basketBooks) &&
              basketBooks.map((book) => (
                <BookInBasket
                  key={book.id}
                  onCloseBasket={closeBasket}
                  id={book.id}
                  imageSrc={book.imageSrc}
                  price={book.price}
                  author={book.author}
                  title={book.title}
                  onDeleteBook={() => handleDeleteBook(book.id)}
                />
              ))}
          </StyledBooksContainer>
          <StyledBasketPriceContainer>
            <StyledSimpleDiv $between>
              <p>Subtotal:</p>
              <StyledBasketPrice>
                {Array.isArray(basketBooks) &&
                  basketBooks.reduce((acc, book) => {
                    return acc + book.price;
                  }, 0)}
                $
              </StyledBasketPrice>
            </StyledSimpleDiv>
            <button onClick={handlePay}>Pay</button>
          </StyledBasketPriceContainer>
        </StyledBasketContent>
      </StyledBasketContainer>
    </>
  );
};

export default Basket;
