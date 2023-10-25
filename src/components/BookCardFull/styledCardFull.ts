import styled from "styled-components";
import { colors } from "../../styledConstants";

export const StyledCardDescriptionWrapper = styled.div`
display: flex;
flex-direction: column;
width: 526px;
`

export const StyledCardFullTitle = styled.div`
max-width: 420px;
color: ${colors.darkgrey};
font-family: Unica One;
font-size: 36px;
font-style: normal;
font-weight: 400;
line-height: normal;
& span{
  color: ${colors.blue};
}
`
export const StyledAuthorDiv = styled.div<{$description?: boolean}>`
margin-top: 10px;
width: 526px;
min-height: ${props => props.$description ? "200px" : "66px"};
border-radius: 20px;
border: 2px dashed  ${colors.darkgrey};
background:  #FFF;
box-shadow: 9px 7px 0px 0px ${colors.darkgrey};
color:  ${colors.lightgrey};
font-family: Syne;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 21px;
padding: 21px 30px;
overflow: hidden;
`
export const StyledBookImg = styled.img`
width: 280px;
height: 417px;
margin: auto 0;
border-radius: 10px;
box-shadow: 10px 12px 10px -6px rgba(61, 60, 60, 0.86);
`

export const StyledPriceBook = styled.p`
color: ${colors.orange};
font-family: Syne;
font-size: 36px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 50px;
margin-bottom: 25px;
`

export const StyledBuyButton = styled.button<{$buy?:boolean;}>`
cursor: pointer;
margin-top: 10px;
width: 255px;
height: 46px;
border: 2px solid ${colors.darkgrey};
border-radius: 20px;
background-color: ${props => props.$buy ? colors.orange : colors.yellow};
color: ${colors.darkgrey};
font-family: Syne;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
transition: 0.5s background-color;
&:hover {
  background-color: ${props => props.$buy ? colors.yellow : colors.orange};
}
`

export const StyledTextContainer = styled.div`
max-height: 150px;
overflow: auto;
scrollbar-width: thin; 
  scrollbar-color: transparent #333; 
  -ms-overflow-style: none;
&::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.darkgrey}; 
    border-radius: 5px;
  }
`