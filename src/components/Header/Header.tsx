import React, { useState } from 'react';
import LogoImg from '../../assets/icons/logo.svg';
import BasketImg from '../../assets/icons/busket.svg'
import FavoriteImg from '../../assets/icons/favorite.svg'
import { StyledHeader, StyledIcon, StyledIconsDiv } from './styledHeader';
import { useNavigate } from 'react-router-dom';
import Basket from '../Basket/Basket';


const Header = () => {
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
  const openBasket = () => {
    setIsBasketOpen(true);
  }
  
  const closeBasket = () => {
    setIsBasketOpen(false);
  }

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/`);
  };
  return (
    <StyledHeader>
      <img src={LogoImg} alt="logo" onClick={handleClick} style={{cursor: "pointer"}}/>
      <StyledIconsDiv>
        <StyledIcon src={FavoriteImg} alt="favorite" />
        <StyledIcon src={BasketImg} alt="basket" onClick={openBasket} />
      </StyledIconsDiv>
      <Basket isOpen={isBasketOpen} closeBasket={closeBasket} />
    </StyledHeader>
  );
}

export default Header;

