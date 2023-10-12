import styled from "styled-components";
import favorite_img from '../../assets/icons/favorite.svg'
import favoritewhite_img from '../../assets/icons/favorite_white.svg'
import basket_img from '../../assets/icons/busket.svg'
import { colors } from "../../styledConstants";

export const StyledBookWrapper = styled.div`
width: 200px;
display: flex;
flex-direction: column;
`

export const StyledPriceDiv = styled.div`
display: inline-block;
width: 136px;
height: 46px;
border: 2px solid #3D3C3C;
border-radius: 20px;
color:  #3D3C3C;
text-align: center;
font-family: Syne, sans-serif;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
padding: 5px;
`

export const StyledFavoriteBtn = styled.button`
width: 57px;
height: 46px;
border-radius: 20px;
border: 2px solid #3D3C3C;
background-image: url(${favorite_img});
background-position: center;
background-repeat: no-repeat;
background-color: white;
transition: background-color 0.3s ease;
&:hover {
  cursor: pointer;
  background-color: ${colors.blue};
  background-image: url(${favoritewhite_img});
}
`

export const StyledBasketBtn = styled.button`
width: 200px;
height: 46px;
border-radius: 20px;
border: 2px solid #3D3C3C;
background-color: #FDBF0F;
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

export const StyledBookImage = styled.img`
cursor: pointer;
width: 200px;
height: 298px;
object-fit: cover;
object-position: center;
border-radius: 10px;
box-shadow: 10px 12px 10px -6px rgba(61, 60, 60, 0.36);
margin-bottom: 20px;
`