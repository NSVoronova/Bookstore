import styled from "styled-components";
import favorite_img from "../../assets/icons/favorite.svg";
import delete_white from "../../assets/icons/delete_white.svg";
import { colors } from "../../styledConstants";

export const StyledFavoriteIconBtn = styled.button`
  position: absolute;
  top: 0;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  background-image: url(${favorite_img});
  background-repeat: no-repeat;
  background-position: center;
`;
export const StyledBookFavoriteContainer = styled.div`
  margin: 0px 29px;
  position: relative;
  width: 215px;
  height: 315px;
  overflow-y: hidden;
`;
export const StyledRemoveFavoriteBtn = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 17px;
  left: 0;
  width: 200px;
  height: 80px;
  border-radius: 10px;
  border: none;
  opacity: 0.8;
  background-color: ${colors.orange};
  background-image: url(${delete_white});
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;
