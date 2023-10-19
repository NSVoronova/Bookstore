import styled from "styled-components";
import favorite_img from '../../assets/icons/favorite.svg'
import favoritewhite_img from '../../assets/icons/favorite_white.svg'
import {colors} from '../../styledConstants'
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