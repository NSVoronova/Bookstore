import React, { useState } from 'react'
import { StyledCardFullTitle } from '../../components/BookCardFull/styledCardFull'
import { StyledDashLine } from '../SearchPage/styledSearch'
import { StyledSimpleDiv } from '../../styledConstants'
import { getLocalBooks } from '../../helpers'
import { StyledBookImage } from '../../components/BookCard/styledBookCard'
import { StyledBookFavoriteContainer, StyledFavoriteIconBtn, StyledRemoveFavoriteBtn } from './StyledFavoritePage'
import { useNavigate } from 'react-router-dom'
import { IBook } from '../../interfaces'
import { useDispatch } from 'react-redux'
import NothingFound from '../SearchPage/NothingFound/NothingFound'

const FavoritesPage = () => {
  const [favoriteBooks, setFavoriteBooks] = useState(getLocalBooks("favorite"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClickToBook = (id: string) => {
    navigate(`/book/${id}`);
    window.scrollTo(0, 0);
  };
  const handleRemoveFavoriteBook = (id: string) =>{
    const updatedFavorite = favoriteBooks.filter((book: IBook) => book.id !== id);
    setFavoriteBooks(updatedFavorite);
    localStorage.setItem("favorite", JSON.stringify({books: updatedFavorite}));
    dispatch({type: "REMOVE_FROM_FAVORITE", payload: updatedFavorite})
  }

  return (
    <>
      <StyledCardFullTitle>My Favorite Books</StyledCardFullTitle>
      <StyledDashLine />
      {favoriteBooks.length ? 
      <StyledSimpleDiv $start>
        {Array.isArray(favoriteBooks) && favoriteBooks.map((book) => (
          <StyledBookFavoriteContainer key={book.id}>
            <StyledBookImage  src={book.imageSrc} alt='book' onClick={() => handleClickToBook(book.id)}/>
            <StyledFavoriteIconBtn></StyledFavoriteIconBtn>
          <StyledRemoveFavoriteBtn onClick={() => handleRemoveFavoriteBook(book.id)}></StyledRemoveFavoriteBtn>
          </StyledBookFavoriteContainer>
        ))}
      </StyledSimpleDiv> : <NothingFound str="Favorite some book :)"/>}
    </>
  )
}

export default FavoritesPage
