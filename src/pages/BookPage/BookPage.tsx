import React from "react";
import BookCardFull from "../../components/BookCardFull/BookCardFull";
import { templateArray } from "../MainPage/MainPage";

const firstBook = templateArray[0];
const BookPage = () => {
  return (
    <>
      <BookCardFull
        title={firstBook.title}
        imageSrc={firstBook.image}
        price={firstBook.price}
        author={firstBook.author}
        description={firstBook.description}
        isFavorite={false}
      />
    </>
  );
};

export default BookPage;
