import React, { useState } from "react";
import LogoImg from "../../assets/icons/logo.svg";
import {
  StyledDot,
  StyledHeader,
  StyledIconBtn,
  StyledIconsDiv,
} from "./styledHeader";
import { useNavigate } from "react-router-dom";
import Basket from "../Basket/Basket";
import { useSelector } from "react-redux";

const Header = () => {
  const basketCount = useSelector(({ countBasket }) => countBasket);
  const favoriteCount = useSelector(({ countFavorites }) => countFavorites);

  if (!localStorage.getItem("favorite")) {
    const favorite = {
      books: [],
    };
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }

  if (!localStorage.getItem("basket")) {
    const basket = {
      books: [],
    };
    localStorage.setItem("basket", JSON.stringify(basket));
  }
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const closeBasket = () => {
    setIsBasketOpen(false);
  };
  const openBasket = () => {
    setIsBasketOpen(true);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/`);
  };
  const handleNavigate = () => {
    navigate("/favorites");
  };

  return (
    <StyledHeader>
      <img
        src={LogoImg}
        alt="logo"
        onClick={handleClick}
      />
      <StyledIconsDiv>
        <StyledIconBtn onClick={handleNavigate}>
          {favoriteCount > 0 && <StyledDot>{favoriteCount}</StyledDot>}
        </StyledIconBtn>
        <StyledIconBtn $basket onClick={openBasket}>
          {basketCount > 0 && <StyledDot $basket>{basketCount}</StyledDot>}
        </StyledIconBtn>
      </StyledIconsDiv>
      <Basket isOpen={isBasketOpen} closeBasket={closeBasket} />
    </StyledHeader>
  );
};

export default Header;
