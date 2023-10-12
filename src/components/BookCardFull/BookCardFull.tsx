import React, { FC } from 'react'
import BookCard, { IBook } from '../BookCard/BookCard'
import basket from '../../assets/icons/busket.svg'
import SectionHeader from '../SectionHeader/SectionHeader'
import path_img from "../../assets/icons/path.svg";
import { StyledBasketBtn, StyledFavoriteBtn} from '../BookCard/styledBookCard'
import { StyledAuthorDiv, StyledBookImg, StyledBookPageDiv, StyledBuyButton, StyledCardDescriptionWrapper, StyledCardFullTitle, StyledPriceBook } from './styledCardFull'
import { templateArray } from '../../pages/MainPage/MainPage';
import { StyledSimpleDiv } from '../../styledConstants';


const BookCardFull: FC<IBook> = ({title, imageSrc,price,author,description,isFavorite}) => {
  return (
    <>
    <StyledBookPageDiv>
      <StyledBookImg src={imageSrc} alt="book_img" />
      <StyledCardDescriptionWrapper>
      <StyledSimpleDiv $between>
        <StyledCardFullTitle>{title}</StyledCardFullTitle>
        <StyledFavoriteBtn type="button"></StyledFavoriteBtn>
      </StyledSimpleDiv>
      <StyledAuthorDiv>Author(a):{author}</StyledAuthorDiv>
      <StyledAuthorDiv>{description}</StyledAuthorDiv>
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
        {Array.isArray(templateArray) && templateArray.map(({image, price}) => (
          <BookCard key={image} imageSrc={image} price={price}/>
        ))}
      </StyledSimpleDiv>
    </>
  )
}

export default BookCardFull
