import React, { useState } from 'react'
import { StyledFavoriteBtn } from './styledFavoriteBtn'
import { useDispatch } from 'react-redux';
import { getLocalBooks } from '../../helpers';

const FavoriteBtn = ({
  id,
  imageSrc,
  isFavorite
}: {
  id: string;
  imageSrc: string;
  isFavorite: boolean
} ) => {
  const [favorite, setFavorite] = useState(isFavorite);
  const dispatch = useDispatch();
  const handleClickToFavorite = ({id, imageSrc}: {id: string, imageSrc: string}) => {
    if(!favorite) {
      const booksFavorite = getLocalBooks("favorite");
      const newBook = {id, imageSrc};
      booksFavorite.push(newBook);
      localStorage.setItem("favorite", JSON.stringify({books: booksFavorite}));
      setFavorite(true);
      dispatch({type: 'ADD_TO_FAVORITE', payload: booksFavorite})
    }
  }

  return (
    <>
      <StyledFavoriteBtn type="button" $isFavorite={favorite} onClick={() => handleClickToFavorite({id, imageSrc})} disabled={favorite}></StyledFavoriteBtn>
    </>
  )
}

export default FavoriteBtn
