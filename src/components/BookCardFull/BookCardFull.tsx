import React, { FC, useEffect, useState } from 'react'
import BookCard, { IBook } from '../BookCard/BookCard'
import basket from '../../assets/icons/busket.svg'
import SectionHeader from '../SectionHeader/SectionHeader'
import path_img from "../../assets/icons/path.svg";
import { StyledBasketBtn, StyledFavoriteBtn} from '../BookCard/styledBookCard'
import { StyledAuthorDiv, StyledBookImg, StyledBookPageDiv, StyledBuyButton, StyledCardDescriptionWrapper, StyledCardFullTitle, StyledPriceBook, StyledTextContainer } from './styledCardFull'
import { templateArray } from '../../pages/MainPage/MainPage';
import { StyledSimpleDiv } from '../../styledConstants';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import instance from '../../axiosConfig/axiosConfig';
import { log } from 'console';

interface IbookAPI  {
  id: string,
  authors: [],
  title: string,
  description: string,
  imageLinks: {
    thumbnail: string
    small: string
  }
}

interface IRandomBook {
  id: string, 
  volumeInfo: {
    imageLinks: {
      thumbnail: string,
      small?: string
    }
  }
  saleInfo: {
    listPrice?: {
      amount: number
    }
  }
}
const BookCardFull: FC<IBook> = ({id, title, imageSrc,price,author,description,isFavorite}) => {
  const params = useParams();
  const [book, setBook] = useState<IbookAPI | null>(null);
  const [books, setBooks] = useState([])
  console.log(book)
  useEffect(() => {
    const fetchBook = async () => {
      try {
        if (params.id) {
          const url = `volumes/${params.id}`;
          const response = await instance.get(url);
          const bookData = response.data;
          console.log(bookData);
          setBook(bookData.volumeInfo);
        }
      } catch(err) {
        console.log(err)
      }
    }
    fetchBook();
  }, [params.id])
  useEffect(() => {
    const fetchRandomBooks = async () => {
      try {
        const url = "volumes"
        const params = {
          q: 'subject:fiction',
          maxResults: 5,
          startIndex: Math.floor(Math.random() * 100),
        }
        const response = await instance.get(url, {params});
        const randomBooks = response.data.items;
        console.log(randomBooks);
        setBooks(randomBooks);
        
      } catch (err) {
        console.log(err)
      }
    }
    fetchRandomBooks();
  }, [params.id])
  return (
    <>
    <StyledBookPageDiv>
      <StyledBookImg src={(book && (book.imageLinks.small || book?.imageLinks.thumbnail)) || ""} alt="book_img" />
      <StyledCardDescriptionWrapper>
      <StyledSimpleDiv $between>
        <StyledCardFullTitle>{book && book.title}</StyledCardFullTitle>
        <StyledFavoriteBtn type="button"></StyledFavoriteBtn>
      </StyledSimpleDiv>
      <StyledAuthorDiv>Author(s):{" "}
      {Array.isArray(book?.authors) && 
      book && book.authors.join(", ")}</StyledAuthorDiv>
      <StyledAuthorDiv $description><StyledTextContainer>{book?.description || ""}</StyledTextContainer></StyledAuthorDiv>
      <StyledSimpleDiv $between>
        <StyledPriceBook>${price}.00</StyledPriceBook>
        <div>Count</div>
      </StyledSimpleDiv>
      <StyledSimpleDiv $between>
        <StyledBuyButton><img src={basket} alt="" /></StyledBuyButton>
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
              imageSrc={book.volumeInfo.imageLinks?.small || book.volumeInfo.imageLinks?.thumbnail}
              price={book.saleInfo?.listPrice?.amount || 30}
            />
          ))}
      </StyledSimpleDiv>
    </>
  )
}

export default BookCardFull
