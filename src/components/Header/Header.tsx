import React, { useEffect, useState } from 'react';
import LogoImg from '../../assets/icons/logo.svg';
import BasketImg from '../../assets/icons/busket.svg'
import FavoriteImg from '../../assets/icons/favorite.svg'
import { StyledDot, StyledHeader, StyledIcon, StyledIconBtn, StyledIconsDiv } from './styledHeader';
import { useNavigate } from 'react-router-dom';
import Basket from '../Basket/Basket';
import { getLocalBooks } from '../../helpers';
import { useSelector } from 'react-redux';


const Header = () => {
  const basketCount = useSelector(({countBasket}) => countBasket)
  const favoriteCount = useSelector(({countFavorites}) => countFavorites)

  if (!localStorage.getItem("favorite")){
    const favorite = {
      books: []
    }
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }

  if (!localStorage.getItem("basket")){
    const basket = {
      books: []
    }
    localStorage.setItem("basket", JSON.stringify(basket));
  }
  const [isBasketOpen, setIsBasketOpen] = useState(false); // надо false
 
  const closeBasket = () => {
    setIsBasketOpen(false);
  }
  const openBasket = () => {
    setIsBasketOpen(true);
  }

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/`);
  };
  const handleNavigate = () => {
    navigate('/favorites')
  };

  
  return (
    <StyledHeader>
      <img src={LogoImg} alt="logo" onClick={handleClick} style={{cursor: "pointer"}}/>
      <StyledIconsDiv>
        <StyledIconBtn onClick={handleNavigate}>{favoriteCount > 0 && ( 
            <StyledDot >{favoriteCount}</StyledDot>
          )}</StyledIconBtn>
        <StyledIconBtn $basket onClick={openBasket}>{basketCount > 0 && ( 
            <StyledDot $basket>{basketCount}</StyledDot>
          )}</StyledIconBtn>
        
      </StyledIconsDiv>
      <Basket isOpen={isBasketOpen} closeBasket={closeBasket} />
    </StyledHeader>
  );
}

export default Header;

