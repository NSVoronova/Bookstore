import React from 'react'
import { StyledFooter, StyledP, StyledSocialDiv } from './styledFooter';
import circle_default from '../../assets/icons/default_app.svg'

const Footer = () => {
  return (
    <StyledFooter>
     <StyledP>BookStore Project</StyledP>
     <StyledSocialDiv>
      <img src={circle_default} alt="app" />
      <img src={circle_default} alt="app" />
      <img src={circle_default} alt="app" />
     </StyledSocialDiv>
     <StyledP>by Nadzeya Voranava</StyledP>
    </StyledFooter>
  )
}

export default Footer
