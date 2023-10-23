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
import { useLocation, useParams } from "react-router-dom";
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn";
import BasketBtn from "../BasketBtn/BasketBtn";
import {fetchRandomBooks, getLocalBooks } from "../../helpers";
import { IBook } from "../../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_BOOK } from "../../actions/actions";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import Loader from "../Loader/Loader";

export interface IbookAPI {
  id: string;
  volumeInfo: {
    imageLinks: {
      thumbnail: string;
      small?: string;
      medium?: string;
    };
    title: string;
    authors: [];
    description: string;
  };
  saleInfo: {
    listPrice?: {
      amount: number;
    };
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
    title: string;
    authors: []
  };
  saleInfo: {
    listPrice?: {
      amount: number;
    };
  };
}
const BookCardFull = () => {
  const isLoading = useSelector(({isLoading}) => isLoading);
  const basketBooks = getLocalBooks("basket");
  const favoriteBooks = getLocalBooks("favorite");
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const basketB = useSelector(({basketBooks}) => basketBooks)
  const params = useParams();
  const [book, setBook] = useState<IbookAPI | null>(null);
  const [books, setBooks] = useState([]);
  const [addBasket, setAddBasket] = useState(basketB.find((book: IBook) => book.id === params.id))
  const [isFavorite, setIsFavorite] = useState(favoriteBooks.find((book: IBook) => book.id === params.id))
  console.log(book);
  useEffect(() => {
    dispatch(FETCH_BOOK(params.id || "", setBook));
    fetchRandomBooks(setBooks);
    setAddBasket(basketBooks.find((book: IBook) => book.id === params.id));
  }, [params.id]);
  // useEffect(() => {
  //   setIsAdd(basketBooks.find((book: IBook) => book.id === params.id))
  // }, [book]);

  // const isAdd = 
  // const isFavorit = favoriteBooks.find((book: IBook) => book.id === params.id)
  return (
    <>
    {isLoading ? <Loader/> :
      <><StyledBookPageDiv>
        <StyledBookImg
          src={
            (book &&
              (book.volumeInfo.imageLinks.medium ||
                book.volumeInfo.imageLinks.small ||
                book.volumeInfo.imageLinks.thumbnail)) ||
            ""
          }
          alt="book_img"
        />
        <StyledCardDescriptionWrapper>
          <StyledSimpleDiv $between>
            <StyledCardFullTitle>{book && book.volumeInfo.title}</StyledCardFullTitle>
            <FavoriteBtn id={params.id || ""}
          imageSrc={book?.volumeInfo.imageLinks.thumbnail || ""}
         isFavorite={favoriteBooks.find((book: IBook) => book.id === params.id)}/>
          </StyledSimpleDiv>
          <StyledAuthorDiv>
            Author(s):{" "}
            {Array.isArray(book?.volumeInfo.authors) && book && book.volumeInfo.authors.join(", ")}
          </StyledAuthorDiv>
          <StyledAuthorDiv $description>
            <StyledTextContainer>{book?.volumeInfo.description || ""}</StyledTextContainer>
          </StyledAuthorDiv>
          <StyledSimpleDiv $between>
            <StyledPriceBook>${book?.saleInfo.listPrice?.amount || "30"}</StyledPriceBook>
            <div>Count</div>
          </StyledSimpleDiv>
          <StyledSimpleDiv $between>
            <BasketBtn
              isAdded={addBasket}
              big
              id={params.id || ""}
              imageSrc={book?.volumeInfo.imageLinks.thumbnail || ""}
              price={30}
              title={(book && book.volumeInfo.title) || ""}
              author={(Array.isArray(book?.volumeInfo.authors) && book && book.volumeInfo.authors.join(", ")) || ""}
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
              isFavorite={favoriteBooks.find((item: IBook) => item.id === book.id)}
              isAdded={basketBooks.find((item: IBook) => item.id === book.id)}
              key={book.id}
              id={book.id}
              imageSrc={
                book.volumeInfo.imageLinks?.medium ||
                book.volumeInfo.imageLinks?.small ||
                book.volumeInfo.imageLinks?.thumbnail
              }
              price={book.saleInfo?.listPrice?.amount || 30}
              author={(Array.isArray(book?.volumeInfo.authors) && book && book.volumeInfo.authors.join(", ")) || ""}
              title={(book && book.volumeInfo.title) || ""}
            />
          ))}
      </StyledSimpleDiv></>}
    </>
  );
};

export default BookCardFull;
