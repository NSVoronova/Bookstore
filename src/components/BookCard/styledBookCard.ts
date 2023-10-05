import styled from "styled-components";
import favorite_img from '../../assets/icons/favorite.svg'
import basket_img from '../../assets/icons/busket.svg'

export const StyledBookWrapper = styled.div`
width: 200px;
display: flex;
flex-direction: column;
`
export const StyledSimpleDiv = styled.div`
display: flex;
justify-content: space-between;
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
&:hover {
  cursor: pointer;
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
&:hover {
  cursor: pointer;
}
`