import React from 'react'
import book_img from '../../assets/images/book.gif'
import main_img from '../../assets/images/main_image.jpg'
import Input from '../../components/Input/Input'
import { StyledBookImg, StyledDashedDiv, StyledExploreButton, StyledMainHeader, StyledMainImg, StyledMainText, StyledMainWrapper } from './styledMainPage'

const MainPage = () => {
  return (
    <>
      <StyledMainWrapper>
        <div>
          <StyledMainHeader>What book you looking for?</StyledMainHeader>
          <StyledBookImg src={book_img} alt="book" />
          <StyledMainText>Explore our catalog and find your next read.</StyledMainText>
          <Input/>
          <StyledExploreButton/>
          <StyledDashedDiv></StyledDashedDiv>
        </div>
        <StyledMainImg src={main_img} alt="main_image" />
      </StyledMainWrapper>
    </>
  )
}

export default MainPage
