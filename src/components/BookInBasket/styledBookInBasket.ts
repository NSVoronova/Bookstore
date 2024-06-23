import styled from "styled-components";
import { colors } from "../../styledConstants";

export const StyledBookBasketContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  height: 180px;
  border-radius: 20px;
  border: 2px dashed ${colors.lightgrey};
  margin: 20px auto;
  padding: 20px;
`;

export const StyledImgBookBasket = styled.img`
  cursor: pointer;
  width: 100px;
  height: auto;
  box-shadow: 10px 12px 10px -6px rgba(61, 60, 60, 0.36);
  border-radius: 10px;
`;

export const StyledDescriptionContainer = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
  color: ${colors.lightgrey};
  font-family: Syne;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  & p:first-child {
    font-size: 16px;
  }
  & p:last-child {
    font-size: 12px;
  }
`;

export const StyledPriceContainer = styled.div`
  width: 65px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  & p:first-child {
    color: ${colors.orange};
font-family: Syne;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
  }
`
