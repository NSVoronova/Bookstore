import React from 'react'
import book from '../../../assets/icons/BookOpen.svg'
import { StyledNotFound } from './styledNothingFound'
import { StyledSimpleDiv } from '../../../styledConstants'

const NothingFound = ({str}: {str:string}) => {
  return (
    <StyledSimpleDiv>
      <img src={book} alt="book"/>
      <StyledNotFound>{str}</StyledNotFound>
    </StyledSimpleDiv>
  )
}

export default NothingFound
