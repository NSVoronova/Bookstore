import React, { useEffect, useState } from 'react'
import BookCard from '../BookCard/BookCard'
import SectionHeader from '../SectionHeader/SectionHeader'
import path_img from "../../assets/icons/path.svg";
import { StyledAuthorDiv, StyledBookImg, StyledBookPageDiv, StyledBuyButton, StyledCardDescriptionWrapper, StyledCardFullTitle, StyledPriceBook, StyledTextContainer } from './styledCardFull'
import { StyledSimpleDiv } from '../../styledConstants';
import { useParams } from 'react-router-dom';
import FavoriteBtn from '../FavoriteBtn/FavoriteBtn';
import BasketBtn from '../BasketBtn/BasketBtn';
import { fetchBook, fetchRandomBooks } from '../../helpers';

export interface IbookAPI  {
  id: string,
  authors: [],
  title: string,
  description: string,
  imageLinks: {
    thumbnail: string,
    small: string,
    medium?: string
  }
}

interface IRandomBook {
  id: string, 
  volumeInfo: {
    imageLinks: {
      thumbnail: string,
      small?: string,
      medium?: string
    }
  }
  saleInfo: {
    listPrice?: {
      amount: number
    }
  }
}
const BookCardFull = () => {
  const params = useParams();
  const [book, setBook] = useState<IbookAPI | null>(null);
  const [books, setBooks] = useState([])
  console.log(book)
  useEffect(() => {
    fetchBook(params.id || "", setBook);
  }, [params.id])
  useEffect(() => {
    fetchRandomBooks(setBooks);
  }, [params.id])
  return (
    <>
    <StyledBookPageDiv>
      <StyledBookImg src={(book && (book.imageLinks.medium || book.imageLinks.small || book?.imageLinks.thumbnail)) || ""} alt="book_img" />
      <StyledCardDescriptionWrapper>
      <StyledSimpleDiv $between>
        <StyledCardFullTitle>{book && book.title}</StyledCardFullTitle>
        <FavoriteBtn/>
      </StyledSimpleDiv>
      <StyledAuthorDiv>Author(s):{" "}
      {Array.isArray(book?.authors) && 
      book && book.authors.join(", ")}</StyledAuthorDiv>
      <StyledAuthorDiv $description><StyledTextContainer>{book?.description || ""}</StyledTextContainer></StyledAuthorDiv>
      <StyledSimpleDiv $between>
        <StyledPriceBook>$30.00</StyledPriceBook>
        <div>Count</div>
      </StyledSimpleDiv>
      <StyledSimpleDiv $between>
        <BasketBtn big/>
        <StyledBuyButton $buy>Buy Now</StyledBuyButton>
      </StyledSimpleDiv>
      </StyledCardDescriptionWrapper>
    </StyledBookPageDiv>
    <SectionHeader headerName="View More" imageSrc={path_img} />
    <StyledSimpleDiv $between>
        {Array.isArray(books) &&
          books.map((book: IRandomBook) => (
            <BookCard
              key={book.id}
              id={book.id}
              imageSrc={book.volumeInfo.imageLinks?.medium || book.volumeInfo.imageLinks?.small || book.volumeInfo.imageLinks?.thumbnail}
              price={book.saleInfo?.listPrice?.amount || 30}
            />
          ))}
      </StyledSimpleDiv>
    </>
  )
}

export default BookCardFull
