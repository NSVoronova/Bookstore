import styled from "styled-components";
import basket_img from '../../assets/icons/busket.svg'
import basket_hover from '../../assets/icons/busket_blue.svg'
import favorite_img from '../../assets/icons/favorite.svg'
import favorite_hover from '../../assets/icons/favorite_blue.svg'
import { colors } from "../../styledConstants";

export const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
margin-bottom: 105px; 
& img:first-child {
  cursor: pointer;
}
`
export const StyledIconsDiv = styled.div`
position: relative;
display: flex;
justify-content: space-around;
width: 118px;
`

export const StyledIconBtn = styled.button<{$basket?: boolean}>`
position: relative;
  width: 50px;
  height: 50px;
  background-color: white;
  border: none;
  background-image: ${props => props.$basket ? `url(${basket_img})` : `url(${favorite_img})`} ;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-image 0.5s;
  &:hover {
    cursor: pointer;
    background-image: ${props => props.$basket ? `url(${basket_hover})` : `url(${favorite_hover})`} ;
  }
`
export const StyledDot = styled.div<{$basket?: boolean}>`
position: absolute;
right: 0;
top: 0;
color: white;
font-family: Syne;
font-size: 11px;
font-style: normal;
font-weight: 400;
width: 15px;
height: 15px;
background-color: ${props => props.$basket ? colors.orange : colors.blue};
border-radius: 50%;
`