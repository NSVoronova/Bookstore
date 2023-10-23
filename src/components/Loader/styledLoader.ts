import styled, { keyframes } from "styled-components";
import { colors } from "../../styledConstants";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledLoaderContainer = styled.div`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%); */
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
`
export const StyledLoader = styled.div`

   width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 3px solid  linear-gradient(#e66465, #9198e5); */
  /* border-top: 4px solid ${colors.blue};
  border-right:  4px solid ${colors.orange};
  border-left:  4px solid ${colors.orange};
  border-bottom:  4px solid ${colors.yellow};
  border-radius: 50%; */
  animation: ${spin} 2s linear infinite;
  & img {
    width: 40px;
  height: 40px;
  }
`

export const StyledLoaderInner = styled