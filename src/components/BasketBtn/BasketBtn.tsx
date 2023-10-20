import React, { useState } from "react";
import { StyledBasketBtn } from "./styledBasketBtn";
import { useDispatch } from "react-redux";
import { ADD_TO_BASKET } from "../../actions/actions";
import { getLocalBooks } from "../../helpers";
import { IBook } from "../../interfaces";

const BasketBtn = ({
  big,
  id,
  imageSrc,
  price,
  title,
  author,
  isAdded
}: {
  big: boolean;
  id: string;
  imageSrc: string;
  price: number;
  title: string;
  author: string;
  isAdded: boolean
}) => {
  const [added, setAdded] = useState(isAdded);
  const dispatch = useDispatch();

  const handleClickToBasket = ({id, imageSrc, price, title, author, isAdded}: IBook) => {
    if (!added) {
      const booksBasket: IBook[] = getLocalBooks("basket");
      const newBook = { id, imageSrc, price, title, author };
      booksBasket.push(newBook);
      localStorage.setItem("basket", JSON.stringify({books: booksBasket}));
      setAdded(true);
      dispatch({type: 'ADD_TO_BASKET', payload: booksBasket})
    }
  };

  return (
    <>
      <StyledBasketBtn type="button" $full={big} $isAdded={added} onClick={() => handleClickToBasket({id, imageSrc, price, title, author})} disabled={added}/>
    </>
  );
};

export default BasketBtn;
