import React from 'react'
import { StyledFooter, StyledP, StyledSocialDiv, StyledSocialIcon, StyledSocialIconDiv } from './styledFooter';
import linkedin from '../../assets/icons/LinkedinLogo.svg'
import github from '../../assets/icons/GithubLogo.svg'
import instagram from '../../assets/icons/instagram-logo.svg'

const Footer = () => {
  return (
    <StyledFooter>
     <StyledP>BookStore Project</StyledP>
     <StyledSocialDiv>
      <StyledSocialIconDiv>
      <StyledSocialIcon src={linkedin} alt="app" />
      </StyledSocialIconDiv>
      <StyledSocialIconDiv>
      <StyledSocialIcon src={github} alt="app" />
      </StyledSocialIconDiv>
      <StyledSocialIconDiv>
      <StyledSocialIcon src={instagram} alt="app" />
      </StyledSocialIconDiv>
     </StyledSocialDiv>
     <StyledP>by Nadzeya Voranava</StyledP>
    </StyledFooter>
  )
}

export default Footer
