import styled, { keyframes } from "styled-components";

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
  display: flex;
  justify-content: center;
  align-items: center;
`
export const StyledLoader = styled.div`

   width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${spin} 2s linear infinite;
  & img {
    width: 40px;
  height: 40px;
  }
`

export const StyledLoaderInner = styled