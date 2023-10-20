import styled from "styled-components";
import { colors } from "../../styledConstants";

export const StyledBasketContainer = styled.div<{$open?: boolean}>`
  position: fixed;
  top: 0;
  right: ${props => props.$open ? "0" : "-486px"};
  width: 486px;
  height: 100%;
  padding: 50px 33px 0px 37px;
  background-color: #fff;
  z-index: 1000;
  overflow-y: auto;
  transition: right 0.5s;
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

`

export const StyledBooksContainer = styled.div`
  overflow-y: auto;
  height: 500px;
  width: 100%;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.lightgrey}; 
    border-radius: 5px;
  }
`