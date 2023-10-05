import React from 'react';
import LogoImg from '../../assets/icons/logo.svg';
import BasketImg from '../../assets/icons/busket.svg'
import FavoriteImg from '../../assets/icons/favorite.svg'
import { StyledHeader, StyledIcon, StyledIconsDiv } from './styledHeader';


const Header = () => {
  return (
    <StyledHeader>
      <img src={LogoImg} alt="logo" />
      <StyledIconsDiv>
        <StyledIcon src={FavoriteImg} alt="favorite" />
        <StyledIcon src={BasketImg} alt="basket" />
      </StyledIconsDiv>
    </StyledHeader>
  );
}

export default Header;

