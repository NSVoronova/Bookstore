import styled from "styled-components";
import { colors } from "../../styledConstants";

export const StyledBasketContainer = styled.div<{$open?: boolean}>`
  position: fixed;
  top: 0;
  right: ${props => props.$open ? "0" : "-486px"};
  width: 486px;
  height: 100%;
  /* padding: 50px 33px 0px 37px; */
  background-color: #fff;
  z-index: 1000;
  overflow-y: auto;
  transition: right 0.5s;
`

export const StyledBasketContent = styled.div`
   display: flex;
    flex-direction: column;
    align-items: self-start;
    height: 100%;
`

export const StyledOverlay = styled.div<{$open?: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: ${props => (props.$open ? "block" : "none")};
  z-index: 999; 
  transition: opacity 0.3s;
`

export const StyledBasketHeader = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  color: ${colors.darkgrey};
font-family: Syne;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin: 50px 30px 10px 20px;
& span {
  color: ${colors.blue};
}
`

export const StyledBooksContainer = styled.div`
  overflow-y: auto;
  height: 500px;
  width: 100%;
  flex-grow: 1;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.lightgrey}; 
    border-radius: 5px;
  }
  
`

export const StyledBasketPriceContainer = styled.div`
width: 100%;
height: 180px;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 34px 30px 30px 30px;
border: 2px solid ${colors.darkgrey};
border-radius: 20px 0px 0px 0px;
color: ${colors.darkgrey};
font-family: Syne;
font-size: 24px;
font-style: normal;
font-weight: 500;
& button:last-child {
  background-color: ${colors.orange};
  height: 40px;
  border: 2px solid ${colors.darkgrey};
  border-radius: 20px;
  color: ${colors.darkgrey};
text-align: center;
font-family: Syne;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`
export const StyledBasketPrice = styled.div`
  width: 142px;
height: 40px;
border: 2px solid ${colors.darkgrey};
border-radius: 20px;
text-align: center;
padding: 3px;
margin-top: -5px;
background-color: ${colors.yellow};
`