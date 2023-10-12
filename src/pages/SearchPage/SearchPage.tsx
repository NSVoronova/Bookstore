import React from 'react'
import Input from '../../components/Input/Input'
import { StyledArrowImg, StyledCenterContainer, StyledSelectDiv } from './styledSearch'
import { StyledSimpleDiv } from '../../styledConstants'
import { StyledMainText } from '../MainPage/styledMainPage'
import arrow_down from '../../assets/icons/arrow_down.svg'

const SearchPage = () => {
  return (
    <>
      <StyledSimpleDiv><Input/></StyledSimpleDiv>
      <StyledSimpleDiv $between style={{marginTop: "60px"}}>
        <div>Results "<span>Name Book or Name Author</span>"</div>
        <StyledSimpleDiv $between>
          <StyledSelectDiv $categories>
            <StyledMainText>Categories</StyledMainText>
            {/* <StyledArrowImg src={arrow_down} alt="arrow"/> */}
          </StyledSelectDiv>
          <StyledSelectDiv>
          <StyledMainText>Filter By</StyledMainText>
          <StyledArrowImg src={arrow_down} alt="arrow" />
          </StyledSelectDiv>
        </StyledSimpleDiv>
      </StyledSimpleDiv>
    </>
  )
}

export default SearchPage
