import styled from "styled-components";
import { colors } from "../../styledConstants";

export const StyledSuccessContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -100px;
  & p {
    margin-top: 20px;
    color: ${colors.lightgrey};
text-align: center;
font-family: Syne;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
  }
  & button {
    margin-top: 20px;
    display: flex;
width: 420px;
height: 50px;
justify-content: center;
align-items: center;
border-radius: 20px;
border: 2px solid ${colors.darkgrey};
background: ${colors.yellow};
color: ${colors.darkgrey};
font-family: Syne;
font-size: 24px;
font-style: normal;
font-weight: 400;
    &:hover {
      cursor: pointer;
      background-color: ${colors.orange};
    }
  }
`
export const StyledIconBasket = styled.img`
width: 25px;
margin-right: 20px;
`
export const StyledSuccessIcon = styled.img`
  width: 400px;
`