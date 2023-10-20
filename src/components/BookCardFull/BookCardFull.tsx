import React, { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";
import SectionHeader from "../SectionHeader/SectionHeader";
import path_img from "../../assets/icons/path.svg";
import {
  StyledAuthorDiv,
  StyledBookImg,
  StyledBookPageDiv,
  StyledBuyButton,
  StyledCardDescriptionWrapper,
  StyledCardFullTitle,
  StyledPriceBook,
  StyledTextContainer,
} from "./styledCardFull";
import { StyledSimpleDiv } from "../../styledConstants";
import { useParams } from "react-router-dom";
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn";
import BasketBtn from "../BasketBtn/BasketBtn";
import { fetchBook, fetchRandomBooks, getLocalBooks } from "../../helpers";
import { IBook } from "../../interfaces";

export interface IbookAPI {
  id: string;
  authors: [];
  title: string;
  description: string;
  imageLinks: {
    thumbnail: string;
    small: string;
    medium?: string;
  };
}

interface IRandomBook {
  id: string;
  volumeInfo: {
    imageLinks: {
      thumbnail: string;
      small?: string;
      medium?: string;
    };
  };
  saleInfo: {
    listPrice?: {
      amount: number;
    };
  };
}
const BookCardFull = () => {
  const params = useParams();
  const [book, setBook] = useState<IbookAPI | null>(null);
  const [books, setBooks] = useState([]);
  console.log(book);
  useEffect(() => {
    fetchBook(params.id || "", setBook);
  }, [params.id]);
  useEffect(() => {
    fetchRandomBooks(setBooks);
  }, [params.id]);

  const basketBooks = getLocalBooks("basket");
  const favoriteBooks = getLocalBooks("favorite");
  const isAdd = basketBooks.find((book: IBook) => book.id === params.id)
  const isFavorit = favoriteBooks.find((book: IBook) => book.id === params.id)
  return (
    <>
      <StyledBookPageDiv>
        <StyledBookImg
          src={
            (book &&
              (book.imageLinks.medium ||
                book.imageLinks.small ||
                book?.imageLinks.thumbnail)) ||
            ""
          }
          alt="book_img"
        />
        <StyledCardDescriptionWrapper>
          <StyledSimpleDiv $between>
            <StyledCardFullTitle>{book && book.title}</StyledCardFullTitle>
            <FavoriteBtn id={params.id || ""}
          imageSrc={book?.imageLinks.thumbnail || ""}
         isFavorite={isFavorit}/>
          </StyledSimpleDiv>
          <StyledAuthorDiv>
            Author(s):{" "}
            {Array.isArray(book?.authors) && book && book.authors.join(", ")}
          </StyledAuthorDiv>
          <StyledAuthorDiv $description>
            <StyledTextContainer>{book?.description || ""}</StyledTextContainer>
          </StyledAuthorDiv>
          <StyledSimpleDiv $between>
            <StyledPriceBook>$30.00</StyledPriceBook>
            <div>Count</div>
          </StyledSimpleDiv>
          <StyledSimpleDiv $between>
            <BasketBtn
              isAdded={isAdd}
              big
              id={params.id || ""}
              imageSrc={book?.imageLinks.thumbnail || ""}
              price={30}
              title={(book && book.title) || ""}
              author={(Array.isArray(book?.authors) && book && book.authors.join(", ")) || ""}
            />
            <StyledBuyButton $buy>Buy Now</StyledBuyButton>
          </StyledSimpleDiv>
        </StyledCardDescriptionWrapper>
      </StyledBookPageDiv>
      <SectionHeader headerName="View More" imageSrc={path_img} />
      <StyledSimpleDiv $between>
        {Array.isArray(books) &&
          books.map((book: IRandomBook) => (
            <BookCard
              isAdded={basketBooks.find((item: IBook) => item.id === book.id)}
              key={book.id}
              id={book.id}
              imageSrc={
                book.volumeInfo.imageLinks?.medium ||
                book.volumeInfo.imageLinks?.small ||
                book.volumeInfo.imageLinks?.thumbnail
              }
              price={book.saleInfo?.listPrice?.amount || 30}
            />
          ))}
      </StyledSimpleDiv>
    </>
  );
};

export default BookCardFull;
