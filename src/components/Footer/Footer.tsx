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
      <a href="https://www.linkedin.com/in/nadin-voronova/">
        <StyledSocialIcon src={linkedin} alt="app" />
      </a>
      </StyledSocialIconDiv>
      <StyledSocialIconDiv>
      <a href="https://github.com/NSVoronova">
        <StyledSocialIcon src={github} alt="app" />
      </a>
      </StyledSocialIconDiv>
      <StyledSocialIconDiv>
      <a href="https://www.instagram.com/nadin_voronova/">
        <StyledSocialIcon src={instagram} alt="app" />
      </a>
      </StyledSocialIconDiv>
     </StyledSocialDiv>
     <StyledP>by Nadzeya Voranava</StyledP>
    </StyledFooter>
  )
}

export default Footer
