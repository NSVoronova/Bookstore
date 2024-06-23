import styled from "styled-components";
import basket_img from '../../assets/icons/busket.svg'
import { colors } from "../../styledConstants";

export const StyledBasketBtn = styled.button<{$full?: boolean, $isAdded?: boolean}>`
width: ${props => props.$full ? "255px" : "200px"};
height: 46px;
border-radius: 20px;
border: 2px solid #3D3C3C;
background-color: ${props => props.$isAdded ? colors.orange : colors.yellow};
background-image: url(${basket_img});
background-repeat: no-repeat;
background-position: center;
margin-top: 10px;
transition: background-color 0.3s ease;
&:hover {
  cursor: pointer;
  background-color: ${colors.orange};
}
`