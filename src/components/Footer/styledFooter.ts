import styled from 'styled-components'
import defaultI from '../../assets/icons/default_app.svg'
import hoverI from '../../assets/icons/hover_app.svg'

export const StyledP = styled.p`
font-family: Syne, sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const StyledFooter = styled.footer`
display: flex;
justify-content: space-between;
align-items: center;
border-top: 2px dashed black;
padding-top: 44px;
`

export const StyledSocialDiv = styled.div`
display: flex;
width: 203px;
justify-content: space-between;
`
export const StyledSocialIcon = styled.img`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-55%,-58%);
`
export const StyledSocialIconDiv = styled.div`
position: relative;
background-image: url(${defaultI});
background-position: center;
background-size: 100%;
background-repeat:no-repeat;
width: 50px;
height: 55px;
transition: background-image 0.3s ease;

&:hover {
      background-image: url(${hoverI});
      cursor: pointer;
   }
`